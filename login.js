/* ==========================================================================
   Nexa Commerce - Authentication UI
   ========================================================================== */

const loginView = document.querySelector("#loginView");
const registerView = document.querySelector("#registerView");
const recoveryView = document.querySelector("#recoveryView");

const goToRecovery = document.querySelector("#goToRecovery");
const goToRegister = document.querySelector("#goToRegister");
const registerGoToLogin = document.querySelector("#registerGoToLogin");
const recoveryGoToLogin = document.querySelector("#recoveryGoToLogin");

const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const recoveryForm = document.querySelector("#recoveryForm");
const toast = document.querySelector("#toast");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function transitionToView(targetView) {
  const allViews = [loginView, registerView, recoveryView];
  clearAllErrors();
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  allViews.forEach((view) => {
    if (!view) return;
    if (view === targetView) {
      view.style.display = "block";
      if (!prefersReduced) {
        view.style.opacity = "0";
        view.style.transform = "translateY(10px)";
        setTimeout(() => {
          view.style.transition = "opacity 0.3s ease, transform 0.3s ease";
          view.style.opacity = "1";
          view.style.transform = "translateY(0)";
        }, 50);
      } else {
        view.style.opacity = "1";
        view.style.transform = "translateY(0)";
      }
      return;
    }
    view.style.display = "none";
  });
}

function clearAllErrors() {
  document.querySelectorAll(".field-error").forEach((element) => {
    element.textContent = "";
  });
  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("invalid");
  });
  document.querySelectorAll(".auth-error-alert").forEach((alert) => {
    alert.style.display = "none";
    alert.textContent = "";
  });
}

function setFieldError(fieldId, errorMsg) {
  const errorSpan = document.querySelector(`#${fieldId}Error`);
  const inputEl = document.querySelector(`#${fieldId}`);
  if (errorSpan) errorSpan.textContent = errorMsg;
  if (inputEl) inputEl.classList.add("invalid");
}

function setGlobalError(alertId, errorMsg) {
  const alertEl = document.querySelector(`#${alertId}`);
  if (!alertEl) return;
  alertEl.textContent = errorMsg;
  alertEl.style.display = "block";
}

function setupPasswordToggle(toggleBtnId, passwordInputId) {
  const toggleBtn = document.querySelector(`#${toggleBtnId}`);
  const passwordInput = document.querySelector(`#${passwordInputId}`);
  if (!toggleBtn || !passwordInput) return;

  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    const eyeSvg = toggleBtn.querySelector(".eye-svg");
    const eyeOffSvg = toggleBtn.querySelector(".eye-off-svg");
    if (eyeSvg && eyeOffSvg) {
      eyeSvg.style.display = isPassword ? "none" : "block";
      eyeOffSvg.style.display = isPassword ? "block" : "none";
    }

    toggleBtn.setAttribute("aria-label", isPassword ? "Ocultar senha" : "Mostrar senha");
  });
}

function setButtonLoading(button, isLoading) {
  if (!button) return;
  const btnText = button.querySelector(".btn-text");
  const spinner = button.querySelector(".spinner");

  button.disabled = isLoading;
  button.classList.toggle("loading", isLoading);
  if (btnText) btnText.style.visibility = isLoading ? "hidden" : "visible";
  if (spinner) spinner.style.display = isLoading ? "block" : "none";
}

function setFormDisabled(form, isDisabled) {
  if (!form) return;
  form.querySelectorAll("input, button").forEach((element) => {
    element.disabled = isDisabled;
  });
}

setupPasswordToggle("loginPasswordToggle", "loginPassword");
setupPasswordToggle("registerPasswordToggle", "registerPassword");

if (goToRecovery) goToRecovery.addEventListener("click", () => transitionToView(recoveryView));
if (goToRegister) goToRegister.addEventListener("click", () => transitionToView(registerView));
if (registerGoToLogin) registerGoToLogin.addEventListener("click", () => transitionToView(loginView));
if (recoveryGoToLogin) recoveryGoToLogin.addEventListener("click", () => transitionToView(loginView));

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAllErrors();

    const email = document.querySelector("#loginEmail").value.trim();
    const password = document.querySelector("#loginPassword").value;
    const submitBtn = document.querySelector("#loginSubmit");
    let hasError = false;

    if (!email) {
      setFieldError("loginEmail", "O e-mail corporativo e obrigatorio.");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setFieldError("loginEmail", "Insira um endereco de e-mail valido.");
      hasError = true;
    }

    if (!password) {
      setFieldError("loginPassword", "A senha e obrigatoria.");
      hasError = true;
    }

    if (hasError) {
      setGlobalError("loginErrorAlert", "Corrija os campos para entrar.");
      return;
    }

    setButtonLoading(submitBtn, true);
    setFormDisabled(loginForm, true);

    window.NexaApi.login(email, password, document.querySelector("#loginRemember")?.checked === true)
      .then(() => {
        showToast("Autenticacao realizada com sucesso.");
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 500);
      })
      .catch((error) => {
        setGlobalError("loginErrorAlert", error.message || "Nao foi possivel autenticar.");
      })
      .finally(() => {
        setButtonLoading(submitBtn, false);
        setFormDisabled(loginForm, false);
      });
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAllErrors();
    setGlobalError(
      "registerErrorAlert",
      "Cadastro ainda nao esta conectado ao backend. Use o onboarding publico ou solicite a proxima etapa de integracao."
    );
  });
}

if (recoveryForm) {
  recoveryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAllErrors();
    setGlobalError(
      "recoveryErrorAlert",
      "Recuperacao de senha ainda nao esta conectada ao backend. Esta acao foi bloqueada para evitar fluxo falso em producao."
    );
  });
}

function handleSocialLogin(providerName) {
  setGlobalError("loginErrorAlert", `Login social via ${providerName} ainda nao esta conectado ao backend.`);
}

const googleBtn = document.querySelector("#googleLoginBtn");
if (googleBtn) googleBtn.addEventListener("click", () => handleSocialLogin("Google"));

const appleBtn = document.querySelector("#appleLoginBtn");
if (appleBtn) appleBtn.addEventListener("click", () => handleSocialLogin("Apple"));
