/* ==========================================================================
   Nexa Commerce - Módulo de Templates Multi-Referência
   Baseado em: Anon, Bootstrap Commerce, Hayroo, GoCart
   ========================================================================== */

// ==========================================================================
// 1. Definições dos Templates
// ==========================================================================
const storeTemplates = {
  anon: {
    id: "anon",
    name: "Anon Retail",
    description: "Layout limpo e elegante com sidebar de categorias e hover effects modernos.",
    reference: "codewithsadee/anon-ecommerce-website",
    preview: {
      accentColor: "#e85d04",
      bgColor: "#ffffff",
      textColor: "#1a1a2e",
      btnColor: "#e85d04",
      cardRadius: "8",
      headerStyle: "layout-split",
      gridCols: "4",
      density: "balanced",
      cardStyle: "shadowed",
      btnStyle: "rounded",
      darkMode: false
    },
    fonts: {
      title: "'Outfit', sans-serif",
      base: "'Plus Jakarta Sans', sans-serif",
      titleWeight: "700",
      fontSize: "14",
      preset: "comercial"
    },
    sections: [
      { type: "hero", enabled: true },
      { type: "categories-bar", enabled: true },
      { type: "deal-of-day", enabled: true },
      { type: "featured-grid", enabled: true },
      { type: "testimonials", enabled: true },
      { type: "instagram-feed", enabled: true }
    ],
    categories: [
      { name: "Eletrônicos", icon: "⚡", count: 45 },
      { name: "Vestuário", icon: "👕", count: 128 },
      { name: "Casa & Jardim", icon: "🏠", count: 67 },
      { name: "Esportes", icon: "⚽", count: 34 },
      { name: "Beleza", icon: "💄", count: 89 },
      { name: "Livros", icon: "📚", count: 56 }
    ],
    mockProducts: [
      { name: "Fone Bluetooth Pro", price: "R$ 249,90", promoPrice: "R$ 189,90", stock: 42, rating: 5, installments: 6, isNew: false, freeShipping: true, art: "clay", visible: true, category: "Eletrônicos", showStock: false },
      { name: "Tênis Runner X", price: "R$ 399,00", promoPrice: "", stock: 15, rating: 4, installments: 10, isNew: true, freeShipping: true, art: "leaf", visible: true, category: "Esportes", showStock: true },
      { name: "Câmera Digital 4K", price: "R$ 1.299,00", promoPrice: "R$ 999,00", stock: 8, rating: 5, installments: 12, isNew: false, freeShipping: true, art: "blue", visible: true, category: "Eletrônicos", showStock: true },
      { name: "Jaqueta Urban", price: "R$ 329,00", promoPrice: "", stock: 22, rating: 4, installments: 5, isNew: true, freeShipping: false, art: "clay", visible: true, category: "Vestuário", showStock: false }
    ]
  },

  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap Commerce",
    description: "Plataforma multi-vendor com filtros avançados e sistema de vendedores.",
    reference: "kirilkirkov/Ecommerce-CodeIgniter-Bootstrap",
    preview: {
      accentColor: "#0d6efd",
      bgColor: "#f8f9fa",
      textColor: "#212529",
      btnColor: "#0d6efd",
      cardRadius: "6",
      headerStyle: "layout-compact",
      gridCols: "3",
      density: "balanced",
      cardStyle: "bordered",
      btnStyle: "rounded",
      darkMode: false
    },
    fonts: {
      title: "'Plus Jakarta Sans', sans-serif",
      base: "system-ui, -apple-system, sans-serif",
      titleWeight: "700",
      fontSize: "14",
      preset: "comercial"
    },
    sections: [
      { type: "hero", enabled: true },
      { type: "vendor-spotlight", enabled: true },
      { type: "featured-grid", enabled: true },
      { type: "deal-of-day", enabled: true },
      { type: "categories-bar", enabled: true },
      { type: "testimonials", enabled: true }
    ],
    categories: [
      { name: "Todas as Categorias", icon: "📦", count: 320 },
      { name: "Tecnologia", icon: "💻", count: 85 },
      { name: "Moda Feminina", icon: "👗", count: 142 },
      { name: "Moda Masculina", icon: "👔", count: 98 },
      { name: "Infantil", icon: "🧸", count: 45 },
      { name: "Acessórios", icon: "⌚", count: 76 }
    ],
    mockProducts: [
      { name: "Smartwatch Pro S3", price: "R$ 599,00", promoPrice: "R$ 449,00", stock: 30, rating: 5, installments: 10, isNew: false, freeShipping: true, art: "clay", visible: true, category: "Tecnologia", showStock: true, vendor: "TechStore" },
      { name: "Vestido Linho Natural", price: "R$ 189,00", promoPrice: "", stock: 25, rating: 4, installments: 3, isNew: true, freeShipping: false, art: "leaf", visible: true, category: "Moda Feminina", showStock: false, vendor: "Bella Moda" },
      { name: "Mochila Laptop 17\"", price: "R$ 279,00", promoPrice: "R$ 219,00", stock: 12, rating: 4, installments: 6, isNew: false, freeShipping: true, art: "blue", visible: true, category: "Acessórios", showStock: true, vendor: "TechStore" }
    ]
  },

  hayroo: {
    id: "hayroo",
    name: "Hayroo Modern",
    description: "Estética moderna com cards suaves, wishlist e trending products.",
    reference: "hasan-py/Hayroo",
    preview: {
      accentColor: "#7c3aed",
      bgColor: "#fafafa",
      textColor: "#18181b",
      btnColor: "#7c3aed",
      cardRadius: "16",
      headerStyle: "layout-centered",
      gridCols: "4",
      density: "spaced",
      cardStyle: "shadowed",
      btnStyle: "pill",
      darkMode: false
    },
    fonts: {
      title: "'Outfit', sans-serif",
      base: "'Plus Jakarta Sans', sans-serif",
      titleWeight: "600",
      fontSize: "14",
      preset: "editorial"
    },
    sections: [
      { type: "hero", enabled: true },
      { type: "trending", enabled: true },
      { type: "new-arrivals", enabled: true },
      { type: "best-sellers", enabled: true },
      { type: "testimonials", enabled: true },
      { type: "instagram-feed", enabled: true }
    ],
    categories: [
      { name: "Trending", icon: "🔥", count: 24 },
      { name: "Novidades", icon: "✨", count: 38 },
      { name: "Mais Vendidos", icon: "🏆", count: 15 },
      { name: "Ofertas", icon: "🏷️", count: 42 },
      { name: "Coleções", icon: "💎", count: 8 },
      { name: "Outlet", icon: "📢", count: 63 }
    ],
    mockProducts: [
      { name: "Sneaker Cloud Nine", price: "R$ 459,00", promoPrice: "", stock: 35, rating: 5, installments: 8, isNew: true, freeShipping: true, art: "clay", visible: true, category: "Trending", showStock: false },
      { name: "Bolsa Minimal Couro", price: "R$ 389,00", promoPrice: "R$ 299,00", stock: 10, rating: 5, installments: 6, isNew: false, freeShipping: true, art: "leaf", visible: true, category: "Mais Vendidos", showStock: true },
      { name: "Óculos Sunset UV400", price: "R$ 179,00", promoPrice: "", stock: 50, rating: 4, installments: 3, isNew: true, freeShipping: false, art: "blue", visible: true, category: "Novidades", showStock: false },
      { name: "Relógio Chrono Gold", price: "R$ 899,00", promoPrice: "R$ 699,00", stock: 5, rating: 5, installments: 12, isNew: false, freeShipping: true, art: "clay", visible: true, category: "Ofertas", showStock: true }
    ]
  },

  gocart: {
    id: "gocart",
    name: "GoCart Marketplace",
    description: "Marketplace multi-vendor denso com grid compacto e paginação.",
    reference: "GreatStackDev/gocart",
    preview: {
      accentColor: "#059669",
      bgColor: "#ffffff",
      textColor: "#111827",
      btnColor: "#059669",
      cardRadius: "4",
      headerStyle: "layout-compact",
      gridCols: "5",
      density: "compact",
      cardStyle: "bordered",
      btnStyle: "rounded",
      darkMode: false
    },
    fonts: {
      title: "'Plus Jakarta Sans', sans-serif",
      base: "system-ui, -apple-system, sans-serif",
      titleWeight: "700",
      fontSize: "13",
      preset: "comercial"
    },
    sections: [
      { type: "hero", enabled: true },
      { type: "categories-bar", enabled: true },
      { type: "flash-sale", enabled: true },
      { type: "featured-grid", enabled: true },
      { type: "vendor-spotlight", enabled: true },
      { type: "deal-of-day", enabled: true }
    ],
    categories: [
      { name: "Supermercado", icon: "🛒", count: 450 },
      { name: "Eletrônicos", icon: "📱", count: 230 },
      { name: "Moda", icon: "👕", count: 380 },
      { name: "Casa", icon: "🏠", count: 190 },
      { name: "Saúde", icon: "💊", count: 120 },
      { name: "Pets", icon: "🐾", count: 85 },
      { name: "Brinquedos", icon: "🧩", count: 67 },
      { name: "Ferramentas", icon: "🔧", count: 95 }
    ],
    mockProducts: [
      { name: "Aspirador Portátil 2000W", price: "R$ 359,00", promoPrice: "R$ 269,00", stock: 88, rating: 4, installments: 6, isNew: false, freeShipping: true, art: "clay", visible: true, category: "Casa", showStock: false, vendor: "MegaStore" },
      { name: "Kit Panelas Antiaderentes", price: "R$ 199,00", promoPrice: "", stock: 45, rating: 5, installments: 4, isNew: true, freeShipping: false, art: "leaf", visible: true, category: "Casa", showStock: true, vendor: "CasaBela" },
      { name: "Ração Premium Dog 15kg", price: "R$ 149,00", promoPrice: "R$ 119,00", stock: 200, rating: 5, installments: 3, isNew: false, freeShipping: true, art: "blue", visible: true, category: "Pets", showStock: false, vendor: "PetShopOnline" },
      { name: "Furadeira Impact 750W", price: "R$ 289,00", promoPrice: "", stock: 32, rating: 4, installments: 8, isNew: false, freeShipping: true, art: "clay", visible: true, category: "Ferramentas", showStock: true, vendor: "ToolMax" },
      { name: "Vitamina C 1000mg 60cp", price: "R$ 39,90", promoPrice: "R$ 29,90", stock: 500, rating: 5, installments: 1, isNew: false, freeShipping: false, art: "leaf", visible: true, category: "Saúde", showStock: false, vendor: "FarmaPlus" }
    ]
  }
};

