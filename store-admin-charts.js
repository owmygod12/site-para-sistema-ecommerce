/* ==========================================================================
   Nexa Commerce - Dashboard Analítico com Gráficos Canvas
   Referência: GreatStackDev/gocart (Next.js admin dashboard)
   ========================================================================== */

// ==========================================================================
// 1. Dados Analíticos Mockados
// ==========================================================================
const analyticsData = {
  kpis: {
    totalRevenue: "R$ 148.750,00",
    totalOrders: 1247,
    conversionRate: "3.8%",
    avgTicket: "R$ 119,20"
  },
  monthlySales: [
    { month: "Jan", value: 8500 },
    { month: "Fev", value: 12300 },
    { month: "Mar", value: 9800 },
    { month: "Abr", value: 15200 },
    { month: "Mai", value: 18900 },
    { month: "Jun", value: 14600 },
    { month: "Jul", value: 21200 },
    { month: "Ago", value: 17800 },
    { month: "Set", value: 22500 },
    { month: "Out", value: 19400 },
    { month: "Nov", value: 28900 },
    { month: "Dez", value: 35600 }
  ],
  topProducts: [
    { name: "Fone Bluetooth Pro", sales: 342, revenue: "R$ 64.928,00" },
    { name: "Sneaker Cloud Nine", sales: 218, revenue: "R$ 99.882,00" },
    { name: "Kit Panelas Premium", sales: 167, revenue: "R$ 33.233,00" },
    { name: "Smartwatch Pro S3", sales: 145, revenue: "R$ 65.105,00" },
    { name: "Bolsa Minimal Couro", sales: 134, revenue: "R$ 40.066,00" }
  ],
  recentOrders: [
    { id: "#NX-5023", customer: "Maria Silva", date: "02/07/2026", total: "R$ 489,00", status: "delivered" },
    { id: "#NX-5022", customer: "João Santos", date: "02/07/2026", total: "R$ 1.299,00", status: "shipped" },
    { id: "#NX-5021", customer: "Ana Costa", date: "01/07/2026", total: "R$ 179,00", status: "pending" },
    { id: "#NX-5020", customer: "Pedro Lima", date: "01/07/2026", total: "R$ 329,00", status: "delivered" },
    { id: "#NX-5019", customer: "Carla Dias", date: "30/06/2026", total: "R$ 599,00", status: "shipped" },
    { id: "#NX-5018", customer: "Bruno Neves", date: "30/06/2026", total: "R$ 89,90", status: "cancelled" }
  ],
  trafficSources: [
    { source: "Google Orgânico", percent: 42, color: "#4285F4" },
    { source: "Instagram", percent: 28, color: "#E4405F" },
    { source: "Direto", percent: 18, color: "#10b981" },
    { source: "Facebook Ads", percent: 8, color: "#1877F2" },
    { source: "Outros", percent: 4, color: "#94a3b8" }
  ]
};

