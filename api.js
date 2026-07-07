/* ==========================================================================
   Nexa Commerce - Safe API client for the static prototype
   ========================================================================== */

(function initNexaApi(global) {
  const SESSION_KEY = "nexa_auth_session";
  const API_BASE_KEY = "nexa_api_base_url";
  const TENANT_KEY = "nexa_tenant_id";

  function defaultApiBaseUrl() {
    if (global.NEXA_API_BASE_URL) {
      return global.NEXA_API_BASE_URL;
    }
    const configured = localStorage.getItem(API_BASE_KEY);
    if (configured) {
      return configured;
    }
    return "http://localhost:8080";
  }

  function apiBaseUrl() {
    return defaultApiBaseUrl().replace(/\/+$/, "");
  }

  function currentStorage() {
    return localStorage.getItem(SESSION_KEY) ? localStorage : sessionStorage;
  }

  function readSession() {
    const raw = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (_error) {
      clearSession();
      return null;
    }
  }

  function writeSession(session, persist) {
    clearSession();
    const targetStorage = persist ? localStorage : sessionStorage;
    targetStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem("nexa_auth_user");
    localStorage.removeItem("nexa_session");
    localStorage.removeItem("nexa_login_state");
    sessionStorage.removeItem("nexa_auth_user");
    sessionStorage.removeItem("nexa_session");
    sessionStorage.removeItem("nexa_login_state");
  }

  function safeErrorMessage(status) {
    if (status === 401 || status === 403) {
      return "Credenciais invalidas ou acesso negado.";
    }
    if (status === 429) {
      return "Muitas tentativas. Aguarde antes de tentar novamente.";
    }
    if (status >= 500) {
      return "Servico indisponivel no momento.";
    }
    return "Nao foi possivel concluir a operacao.";
  }

  async function parseJson(response) {
    const text = await response.text();
    if (!text) {
      return null;
    }
    try {
      return JSON.parse(text);
    } catch (_error) {
      return null;
    }
  }

  function baseHeaders() {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    const tenantId = localStorage.getItem(TENANT_KEY) || sessionStorage.getItem(TENANT_KEY);
    if (tenantId) {
      headers["X-Tenant-Id"] = tenantId;
    }
    const session = readSession();
    if (session?.accessToken) {
      headers.Authorization = `${session.tokenType || "Bearer"} ${session.accessToken}`;
    }
    return headers;
  }

  async function request(path, options = {}) {
    const response = await fetch(`${apiBaseUrl()}${path}`, {
      ...options,
      headers: {
        ...baseHeaders(),
        ...(options.headers || {})
      }
    });
    const body = await parseJson(response);
    if (!response.ok) {
      const error = new Error(safeErrorMessage(response.status));
      error.status = response.status;
      error.body = body;
      throw error;
    }
    return body;
  }

  async function login(email, password, persist) {
    const response = await request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    writeSession(
      {
        tokenType: response.tokenType,
        accessToken: response.accessToken,
        expiresInSeconds: response.expiresInSeconds,
        refreshToken: response.refreshToken,
        refreshExpiresInSeconds: response.refreshExpiresInSeconds,
        authenticatedAt: new Date().toISOString()
      },
      persist
    );
    return response;
  }

  async function logout() {
    const session = readSession();
    try {
      if (session?.refreshToken) {
        await request("/api/auth/logout", {
          method: "POST",
          body: JSON.stringify({ refreshToken: session.refreshToken })
        });
      }
    } finally {
      clearSession();
    }
  }

  global.NexaApi = {
    apiBaseUrl,
    clearSession,
    currentStorage,
    login,
    logout,
    readSession,
    setApiBaseUrl(value) {
      if (!value) {
        localStorage.removeItem(API_BASE_KEY);
        return;
      }
      localStorage.setItem(API_BASE_KEY, value.replace(/\/+$/, ""));
    },
    setTenantId(value) {
      if (!value) {
        localStorage.removeItem(TENANT_KEY);
        sessionStorage.removeItem(TENANT_KEY);
        return;
      }
      localStorage.setItem(TENANT_KEY, value);
    }
  };
})(window);