// ==========================================================================
// 2. Aplicar Template ao storeConfig
// ==========================================================================
function applyTemplate(templateId) {
  const template = storeTemplates[templateId];
  if (!template) return false;

  const p = template.preview;
  const f = template.fonts;

  // Variação Visual — mantém layout base, altera identidade visual
  storeConfig.activeTemplate = templateId;

  // Cores
  storeConfig.colors.accent = p.accentColor;
  storeConfig.colors.bg = p.bgColor;
  storeConfig.colors.text = p.textColor;
  storeConfig.colors.btn = p.btnColor;
  storeConfig.colors.badges = p.accentColor;
  storeConfig.colors.darkMode = p.darkMode;

  // Tipografia
  storeConfig.typography.fontTitle = f.title;
  storeConfig.typography.fontBase = f.base;
  storeConfig.typography.fontTitleWeight = f.titleWeight;
  storeConfig.typography.fontSize = f.fontSize;
  storeConfig.typography.fontPreset = f.preset;
  storeConfig.typography.borders = p.cardRadius;

  // Layout
  storeConfig.layout.headerLayout = p.headerStyle;
  storeConfig.layout.gridColumns = p.gridCols;
  storeConfig.layout.density = p.density;
  storeConfig.layout.cardStyle = p.cardStyle;
  storeConfig.layout.btnStyle = p.btnStyle;

  // Seções e categorias
  storeConfig.templateSections = template.sections;
  storeConfig.templateCategories = template.categories;

  // Produtos mockados do template
  storeConfig.products = JSON.parse(JSON.stringify(template.mockProducts));

  return true;
}

