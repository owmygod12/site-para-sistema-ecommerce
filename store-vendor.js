/* ==========================================================================
   Nexa Commerce - Módulo Multi-Vendor
   Referência: kirilkirkov/Ecommerce-CodeIgniter-Bootstrap + GreatStackDev/gocart
   ========================================================================== */

// ==========================================================================
// 1. Dados Padrão de Vendedores
// ==========================================================================
const defaultVendors = [
  {
    id: "v1",
    name: "TechStore",
    logo: "",
    rating: 5,
    totalSales: 1240,
    verified: true,
    description: "Eletrônicos e gadgets de alta performance com garantia estendida.",
    joinDate: "2024-03-15",
    policies: { returnDays: 30, freeShipping: true, minOrder: "R$ 99,00" },
    stats: { orders: 342, revenue: "R$ 89.450,00", avgRating: 4.8, openTickets: 2 }
  },
  {
    id: "v2",
    name: "Bella Moda",
    logo: "",
    rating: 4,
    totalSales: 876,
    verified: true,
    description: "Moda feminina contemporânea com tecidos naturais e sustentáveis.",
    joinDate: "2024-06-20",
    policies: { returnDays: 7, freeShipping: false, minOrder: "R$ 149,00" },
    stats: { orders: 198, revenue: "R$ 42.120,00", avgRating: 4.5, openTickets: 1 }
  },
  {
    id: "v3",
    name: "CasaBela",
    logo: "",
    rating: 5,
    totalSales: 2100,
    verified: false,
    description: "Utensílios domésticos, decoração e artigos para cozinha profissional.",
    joinDate: "2023-11-08",
    policies: { returnDays: 15, freeShipping: true, minOrder: "R$ 79,00" },
    stats: { orders: 567, revenue: "R$ 134.890,00", avgRating: 4.9, openTickets: 0 }
  }
];

// ==========================================================================
// 2. Renderizar Painel do Vendedor (Preview)
// ==========================================================================
function renderVendorPanel(container) {
  if (!container) return;
  container.innerHTML = "";

  const vendors = (storeConfig.multiVendor && storeConfig.multiVendor.vendors) || [];
  const activeVendor = vendors[0] || defaultVendors[0];

  const panel = document.createElement("div");
  panel.className = "vendor-panel-layout";

  panel.innerHTML = `
    <div class="vendor-panel-sidebar">
      <div class="vendor-panel-avatar">${activeVendor.name.charAt(0)}</div>
      <h4>${activeVendor.name}</h4>
      ${activeVendor.verified ? `<span class="vendor-verified-badge">✓ ${i18n("verified", "Verificado")}</span>` : ""}
      <p style="font-size:11px; color:var(--shop-text-muted); margin-top:4px;">${activeVendor.description}</p>
      
      <nav class="vendor-panel-nav">
        <button class="vendor-nav-btn active" data-vpanel="dashboard">${i18n("dashboard", "Painel")}</button>
        <button class="vendor-nav-btn" data-vpanel="products">${i18n("myProducts", "Meus Produtos")}</button>
        <button class="vendor-nav-btn" data-vpanel="settings">${i18n("settings", "Configurações")}</button>
      </nav>
    </div>

    <div class="vendor-panel-content">
      <div class="vendor-panel-page active" id="vpanel-dashboard">
        <h4>${i18n("dashboardTitle", "Painel do Vendedor")}</h4>
        <div class="vendor-kpi-grid">
          <div class="vendor-kpi-card">
            <span class="kpi-icon">📦</span>
            <span class="kpi-value">${activeVendor.stats.orders}</span>
            <span class="kpi-label">${i18n("orders", "Pedidos")}</span>
          </div>
          <div class="vendor-kpi-card">
            <span class="kpi-icon">💰</span>
            <span class="kpi-value">${activeVendor.stats.revenue}</span>
            <span class="kpi-label">${i18n("revenue", "Receita")}</span>
          </div>
          <div class="vendor-kpi-card">
            <span class="kpi-icon">⭐</span>
            <span class="kpi-value">${activeVendor.stats.avgRating}</span>
            <span class="kpi-label">${i18n("avgRating", "Avaliação Média")}</span>
          </div>
          <div class="vendor-kpi-card">
            <span class="kpi-icon">🎫</span>
            <span class="kpi-value">${activeVendor.stats.openTickets}</span>
            <span class="kpi-label">${i18n("openTickets", "Tickets Abertos")}</span>
          </div>
        </div>

        <div class="vendor-recent-orders">
          <h5>${i18n("recentOrders", "Pedidos Recentes")}</h5>
          <table class="vendor-orders-table">
            <thead>
              <tr>
                <th>${i18n("orderId", "Pedido")}</th>
                <th>${i18n("customer", "Cliente")}</th>
                <th>${i18n("total", "Total")}</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>#NX-4821</td><td>Maria Silva</td><td>R$ 249,90</td><td><span class="order-status delivered">${i18n("delivered", "Entregue")}</span></td></tr>
              <tr><td>#NX-4820</td><td>João Santos</td><td>R$ 599,00</td><td><span class="order-status shipped">${i18n("shipped", "Enviado")}</span></td></tr>
              <tr><td>#NX-4819</td><td>Ana Costa</td><td>R$ 139,90</td><td><span class="order-status pending">${i18n("pending", "Pendente")}</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="vendor-panel-page" id="vpanel-products">
        <h4>${i18n("myProducts", "Meus Produtos")}</h4>
        <div class="vendor-products-list" id="vendorProductsList"></div>
      </div>

      <div class="vendor-panel-page" id="vpanel-settings">
        <h4>${i18n("storeSettings", "Configurações da Loja")}</h4>
        <div class="vendor-settings-form">
          <div class="control-group">
            <label>${i18n("storeName", "Nome da Loja")}</label>
            <input type="text" value="${activeVendor.name}" readonly />
          </div>
          <div class="control-group">
            <label>${i18n("returnPolicy", "Política de Devolução")}</label>
            <input type="text" value="${activeVendor.policies.returnDays} ${i18n("days", "dias")}" readonly />
          </div>
          <div class="control-group">
            <label>${i18n("minOrder", "Pedido Mínimo")}</label>
            <input type="text" value="${activeVendor.policies.minOrder}" readonly />
          </div>
        </div>
      </div>
    </div>
  `;

  // Navegação interna do painel
  panel.querySelectorAll(".vendor-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      panel.querySelectorAll(".vendor-nav-btn").forEach(b => b.classList.remove("active"));
      panel.querySelectorAll(".vendor-panel-page").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const target = panel.querySelector(`#vpanel-${btn.dataset.vpanel}`);
      if (target) target.classList.add("active");
    });
  });

  // Preencher lista de produtos do vendedor
  const prodList = panel.querySelector("#vendorProductsList");
  if (prodList) {
    const vendorProds = storeConfig.products.filter(p => p.vendor === activeVendor.name || !p.vendor);
    if (vendorProds.length === 0) {
      prodList.innerHTML = `<p class="empty-state" style="padding:16px;">${i18n("noProducts", "Nenhum produto cadastrado.")}</p>`;
    } else {
      vendorProds.forEach(prod => {
        const item = document.createElement("div");
        item.className = "vendor-product-row";
        item.innerHTML = `
          <div class="vp-info">
            <strong>${prod.name}</strong>
            <span>${prod.price} ${prod.promoPrice ? `<span style="color:#ef4444;">${prod.promoPrice}</span>` : ""}</span>
          </div>
          <div class="vp-meta">
            <span class="vp-stock ${prod.stock > 0 ? "in" : "out"}">${prod.stock > 0 ? `${prod.stock} ${i18n("inStock", "em estoque")}` : i18n("outOfStock", "Esgotado")}</span>
          </div>
        `;
        prodList.appendChild(item);
      });
    }
  }

  container.appendChild(panel);
}

