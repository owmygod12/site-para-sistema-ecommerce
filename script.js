/* ==========================================================================
   Nexa Commerce - Lógica Interativa do Painel (JavaScript Puro)
   ========================================================================== */

// Mock de Banco de Dados (Simulando tabelas do Banco Oracle para futura integração Java)
const products = [
  { name: "Mochila Terra", sku: "MOC-184", price: "R$ 289", stock: 18, status: "ok", thumb: "" },
  { name: "Luminaria Dobra", sku: "LUM-402", price: "R$ 169", stock: 6, status: "low", thumb: "coral" },
  { name: "Kit Studio", sku: "KIT-223", price: "R$ 339", stock: 34, status: "ok", thumb: "blue" },
  { name: "Capa Horizonte", sku: "CAP-098", price: "R$ 119", stock: 4, status: "low", thumb: "" },
  { name: "Mesa Prisma", sku: "MES-510", price: "R$ 899", stock: 12, status: "ok", thumb: "coral" }
];

const orders = [
  { id: "#1098", customer: "Bruna Martins", total: "R$ 649", status: "Aguardando envio", payment: "Pago", items: "Mochila Terra, Kit Studio" },
  { id: "#1097", customer: "Casa Aurora", total: "R$ 1.269", status: "Separacao", payment: "Pago", items: "Mesa Prisma, Luminaria Dobra" },
  { id: "#1096", customer: "Rafa Couto", total: "R$ 238", status: "Em analise", payment: "Pix pendente", items: "Capa Horizonte x2" },
  { id: "#1095", customer: "Studio Marina", total: "R$ 908", status: "Enviado", payment: "Pago", items: "Kit Studio, Luminaria Dobra" }
];

const metrics = {
  today: ["R$ 48.920", "386", "4,8%", "R$ 126,74"],
  week: ["R$ 312.450", "2.148", "5,2%", "R$ 145,46"],
  month: ["R$ 1.184.900", "8.736", "4,6%", "R$ 135,64"]
};

// Seleção de Elementos DOM
const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const toast = document.querySelector("#toast");
const productTable = document.querySelector("#productTable");
const productSearch = document.querySelector("#productSearch");
const stockFilter = document.querySelector("#stockFilter");
const orderList = document.querySelector("#orderList");
const orderDetail = document.querySelector("#orderDetail");

// Seletores para Navegação Responsiva / Mobile
const sidebar = document.querySelector("#sidebar");
const menuToggle = document.querySelector("#menuToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const ordersScrim = document.querySelector("#ordersScrim");
const ordersLayout = document.querySelector(".orders-layout");

// Sistema de Notificações (Toast)
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

// Controle de Visualização das Abas (Abstração pronta para rotas ou endpoints Java REST API)
function setView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  
  // Simular estado de carregamento assíncrono (Java API retrieval feel)
  const targetView = document.getElementById(viewId);
  if (targetView) {
    const panels = targetView.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.add("loading-shimmer");
      setTimeout(() => {
        panel.classList.remove("loading-shimmer");
      }, 350);
    });
  }

  // Fechar sidebar móvel se estiver aberta
  if (sidebar && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
}

// Configuração de Eventos da Sidebar
navItems.forEach((item) => {
  item.addEventListener("click", () => setView(item.dataset.view));
});

// Hamburguer Menu para Dispositivos Móveis
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
  });
}

if (sidebarClose && sidebar) {
  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// Alternar entre métricas (Dia, Semana, Mês) com micro-interação
document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    
    // Simula carregamento rápido ao trocar métricas
    const selected = metrics[button.dataset.range];
    const metricGrid = document.querySelector(".metrics-grid");
    
    metricGrid.style.opacity = "0.6";
    setTimeout(() => {
      document.querySelector("#revenueMetric").textContent = selected[0];
      document.querySelector("#ordersMetric").textContent = selected[1];
      document.querySelector("#conversionMetric").textContent = selected[2];
      document.querySelector("#ticketMetric").textContent = selected[3];
      metricGrid.style.opacity = "1";
    }, 150);
  });
});

// Customizador Visual da Loja (Preview em tempo real com transições)
const themeNameInput = document.querySelector("#themeName");
if (themeNameInput) {
  themeNameInput.addEventListener("input", (event) => {
    document.querySelector("#campaignTitle").textContent = event.target.value || "Coleção sem nome";
  });
}

document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("active"));
    swatch.classList.add("active");
    document.querySelector("#shopWindow").style.setProperty("--shop-accent", swatch.dataset.color);
  });
});

const expressToggleInput = document.querySelector("#expressToggle");
if (expressToggleInput) {
  expressToggleInput.addEventListener("change", (event) => {
    document.querySelector("#checkoutBadge").textContent = event.target.checked
      ? "Checkout expresso ativo"
      : "Checkout padrão ativo";
  });
}