// ==========================================================================
// 3. Renderizar Seções Especiais dos Templates
// ==========================================================================
function renderTemplateSections(container) {
  const sections = storeConfig.templateSections || [];
  const templateId = storeConfig.activeTemplate || "anon";

  sections.forEach(section => {
    if (!section.enabled) return;

    switch (section.type) {
      case "categories-bar":
        container.appendChild(createCategoriesBar());
        break;
      case "deal-of-day":
        container.appendChild(createDealOfDay());
        break;
      case "trending":
        container.appendChild(createSectionLabel("🔥 " + i18n("trending", "Trending"), "trending"));
        break;
      case "new-arrivals":
        container.appendChild(createSectionLabel("✨ " + i18n("newArrivals", "Novidades"), "new-arrivals"));
        break;
      case "best-sellers":
        container.appendChild(createSectionLabel("🏆 " + i18n("bestSellers", "Mais Vendidos"), "best-sellers"));
        break;
      case "flash-sale":
        container.appendChild(createFlashSaleBar());
        break;
      case "vendor-spotlight":
        if (storeConfig.multiVendor && storeConfig.multiVendor.enabled) {
          container.appendChild(createVendorSpotlight());
        }
        break;
    }
  });
}

// Barra de Categorias
function createCategoriesBar() {
  const cats = storeConfig.templateCategories || [];
  const bar = document.createElement("div");
  bar.className = "template-categories-bar";

  let html = "";
  cats.forEach(cat => {
    html += `
      <button type="button" class="category-chip" title="${cat.name}">
        <span class="category-chip-icon">${cat.icon}</span>
        <span class="category-chip-label">${cat.name}</span>
        <span class="category-chip-count">${cat.count}</span>
      </button>
    `;
  });

  bar.innerHTML = html;

  // Bind: clicar na categoria vai pro catálogo
  bar.querySelectorAll(".category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (typeof changeSimulatedPage === "function") {
        changeSimulatedPage("catalog");
      }
    });
  });

  return bar;
}