// ==========================================================================
// 3. Renderizar Gerenciador de Vendedores (Sidebar do Editor)
// ==========================================================================
function renderVendorsManager(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  const vendors = (storeConfig.multiVendor && storeConfig.multiVendor.vendors) || [];

  if (vendors.length === 0) {
    container.innerHTML = `<p class="empty-state" style="padding:12px; font-size:11px;">${i18n("noVendors", "Nenhum vendedor cadastrado.")}</p>`;
    return;
  }

  vendors.forEach((vendor, index) => {
    const item = document.createElement("div");
    item.className = "manager-item";
    item.innerHTML = `
      <div class="item-info">
        <strong>${vendor.name}</strong>
        <span>${vendor.verified ? "✓ " + i18n("verified", "Verificado") : i18n("unverified", "Não verificado")} · ${vendor.totalSales} ${i18n("sales", "vendas")}</span>
      </div>
      <div class="item-actions">
        <button type="button" class="action-mini-btn visibility ${vendor.verified ? "active" : ""}">${vendor.verified ? "✓" : "○"}</button>
        <button type="button" class="action-mini-btn remove">×</button>
      </div>
    `;

    item.querySelector(".visibility").addEventListener("click", () => {
      vendor.verified = !vendor.verified;
      renderVendorsManager(containerId);
      if (typeof updatePreview === "function") updatePreview();
    });

    item.querySelector(".remove").addEventListener("click", () => {
      vendors.splice(index, 1);
      renderVendorsManager(containerId);
      if (typeof updatePreview === "function") updatePreview();
      if (typeof showToast === "function") showToast(i18n("vendorRemoved", "Vendedor removido."));
    });

    container.appendChild(item);
  });
}

// ==========================================================================
// 4. Adicionar Vendedor
// ==========================================================================
function addNewVendor(name) {
  if (!name || !name.trim()) return;

  if (!storeConfig.multiVendor) {
    storeConfig.multiVendor = { enabled: true, vendors: [] };
  }

  storeConfig.multiVendor.vendors.push({
    id: "v" + Date.now(),
    name: name.trim(),
    logo: "",
    rating: 4,
    totalSales: 0,
    verified: false,
    description: i18n("newVendorDesc", "Novo vendedor na plataforma."),
    joinDate: new Date().toISOString().split("T")[0],
    policies: { returnDays: 7, freeShipping: false, minOrder: "R$ 0,00" },
    stats: { orders: 0, revenue: "R$ 0,00", avgRating: 0, openTickets: 0 }
  });

  if (typeof showToast === "function") showToast(`${i18n("vendorAdded", "Vendedor adicionado")}: ${name}`);
}

// ==========================================================================
// 5. Badge de Vendedor nos Cards de Produto
// ==========================================================================
function getVendorBadgeHtml(product) {
  if (!storeConfig.multiVendor || !storeConfig.multiVendor.enabled || !product.vendor) return "";

  const vendor = storeConfig.multiVendor.vendors.find(v => v.name === product.vendor);
  const isVerified = vendor && vendor.verified;

  return `
    <div class="product-vendor-badge">
      <span class="vendor-name">${product.vendor}</span>
      ${isVerified ? '<span class="vendor-check">✓</span>' : ""}
    </div>
  `;
}