const discountRangeInput = document.querySelector("#discountRange");
if (discountRangeInput) {
  discountRangeInput.addEventListener("input", (event) => {
    document.querySelector("#discountValue").textContent = event.target.value;
  });
}

const previewBtn = document.querySelector("#previewButton");
if (previewBtn) {
  previewBtn.addEventListener("click", () => {
    document.querySelector("#shopWindow").classList.toggle("compact-preview");
    showToast("Visualização de tela responsiva atualizada.");
  });
}

// Gatilhos de Ação Simples (comunicação futura com endpoints Java Spring Boot)
const saveThemeBtn = document.querySelector("#saveTheme");
if (saveThemeBtn) {
  saveThemeBtn.addEventListener("click", () => showToast("Tema salvo como rascunho."));
}
document.querySelector("#publishButton").addEventListener("click", () => showToast("Loja online sincronizada e publicada!"));
document.querySelector("#newProductButton").addEventListener("click", () => showToast("Abrindo formulário de criação de produto."));
document.querySelector("#batchButton").addEventListener("click", () => showToast("Gerando etiquetas em PDF para impressão."));
document.querySelector("#launchCampaign").addEventListener("click", () => showToast("Campanha de marketing disparada com sucesso!"));

// Fechamento de Gavetas e Scrims (Dispositivos móveis)
if (ordersScrim) {
  ordersScrim.addEventListener("click", () => {
    if (ordersLayout) ordersLayout.classList.remove("detail-open");
  });
}

// Renderização do Catálogo de Produtos
function renderProducts() {
  const term = productSearch.value.trim().toLowerCase();
  const stock = stockFilter.value;
  const filtered = products.filter((product) => {
    const matchesText = `${product.name} ${product.sku}`.toLowerCase().includes(term);
    const matchesStock = stock === "all" || product.status === stock;
    return matchesText && matchesStock;
  });

  productTable.innerHTML = "";
  filtered.forEach((product) => {
    const row = document.createElement("article");
    row.className = "product-row";
    row.innerHTML = `
      <div class="product-thumb ${product.thumb}" aria-hidden="true"></div>
      <div>
        <strong>${product.name}</strong>
        <small>${product.sku}</small>
      </div>
      <span>${product.price}</span>
      <div>
        <span class="pill ${product.status === "low" ? "warning" : ""}">${product.stock} em estoque</span>
      </div>
      <button class="ghost-button" type="button">Editar</button>
    `;
    row.querySelector("button").addEventListener("click", () => showToast(`Carregando dados de ${product.name}...`));
    productTable.appendChild(row);
  });

  if (!filtered.length) {
    productTable.innerHTML = `<p class="empty-state">Nenhum produto cadastrado corresponde aos filtros.</p>`;
  }
}

// Renderização e Operação dos Pedidos
function renderOrders(selectedId = orders[0].id) {
  orderList.innerHTML = "";
  orders.forEach((order) => {
    const item = document.createElement("button");
    item.className = `order-item ${order.id === selectedId ? "active" : ""}`;
    item.type = "button";
    item.innerHTML = `
      <strong>${order.id} · ${order.customer}</strong>
      <span>${order.total}</span>
      <span class="pill ${order.status === "Aguardando envio" ? "warning" : order.status === "Enviado" ? "" : "warning"}">${order.status}</span>
    `;
    item.addEventListener("click", () => {
      renderOrders(order.id);
      if (ordersLayout) ordersLayout.classList.add("detail-open");
    });
    orderList.appendChild(item);
  });

  const activeOrder = orders.find((order) => order.id === selectedId);
  orderDetail.innerHTML = `
    <div class="order-detail-header">
      <p class="eyebrow">Detalhe do pedido</p>
      <button class="close-detail" id="closeDetail" aria-label="Fechar detalhes" type="button">&times;</button>
    </div>
    <h3>${activeOrder.id} · ${activeOrder.customer}</h3>
    <dl>
      <div class="order-detail-row"><dt>Status</dt><dd>${activeOrder.status}</dd></div>
      <div class="order-detail-row"><dt>Pagamento</dt><dd>${activeOrder.payment}</dd></div>
      <div class="order-detail-row"><dt>Total</dt><dd>${activeOrder.total}</dd></div>
      <div class="order-detail-row"><dt>Itens</dt><dd>${activeOrder.items}</dd></div>
    </dl>
    <button class="primary-action" type="button">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </span>
      Acompanhar envio
    </button>
  `;
  
  // Registrar evento do botão fechar detalhes no mobile
  const closeBtn = orderDetail.querySelector("#closeDetail");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (ordersLayout) ordersLayout.classList.remove("detail-open");
    });
  }

  orderDetail.querySelector(".primary-action").addEventListener("click", () => showToast(`Rastreio do pedido ${activeOrder.id} gerado.`));
}