// Deal of the Day
function createDealOfDay() {
  const promo = storeConfig.products.find(p => p.promoPrice && p.visible);
  if (!promo) return document.createElement("div");

  const deal = document.createElement("div");
  deal.className = "deal-of-day-section";
  deal.innerHTML = `
    <div class="deal-header">
      <h4>${i18n("dealOfDay", "Oferta do Dia")}</h4>
      <div class="deal-timer-mini" id="dealMiniTimer">00:00:00</div>
    </div>
    <div class="deal-content">
      <div class="deal-product-art">${typeof productSVGs !== "undefined" ? (productSVGs[promo.art] || productSVGs.clay) : ""}</div>
      <div class="deal-product-info">
        <strong>${promo.name}</strong>
        <div class="deal-prices">
          <span class="price-original">${promo.price}</span>
          <span class="price-current">${promo.promoPrice}</span>
        </div>
        <div class="deal-savings">${i18n("youSave", "Economize")} ${calculateDiscount(promo.price, promo.promoPrice)}%</div>
        <button type="button" class="buy-btn deal-buy-btn">${i18n("buyNow", "Comprar Agora")}</button>
      </div>
    </div>
  `;

  deal.querySelector(".deal-buy-btn").addEventListener("click", () => {
    if (typeof addToCart === "function") addToCart(promo, 1);
  });

  return deal;
}