// ==========================================================================
// 2. Renderizar Dashboard Analítico
// ==========================================================================
function renderAnalyticsDashboard(container) {
  if (!container) return;
  container.innerHTML = "";

  const dashboard = document.createElement("div");
  dashboard.className = "analytics-dashboard";

  const statusLabels = {
    delivered: i18n("delivered", "Entregue"),
    shipped: i18n("shipped", "Enviado"),
    pending: i18n("pending", "Pendente"),
    cancelled: i18n("cancelled", "Cancelado")
  };

  dashboard.innerHTML = `
    <div class="analytics-header">
      <h3>${i18n("analyticsDashboard", "Painel Analítico")}</h3>
      <span class="analytics-period">${i18n("last12months", "Últimos 12 meses")}</span>
    </div>

    <div class="analytics-kpi-grid">
      <div class="analytics-kpi-card revenue">
        <span class="kpi-icon">💰</span>
        <div class="kpi-data">
          <span class="kpi-value">${analyticsData.kpis.totalRevenue}</span>
          <span class="kpi-label">${i18n("totalRevenue", "Receita Total")}</span>
        </div>
        <span class="kpi-trend up">↑ 12.5%</span>
      </div>
      <div class="analytics-kpi-card orders">
        <span class="kpi-icon">📦</span>
        <div class="kpi-data">
          <span class="kpi-value">${analyticsData.kpis.totalOrders}</span>
          <span class="kpi-label">${i18n("totalOrders", "Total de Pedidos")}</span>
        </div>
        <span class="kpi-trend up">↑ 8.3%</span>
      </div>
      <div class="analytics-kpi-card conversion">
        <span class="kpi-icon">📊</span>
        <div class="kpi-data">
          <span class="kpi-value">${analyticsData.kpis.conversionRate}</span>
          <span class="kpi-label">${i18n("conversionRate", "Taxa de Conversão")}</span>
        </div>
        <span class="kpi-trend up">↑ 0.5%</span>
      </div>
      <div class="analytics-kpi-card ticket">
        <span class="kpi-icon">🎫</span>
        <div class="kpi-data">
          <span class="kpi-value">${analyticsData.kpis.avgTicket}</span>
          <span class="kpi-label">${i18n("avgTicket", "Ticket Médio")}</span>
        </div>
        <span class="kpi-trend down">↓ 2.1%</span>
      </div>
    </div>

    <div class="analytics-charts-row">
      <div class="analytics-chart-card">
        <h5>${i18n("monthlySales", "Vendas Mensais")}</h5>
        <canvas id="salesChart" width="500" height="220"></canvas>
      </div>
      <div class="analytics-chart-card traffic">
        <h5>${i18n("trafficSources", "Fontes de Tráfego")}</h5>
        <div class="traffic-bars">
          ${analyticsData.trafficSources.map(t => `
            <div class="traffic-bar-row">
              <span class="traffic-label">${t.source}</span>
              <div class="traffic-bar-bg">
                <div class="traffic-bar-fill" style="width:${t.percent}%; background:${t.color};"></div>
              </div>
              <span class="traffic-percent">${t.percent}%</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="analytics-tables-row">
      <div class="analytics-table-card">
        <h5>${i18n("topProducts", "Produtos Mais Vendidos")}</h5>
        <table class="analytics-table">
          <thead><tr><th>${i18n("product", "Produto")}</th><th>${i18n("sales", "Vendas")}</th><th>${i18n("revenue", "Receita")}</th></tr></thead>
          <tbody>
            ${analyticsData.topProducts.map(p => `<tr><td>${p.name}</td><td>${p.sales}</td><td>${p.revenue}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>

      <div class="analytics-table-card">
        <h5>${i18n("recentOrders", "Pedidos Recentes")}</h5>
        <table class="analytics-table">
          <thead><tr><th>${i18n("orderId", "Pedido")}</th><th>${i18n("customer", "Cliente")}</th><th>${i18n("total", "Total")}</th><th>Status</th></tr></thead>
          <tbody>
            ${analyticsData.recentOrders.map(o => `
              <tr>
                <td>${o.id}</td>
                <td>${o.customer}</td>
                <td>${o.total}</td>
                <td><span class="order-status ${o.status}">${statusLabels[o.status] || o.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  container.appendChild(dashboard);

  // Desenhar gráfico após inserir no DOM
  requestAnimationFrame(() => {
    drawSalesChart("salesChart");
  });
}

// ==========================================================================
// 3. Gráfico de Vendas com Canvas API
// ==========================================================================
function drawSalesChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const data = analyticsData.monthlySales;
  const width = canvas.width;
  const height = canvas.height;

  // Pixel ratio for crisp rendering
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.scale(dpr, dpr);

  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map(d => d.value));
  const step = chartW / (data.length - 1);

  // Background
  ctx.fillStyle = "#fafafa";
  ctx.fillRect(0, 0, width, height);

  // Grid Lines
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    // Y-axis labels
    const label = Math.round(maxVal - (maxVal / 4) * i);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "10px system-ui";
    ctx.textAlign = "right";
    ctx.fillText("R$ " + (label / 1000).toFixed(0) + "k", padding.left - 8, y + 4);
  }

  // Area fill gradient
  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, "rgba(37, 99, 235, 0.15)");
  gradient.addColorStop(1, "rgba(37, 99, 235, 0.01)");

  ctx.beginPath();
  ctx.moveTo(padding.left, height - padding.bottom);

  data.forEach((d, i) => {
    const x = padding.left + i * step;
    const y = padding.top + chartH - (d.value / maxVal) * chartH;
    if (i === 0) ctx.lineTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.lineTo(padding.left + (data.length - 1) * step, height - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  data.forEach((d, i) => {
    const x = padding.left + i * step;
    const y = padding.top + chartH - (d.value / maxVal) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Data Points
  data.forEach((d, i) => {
    const x = padding.left + i * step;
    const y = padding.top + chartH - (d.value / maxVal) * chartH;

    // Outer glow
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2;
    ctx.stroke();

    // X-axis labels
    ctx.fillStyle = "#64748b";
    ctx.font = "10px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(d.month, x, height - padding.bottom + 16);
  });
}