const productSVGs = {
  clay: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:50%; height:50%; opacity:0.8;"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/><path d="M8 12h8v5H8z"/></svg>`,
  leaf: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:50%; height:50%; opacity:0.8;"><path d="M12 2v6M8 8h8M12 8v11M9 19h6M7 22h10"/></svg>`,
  blue: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:50%; height:50%; opacity:0.8;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="12" y1="8" x2="16" y2="8"/><line x1="12" y1="12" x2="16" y2="12"/></svg>`
};

// Função para carregar tema publicado do localStorage e sincronizar no landing preview
function loadPublishedTheme() {
  const publishedTheme = localStorage.getItem("nexa_theme_published");
  if (!publishedTheme) return;
  try {
    const config = JSON.parse(publishedTheme);
    const landingThemeName = document.querySelector("#landingThemeName");
    const campaignTitle = document.querySelector("#campaignTitle");
    const landingCheckoutStatus = document.querySelector("#landingCheckoutStatus");
    const landingDiscountStatus = document.querySelector("#landingDiscountStatus");
    const landingPaletteDot = document.querySelector("#landingPaletteDot");
    const shopWindow = document.querySelector("#shopWindow");
    
    // Fallbacks para suportar estruturas planas ou aninhadas
    const brand = config.brand || { name: config.storeName || "Atelier Norte", slogan: "", logoUrl: config.logoUrl || "" };
    const colors = config.colors || {
      accent: config.colorAccent || "#0f5132",
      bg: config.colorBg || "#ffffff",
      text: config.colorText || "#111111",
      btn: config.colorBtn || "#111111",
      secondary: "#64748b",
      badges: config.colorAccent || "#0f5132",
      sale: "#ef4444",
      darkMode: !!config.darkMode
    };
    const typography = config.typography || {
      fontTitle: config.fontTitle || "'Outfit', sans-serif",
      fontBase: config.fontBase || "'Plus Jakarta Sans', sans-serif",
      fontSize: config.fontSize || "14",
      fontTitleWeight: config.fontTitleWeight || "800",
      borders: config.borders || "8",
      spacing: config.spacing || "24"
    };
    const layout = config.layout || {
      headerLayout: "layout-split",
      stickyHeader: true,
      menuType: "simple",
      gridColumns: "3",
      density: "balanced",
      btnStyle: "rounded",
      cardStyle: "minimal"
    };
    const homepage = config.homepage || {
      bannerTitle: config.bannerTitle || "Coleção Lançamento",
      bannerSubtitle: config.bannerSubtitle || "",
      bannerBtnText: "Comprar",
      bannerAlign: "align-left"
    };

    if (landingThemeName) landingThemeName.textContent = brand.name;
    if (campaignTitle) campaignTitle.textContent = homepage.bannerTitle;
    
    if (landingCheckoutStatus) {
      landingCheckoutStatus.textContent = config.expressCheckout ? "Expresso (Ativo)" : "Padrão (Ativo)";
    }
    const checkoutBadge = document.querySelector("#checkoutBadge");
    if (checkoutBadge) {
      checkoutBadge.textContent = config.expressCheckout ? "Checkout expresso ativo" : "Checkout padrão ativo";
    }
    if (landingDiscountStatus) {
      landingDiscountStatus.textContent = `${config.promoDiscount || '10'}% acima de R$ 300`;
    }
    if (landingPaletteDot) {
      landingPaletteDot.style.backgroundColor = colors.accent;
    }
    
    if (shopWindow) {
      // Aplicar configurações gerais do preset de estilo
      shopWindow.className = `shop-window font-customized preset-${config.themePreset || 'casa'} density-${layout.density || 'balanced'}`;
      if (colors.darkMode) {
        shopWindow.classList.add("theme-dark-view");
      }
      
      shopWindow.style.setProperty("--shop-accent", colors.accent);
      shopWindow.style.setProperty("--shop-bg", colors.bg);
      shopWindow.style.setProperty("--shop-text", colors.text);
      shopWindow.style.setProperty("--shop-btn-bg", colors.btn);
      shopWindow.style.setProperty("--shop-btn-text", colors.btn === "#ffffff" ? "#000000" : "#ffffff");
      shopWindow.style.setProperty("--shop-radius", typography.borders + "px");
      shopWindow.style.setProperty("--shop-btn-radius", layout.btnStyle === "pill" ? "99px" : (layout.btnStyle === "square" ? "0px" : "6px"));
      shopWindow.style.setProperty("--shop-spacing", typography.spacing + "px");

      // Fontes
      shopWindow.style.fontFamily = typography.fontBase;
      shopWindow.style.fontSize = typography.fontSize + "px";

      const headings = shopWindow.querySelectorAll("h3, h4, h5, strong, .hero-title, .product-card-title, .product-detail-title");
      headings.forEach(h => {
        h.style.fontFamily = typography.fontTitle;
        h.style.fontWeight = typography.fontTitleWeight;
      });
      
      // Renderizar produtos no Preview do Painel
      const productStrip = shopWindow.querySelector(".product-strip");
      if (productStrip && config.products) {
        productStrip.className = `product-strip cols-${layout.gridColumns || 3}`;
        productStrip.innerHTML = "";
        const visibleProds = config.products.filter(p => p.visible);
        if (visibleProds.length === 0) {
          productStrip.innerHTML = `<div class="empty-state-strip">Nenhum produto exibido.</div>`;
        } else {
          visibleProds.forEach(prod => {
            const card = document.createElement("article");
            card.className = `product-card ${layout.cardStyle === "minimal" ? "" : (layout.cardStyle === "shadowed" ? "has-shadow" : "has-border")}`;
            card.style.borderRadius = typography.borders + "px";

            const isSoldOut = prod.stock <= 0;
            let badgeHtml = "";
            if (isSoldOut) {
              badgeHtml = `<span class="shop-badge badge-soldout">Esgotado</span>`;
            } else if (prod.isNew) {
              badgeHtml = `<span class="shop-badge badge-new" style="background:${colors.badges}">Novo</span>`;
            } else if (prod.promoPrice) {
              badgeHtml = `<span class="shop-badge badge-sale" style="background:${colors.sale}">Promoção</span>`;
            }

            let starsHtml = "";
            if (prod.rating > 0) {
              starsHtml = `<div class="product-rating">` + "★".repeat(prod.rating) + "☆".repeat(5 - prod.rating) + `</div>`;
            }

            let priceHtml = "";
            if (prod.promoPrice) {
              priceHtml = `
                <span class="price-original">${prod.price}</span>
                <span class="price-current" style="color:${colors.sale}">${prod.promoPrice}</span>
              `;
            } else {
              priceHtml = `<span class="price-current" style="color:${colors.accent}">${prod.price}</span>`;
            }

            card.innerHTML = `
              ${badgeHtml}
              <div class="product-image-container" style="height: 100px; display:flex; align-items:center; justify-content:center;">
                ${productSVGs[prod.art] || productSVGs.clay}
              </div>
              <div class="product-info-block">
                ${starsHtml}
                <strong class="product-card-title">${prod.name}</strong>
                <div class="product-price-row">${priceHtml}</div>
              </div>
            `;
            productStrip.appendChild(card);
          });
        }
      }
    }
    
    const landingShopLogo = document.querySelector("#landingShopLogo");
    if (landingShopLogo) {
      if (brand.logoUrl) {
        landingShopLogo.innerHTML = `<img src="${brand.logoUrl}" style="max-height:30px; max-width:120px; object-fit:contain;" alt="${brand.name}">`;
      } else {
        landingShopLogo.textContent = brand.name;
      }
    }
  } catch (e) {
    console.error("Erro ao carregar tema publicado:", e);
  }
}

// Ouvintes de Eventos para Filtros de Busca
if (productSearch) productSearch.addEventListener("input", renderProducts);
if (stockFilter) stockFilter.addEventListener("change", renderProducts);

const globalSearchInput = document.querySelector("#globalSearch");
if (globalSearchInput) {
  globalSearchInput.addEventListener("input", (event) => {
    if (event.target.value.length > 2) {
      showToast(`Pesquisando por "${event.target.value}" nas tabelas Oracle...`);
    }
  });
}

// Sincroniza abas via parâmetro da URL (Java redirection-ready)
const urlParams = new URLSearchParams(window.location.search);
const initialView = urlParams.get("view");
if (initialView && ["dashboard", "storefront", "products", "orders", "marketing"].includes(initialView)) {
  setView(initialView);
}

// Inicialização das exibições iniciais
renderProducts();
renderOrders();
loadPublishedTheme();

// Lógica de Logout
const logoutBtn = document.querySelector("#logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // Limpar chaves de sessão simulada
    localStorage.removeItem("nexa_auth_user");
    localStorage.removeItem("nexa_session");
    localStorage.removeItem("nexa_login_state");
    sessionStorage.removeItem("nexa_auth_user");
    sessionStorage.removeItem("nexa_session");
    sessionStorage.removeItem("nexa_login_state");

    if (typeof showToast === "function") {
      showToast("Sessão encerrada. Voltando ao login...");
      setTimeout(() => {
        window.location.href = "./login.html";
      }, 1000);
    } else {
      window.location.href = "./login.html";
    }
  });
}

if (logoutBtn && window.NexaApi) {
  logoutBtn.addEventListener("click", () => {
    window.NexaApi.logout().catch(() => {
      window.NexaApi.clearSession();
    });
  });
}