// Flash Sale Bar (GoCart style)
function createFlashSaleBar() {
  const bar = document.createElement("div");
  bar.className = "flash-sale-bar";
  bar.innerHTML = `
    <span class="flash-icon">⚡</span>
    <strong>FLASH SALE</strong>
    <span class="flash-timer" id="flashTimer">02:45:30</span>
    <span class="flash-label">${i18n("endsIn", "Termina em")}</span>
  `;
  return bar;
}

// Section Label
function createSectionLabel(text, className) {
  const label = document.createElement("div");
  label.className = `section-label ${className || ""}`;
  label.innerHTML = `<h4>${text}</h4>`;
  return label;
}

// Vendor Spotlight
function createVendorSpotlight() {
  const vendors = (storeConfig.multiVendor && storeConfig.multiVendor.vendors) || [];
  if (vendors.length === 0) return document.createElement("div");

  const section = document.createElement("div");
  section.className = "vendor-spotlight-section";
  section.innerHTML = `<h4>${i18n("featuredVendors", "Vendedores em Destaque")}</h4>`;

  const grid = document.createElement("div");
  grid.className = "vendor-spotlight-grid";

  vendors.slice(0, 4).forEach(v => {
    grid.innerHTML += `
      <div class="vendor-card">
        <div class="vendor-card-avatar">${v.name.charAt(0).toUpperCase()}</div>
        <strong>${v.name}</strong>
        <span class="vendor-card-rating">${"★".repeat(v.rating)}${"☆".repeat(5 - v.rating)}</span>
        ${v.verified ? `<span class="vendor-verified-badge">✓ ${i18n("verified", "Verificado")}</span>` : ""}
        <span class="vendor-card-sales">${v.totalSales} ${i18n("sales", "vendas")}</span>
      </div>
    `;
  });

  section.appendChild(grid);
  return section;
}

// ==========================================================================
// 4. Utilitários
// ==========================================================================
function calculateDiscount(original, promo) {
  const orig = parseFloat(original.replace(/[^\d]/g, "")) / 100;
  const prom = parseFloat(promo.replace(/[^\d]/g, "")) / 100;
  if (orig <= 0) return 0;
  return Math.round(((orig - prom) / orig) * 100);
}

// Renderizar grid de templates para o sidebar do editor
function renderTemplateGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  Object.values(storeTemplates).forEach(tmpl => {
    const isActive = storeConfig.activeTemplate === tmpl.id;
    const card = document.createElement("div");
    card.className = `template-card ${isActive ? "active" : ""}`;
    card.innerHTML = `
      <div class="template-card-preview" style="background:${tmpl.preview.bgColor}; color:${tmpl.preview.textColor}; border-color:${tmpl.preview.accentColor};">
        <div class="template-mini-header" style="background:${tmpl.preview.accentColor};"></div>
        <div class="template-mini-grid">
          <div class="template-mini-card"></div>
          <div class="template-mini-card"></div>
          <div class="template-mini-card"></div>
        </div>
      </div>
      <div class="template-card-info">
        <strong>${tmpl.name}</strong>
        <span>${tmpl.description}</span>
      </div>
      ${isActive ? `<span class="template-active-badge">${i18n("active", "Ativo")}</span>` : ""}
    `;

    card.addEventListener("click", () => {
      if (confirm(i18n("confirmTemplate", "Aplicar este template? As configurações visuais atuais serão sobrescritas."))) {
        applyTemplate(tmpl.id);
        renderTemplateGrid(containerId);
        if (typeof syncInputsFromConfig === "function") syncInputsFromConfig();
        if (typeof updatePalettePresets === "function") updatePalettePresets();
        if (typeof renderProductsManager === "function") renderProductsManager();
        if (typeof updatePreview === "function") updatePreview();
        if (typeof showToast === "function") showToast(`Template "${tmpl.name}" ${i18n("applied", "aplicado")}!`);
      }
    });

    container.appendChild(card);
  });
}
