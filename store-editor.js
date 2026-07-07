/* ==========================================================================
   Nexa Commerce - Controlador do Editor Visual de Temas (Refatorado Hostinger)
   ========================================================================== */

const translations = {
  pt: {
    trending: "Em Alta",
    newArrivals: "Novidades",
    bestSellers: "Mais Vendidos",
    dealOfDay: "Oferta do Dia",
    youSave: "Você economiza",
    buyNow: "Comprar Agora",
    endsIn: "Termina em",
    featuredVendors: "Vendedores em Destaque",
    verified: "Verificado",
    sales: "vendas",
    active: "Ativo",
    confirmTemplate: "Confirmar alteração de template? Algumas configurações visuais serão sobrescritas.",
    applied: "aplicado",
    emptyCart: "Seu carrinho está vazio",
    addProducts: "Adicione produtos para simular o checkout.",
    viewProducts: "Ver Produtos",
    back: "Voltar",
    continue: "Continuar",
    confirmOrder: "Confirmar Pedido",
    address: "Endereço",
    payment: "Pagamento",
    confirmation: "Confirmação",
    deliveryAddress: "Endereço de Entrega",
    fullName: "Nome Completo",
    enterName: "Digite seu nome completo",
    phone: "Telefone",
    street: "Rua",
    streetName: "Nome da rua",
    number: "Número",
    complement: "Complemento",
    apt: "Apto, Bloco...",
    neighborhood: "Bairro",
    city: "Cidade",
    state: "Estado",
    paymentMethod: "Método de Pagamento",
    creditCard: "Cartão de Crédito",
    cardNumber: "Número do Cartão",
    cardName: "Nome no Cartão",
    asOnCard: "Como está impresso no cartão",
    expiry: "Validade",
    scanPix: "Escaneie o QR Code no seu aplicativo bancário",
    copy: "Copiar",
    boletoInfo: "O boleto será gerado após a confirmação. Prazo para compensação: 3 dias úteis.",
    orderReview: "Revisão do Pedido",
    items: "Itens",
    total: "Total",
    orderSummary: "Resumo",
    shipping: "Frete",
    free: "Grátis",
    orderConfirmed: "Pedido Confirmado!",
    orderNumber: "Número do Pedido",
    orderMsg: "Seu pedido foi processado com sucesso. Você receberá um e-mail com os detalhes em breve.",
    trackingCode: "Código de Rastreio",
    backToStore: "Voltar para a Loja",
    fillRequired: "Por favor, preencha todos os campos obrigatórios.",
    invalidCard: "Número do cartão inválido.",
    fillCardName: "Preencha o nome impresso no cartão.",
    cepFound: "CEP Encontrado!",
    noProducts: "Nenhum produto cadastrado.",
    storeSettings: "Configurações da Loja",
    storeName: "Nome da Loja",
    returnPolicy: "Política de Devolução",
    minOrder: "Pedido Mínimo",
    days: "dias",
    delivered: "Entregue",
    shipped: "Enviado",
    pending: "Pendente",
    cancelled: "Cancelado",
    noVendors: "Nenhum vendedor cadastrado.",
    unverified: "Não verificado",
    vendorRemoved: "Vendedor removido.",
    vendorAdded: "Vendedor adicionado",
    newVendorDesc: "Novo vendedor na plataforma Nexa.",
    analyticsDashboard: "Painel Analítico",
    last12months: "Últimos 12 meses",
    totalRevenue: "Receita Total",
    totalOrders: "Total de Pedidos",
    conversionRate: "Taxa de Conversão",
    avgTicket: "Ticket Médio",
    recentOrders: "Pedidos Recentes",
    topProducts: "Produtos Mais Vendidos",
    product: "Produto",
    trafficSources: "Fontes de Tráfego",
    dashboardTitle: "Painel de Controle",
    myProducts: "Meus Produtos",
    dashboard: "Dashboard",
    settings: "Configurações",
    openTickets: "Tickets Abertos",
    avgRating: "Avaliação Média",
    customer: "Cliente",
    revenue: "Faturamento",
    orderId: "Pedido"
  },
  en: {
    trending: "Trending Now",
    newArrivals: "New Arrivals",
    bestSellers: "Best Sellers",
    dealOfDay: "Deal of the Day",
    youSave: "You save",
    buyNow: "Buy Now",
    endsIn: "Ends in",
    featuredVendors: "Featured Vendors",
    verified: "Verified",
    sales: "sales",
    active: "Active",
    confirmTemplate: "Confirm template change? Some visual settings will be overwritten.",
    applied: "applied",
    emptyCart: "Your cart is empty",
    addProducts: "Add products to simulate checkout.",
    viewProducts: "View Products",
    back: "Back",
    continue: "Continue",
    confirmOrder: "Confirm Order",
    address: "Address",
    payment: "Payment",
    confirmation: "Confirmation",
    deliveryAddress: "Delivery Address",
    fullName: "Full Name",
    enterName: "Enter your full name",
    phone: "Phone",
    street: "Street",
    streetName: "Street name",
    number: "Number",
    complement: "Complement",
    apt: "Apt, Suite, Unit...",
    neighborhood: "Neighborhood",
    city: "City",
    state: "State",
    paymentMethod: "Payment Method",
    creditCard: "Credit Card",
    cardNumber: "Card Number",
    cardName: "Name on Card",
    asOnCard: "Name printed on card",
    expiry: "Expiration",
    scanPix: "Scan the QR Code with your banking app to pay",
    copy: "Copy",
    boletoInfo: "The invoice will be generated after confirmation. Settlement: 3 business days.",
    orderReview: "Order Review",
    items: "Items",
    total: "Total",
    orderSummary: "Summary",
    shipping: "Shipping",
    free: "Free",
    orderConfirmed: "Order Confirmed!",
    orderNumber: "Order Number",
    orderMsg: "Your order was successfully processed. You will receive an email with tracking details shortly.",
    trackingCode: "Tracking Code",
    backToStore: "Back to Store",
    fillRequired: "Please fill out all required fields.",
    invalidCard: "Invalid credit card number.",
    fillCardName: "Please fill in the cardholder name.",
    cepFound: "ZIP Code Found!",
    noProducts: "No products found.",
    storeSettings: "Store Settings",
    storeName: "Store Name",
    returnPolicy: "Return Policy",
    minOrder: "Minimum Order",
    days: "days",
    delivered: "Delivered",
    shipped: "Shipped",
    pending: "Pending",
    cancelled: "Cancelled",
    noVendors: "No vendors registered.",
    unverified: "Unverified",
    vendorRemoved: "Vendor removed.",
    vendorAdded: "Vendor added",
    newVendorDesc: "New vendor on Nexa platform.",
    analyticsDashboard: "Analytics Dashboard",
    last12months: "Last 12 months",
    totalRevenue: "Total Revenue",
    totalOrders: "Total Orders",
    conversionRate: "Conversion Rate",
    avgTicket: "Avg Ticket",
    recentOrders: "Recent Orders",
    topProducts: "Top Products",
    product: "Product",
    trafficSources: "Traffic Sources",
    dashboardTitle: "Vendor Dashboard",
    myProducts: "My Products",
    dashboard: "Dashboard",
    settings: "Settings",
    openTickets: "Open Tickets",
    avgRating: "Avg Rating",
    customer: "Customer",
    revenue: "Revenue",
    orderId: "Order"
  }
};

function i18n(key, defaultValue) {
  const lang = (window.storeConfig && window.storeConfig.language) || "pt";
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  return defaultValue || key;
}

// Configurações e Presets de Nicho Recomendados (Etapa 1)
const nichePresets = {
  casa: {
    stylePreset: "casa",
    borders: "0",
    spacing: "36",
    colorAccent: "#5c5346",
    colorBg: "#faf8f5",
    colorBtn: "#1a1a1a",
    colorText: "#1a1a1a",
    colorSecondary: "#737373",
    colorBadges: "#5c5346",
    colorSale: "#991b1b",
    darkMode: false,
    fontTitle: "'Cinzel', serif",
    fontBase: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14",
    fontTitleWeight: "700",
    fontPreset: "minimalista",
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "spaced",
    btnStyle: "square",
    cardStyle: "minimal",
    bannerTitle: "Design Atemporal",
    bannerSubtitle: "Mobiliário e objetos criados com materiais nobres e sustentáveis.",
    bannerBtnText: "Ver Coleção",
    bannerSecBtnText: "Sobre Nós",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "Helena Souza (Arquiteta)",
    testimonialText: "As peças de cerâmica e madeira trazem uma alma única para os projetos de interiores."
  },
  beleza: {
    stylePreset: "beleza",
    borders: "16",
    spacing: "24",
    colorAccent: "#c48a73",
    colorBg: "#fffbf9",
    colorBtn: "#d4a373",
    colorText: "#2d2421",
    colorSecondary: "#8c7d78",
    colorBadges: "#c48a73",
    colorSale: "#ef4444",
    darkMode: false,
    fontTitle: "'Outfit', sans-serif",
    fontBase: "'Outfit', sans-serif",
    fontSize: "14",
    fontTitleWeight: "600",
    fontPreset: "editorial",
    headerLayout: "layout-centered",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "balanced",
    btnStyle: "pill",
    cardStyle: "shadowed",
    bannerTitle: "Rotina de Autocuidado",
    bannerSubtitle: "Cosméticos naturais veganos desenvolvidos para a saúde da sua pele.",
    bannerBtnText: "Comprar Linha",
    bannerSecBtnText: "Conhecer Ativos",
    bannerAlign: "align-center",
    showPromoBadge: true,
    testimonialAuthor: "Carolina Dias",
    testimonialText: "A hidratação do sérum botânico é maravilhosa, textura leve e aroma natural incrível."
  },
  moda: {
    stylePreset: "moda",
    borders: "4",
    spacing: "24",
    colorAccent: "#ec4899",
    colorBg: "#ffffff",
    colorBtn: "#0f172a",
    colorText: "#0f172a",
    colorSecondary: "#64748b",
    colorBadges: "#ec4899",
    colorSale: "#ef4444",
    darkMode: false,
    fontTitle: "'Playfair Display', Georgia, serif",
    fontBase: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14",
    fontTitleWeight: "800",
    fontPreset: "editorial",
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "4",
    density: "balanced",
    btnStyle: "square",
    cardStyle: "minimal",
    bannerTitle: "Coleção Estação",
    bannerSubtitle: "Alfaiataria contemporânea e acessórios com design e corte editorial.",
    bannerBtnText: "Comprar Look",
    bannerSecBtnText: "Editorial",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "Gisele M. (Stylist)",
    testimonialText: "A qualidade dos tecidos e o caimento das jaquetas são simplesmente impecáveis."
  },
  alimentos: {
    stylePreset: "alimentos",
    borders: "12",
    spacing: "24",
    colorAccent: "#8b5a2b",
    colorBg: "#faf6f0",
    colorBtn: "#5c3d2e",
    colorText: "#3e3328",
    colorSecondary: "#7d6b58",
    colorBadges: "#5c3d2e",
    colorSale: "#991b1b",
    darkMode: false,
    fontTitle: "'Outfit', sans-serif",
    fontBase: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14",
    fontTitleWeight: "700",
    fontPreset: "editorial",
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "balanced",
    btnStyle: "rounded",
    cardStyle: "bordered",
    bannerTitle: "Sabores Artesanais",
    bannerSubtitle: "Cafés torrados em pequenos lotes e pães com fermentação natural biológica.",
    bannerBtnText: "Pedir Delivery",
    bannerSecBtnText: "Nosso Menu",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "Família Barbosa",
    testimonialText: "O pão sourdough é assado perfeitamente, casca crocante e miolo muito macio."
  },
  esportes: {
    stylePreset: "esportes",
    borders: "4",
    spacing: "20",
    colorAccent: "#ff5500",
    colorBg: "#090a0f",
    colorBtn: "#ff5500",
    colorText: "#ffffff",
    colorSecondary: "#94a3b8",
    colorBadges: "#ff5500",
    colorSale: "#ff5500",
    darkMode: true,
    fontTitle: "'Outfit', sans-serif",
    fontBase: "'Outfit', sans-serif",
    fontSize: "14",
    fontTitleWeight: "800",
    fontPreset: "comercial",
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "compact",
    btnStyle: "rounded",
    cardStyle: "bordered",
    bannerTitle: "Performance Máxima",
    bannerSubtitle: "Mochilas ergonômicas e equipamentos técnicos para alta performance.",
    bannerBtnText: "Ver Ofertas",
    bannerSecBtnText: "Lançamentos",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "Tiago Silva (Atleta)",
    testimonialText: "A mochila resistente à água é leve e distribui muito bem o peso durante as corridas."
  },
  marketplace: {
    stylePreset: "marketplace",
    borders: "6",
    spacing: "20",
    colorAccent: "#2563eb",
    colorBg: "#f8fafc",
    colorBtn: "#2563eb",
    colorText: "#0f172a",
    colorSecondary: "#64748b",
    colorBadges: "#2563eb",
    colorSale: "#ef4444",
    darkMode: false,
    fontTitle: "'Plus Jakarta Sans', sans-serif",
    fontBase: "system-ui, -apple-system, sans-serif",
    fontSize: "13",
    fontTitleWeight: "700",
    fontPreset: "comercial",
    headerLayout: "layout-compact",
    stickyHeader: true,
    menuType: "megamenu",
    gridColumns: "4",
    density: "compact",
    btnStyle: "rounded",
    cardStyle: "bordered",
    bannerTitle: "Distribuidor Nexa",
    bannerSubtitle: "Milhares de acessórios e utilitários com preços diretos de fábrica.",
    bannerBtnText: "Comprar Agora",
    bannerSecBtnText: "Cupons Promocionais",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "Fernando Rocha",
    testimonialText: "Excelente variedade de produtos e entrega incrivelmente rápida. Perfeito para atacado."
  },
  luxo: {
    stylePreset: "luxo",
    borders: "0",
    spacing: "36",
    colorAccent: "#c5a880",
    colorBg: "#0d0d0d",
    colorBtn: "#141414",
    colorText: "#ffffff",
    colorSecondary: "#a3a3a3",
    colorBadges: "#c5a880",
    colorSale: "#ef4444",
    darkMode: true,
    fontTitle: "'Cinzel', serif",
    fontBase: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14",
    fontTitleWeight: "400",
    fontPreset: "minimalista",
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "spaced",
    btnStyle: "square",
    cardStyle: "bordered",
    bannerTitle: "Edições Limitadas",
    bannerSubtitle: "Peças numeradas de alta curadoria artística com certificado de exclusividade.",
    bannerBtnText: "Solicitar Visita",
    bannerSecBtnText: "Ver Catálogo",
    bannerAlign: "align-center",
    showPromoBadge: true,
    testimonialAuthor: "Patrícia V. (Artesã)",
    testimonialText: "Cada detalhe é pensado com extremo primor. É a representação do luxo atemporal."
  },
  brutalist: {
    stylePreset: "brutalist",
    borders: "0",
    spacing: "20",
    colorAccent: "#00ff66",
    colorBg: "#f3f4f6",
    colorBtn: "#00ff66",
    colorText: "#000000",
    colorSecondary: "#374151",
    colorBadges: "#00ff66",
    colorSale: "#ef4444",
    darkMode: false,
    fontTitle: "'Space Mono', monospace",
    fontBase: "'Space Mono', monospace",
    fontSize: "14",
    fontTitleWeight: "800",
    fontPreset: "tecnico",
    headerLayout: "layout-split",
    stickyHeader: false,
    menuType: "simple",
    gridColumns: "3",
    density: "balanced",
    btnStyle: "square",
    cardStyle: "bordered",
    bannerTitle: "DESIGN CONCRETO E DIRETO",
    bannerSubtitle: "Sem floreios. Sem enrolação. Ferramentas e utilitários de alta resistência comercial.",
    bannerBtnText: "COMPRAR HOJE",
    bannerSecBtnText: "VER DETALHES",
    bannerAlign: "align-left",
    showPromoBadge: true,
    testimonialAuthor: "MAURO K.",
    testimonialText: "BORDAS FORTES. ALTO DESEMPENHO. COMPROU, CHEGOU. EXATAMENTE O QUE EU QUERIA."
  }
};

// Paletas por modelo (para renderizar na aba Cores)
const presetPalettes = {
  casa: [
    { name: "Argila Clássico", accent: "#5c5346", bg: "#faf8f5", btn: "#1a1a1a", text: "#1a1a1a" },
    { name: "Areia Neutra", accent: "#8d8070", bg: "#f5f3ef", btn: "#3d3830", text: "#1e1c18" }
  ],
  beleza: [
    { name: "Pêssego Suave", accent: "#c48a73", bg: "#fffbf9", btn: "#d4a373", text: "#2d2421" },
    { name: "Orquídea Púrpura", accent: "#8c627a", bg: "#faf5f8", btn: "#8c627a", text: "#281b24" }
  ],
  moda: [
    { name: "Alta Costura", accent: "#ec4899", bg: "#ffffff", btn: "#0f172a", text: "#0f172a" },
    { name: "Linho Cru", accent: "#c5a880", bg: "#fdfdfb", btn: "#1e293b", text: "#0f172a" }
  ],
  alimentos: [
    { name: "Café Orgânico", accent: "#8b5a2b", bg: "#faf6f0", btn: "#5c3d2e", text: "#3e3328" },
    { name: "Sálvia Verde", accent: "#527853", bg: "#f5f7f4", btn: "#3d5c3f", text: "#243325" }
  ],
  esportes: [
    { name: "Fogo Esportivo", accent: "#ff5500", bg: "#090a0f", btn: "#ff5500", text: "#ffffff" },
    { name: "Preto Absoluto", accent: "#38bdf8", bg: "#0f172a", btn: "#38bdf8", text: "#f8fafc" }
  ],
  marketplace: [
    { name: "Azul Conexão", accent: "#2563eb", bg: "#f8fafc", btn: "#2563eb", text: "#0f172a" },
    { name: "Verde Vendas", accent: "#059669", bg: "#f0fdf4", btn: "#059669", text: "#064e3b" }
  ],
  luxo: [
    { name: "Bronze Real", accent: "#c5a880", bg: "#0d0d0d", btn: "#141414", text: "#ffffff" },
    { name: "Prata Titanium", accent: "#94a3b8", bg: "#0a0a0c", btn: "#1e293b", text: "#f8fafc" }
  ],
  brutalist: [
    { name: "Verde Ácido", accent: "#00ff66", bg: "#f3f4f6", btn: "#00ff66", text: "#000000" },
    { name: "Laranja Alerta", accent: "#ff6600", bg: "#ffffff", btn: "#ff6600", text: "#000000" }
  ]
};

// SVG de produtos
const productSVGs = {
  clay: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 6V4a3 3 0 0 1 6 0v2"/><path d="M8 12h8v5H8z"/></svg>`,
  leaf: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v6M8 8h8M12 8v11M9 19h6M7 22h10"/></svg>`,
  blue: `<svg class="product-thumb-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="12" y1="8" x2="16" y2="8"/><line x1="12" y1="12" x2="16" y2="12"/></svg>`
};

// Configuração Padrão do Estado
const defaultStoreConfig = {
  themePreset: "casa",
  activePage: "home",
  
  brand: {
    name: "Atelier Norte",
    slogan: "Mobiliário e objetos atemporais",
    logoUrl: "",
    faviconUrl: "",
    tone: "premium"
  },
  
  colors: {
    accent: "#5c5346",
    secondary: "#737373",
    bg: "#faf8f5",
    text: "#1a1a1a",
    btn: "#1a1a1a",
    badges: "#5c5346",
    sale: "#991b1b",
    darkMode: false
  },
  
  typography: {
    fontTitle: "'Cinzel', serif",
    fontBase: "'Plus Jakarta Sans', sans-serif",
    fontSize: "14",
    fontTitleWeight: "700",
    fontPreset: "minimalista"
  },
  
  layout: {
    headerLayout: "layout-split",
    stickyHeader: true,
    menuType: "simple",
    gridColumns: "3",
    density: "spaced",
    btnStyle: "square",
    cardStyle: "minimal"
  },
  
  homepage: {
    bannerTitle: "Design Atemporal",
    bannerSubtitle: "Mobiliário e objetos criados com materiais nobres e sustentáveis.",
    bannerBtnText: "Ver Coleção",
    bannerSecBtnText: "Sobre Nós",
    bannerImgUrl: "",
    bannerAlign: "align-left",
    showPromoBadge: true,
    featuredProductIndex: 0,
    testimonialAuthor: "Helena Souza (Arquiteta)",
    testimonialText: "As peças de cerâmica e madeira trazem uma alma única para os projetos de interiores.",
    showInstagramFeed: true
  },
  
  products: [
    { name: "Mochila Terra", price: "R$ 289,00", promoPrice: "", stock: 18, rating: 5, installments: 10, isNew: true, freeShipping: true, art: "clay", visible: true, category: "Acessórios", showStock: true },
    { name: "Luminária Dobra", price: "R$ 169,00", promoPrice: "R$ 149,00", stock: 6, rating: 4, installments: 3, isNew: false, freeShipping: false, art: "leaf", visible: true, category: "Iluminação", showStock: true },
    { name: "Kit Studio", price: "R$ 339,00", promoPrice: "", stock: 0, rating: 5, installments: 12, isNew: false, freeShipping: true, art: "blue", visible: true, category: "Decoração", showStock: true }
  ],
  
  productPage: {
    zoomActive: true,
    specsActive: true,
    sizeGuideActive: true,
    relatedCount: "3",
    shippingInfo: "Frete para todo o Brasil. Trocas sem custo em até 7 dias após o recebimento."
  },
  
  cart: {
    cartType: "drawer",
    recommendationsActive: true,
    shippingCalcActive: true,
    defaultCoupon: "TRAVESSIA10"
  },
  
  marketing: {
    showPromoBar: true,
    promoBarText: "Frete grátis em compras acima de R$ 500",
    promoBarBg: "#0f5132",
    showNewsPopup: true,
    showCountdown: true,
    countdownDuration: "2",
    showTrustBadges: true
  },
  
  footer: {
    text: "© 2026 Atelier Norte. Todos os direitos reservados.",
    showNewsletter: true,
    socialInsta: "instagram.com/ateliernorte",
    socialFb: "facebook.com/ateliernorte",
    address: "Alameda das Flores, 204 - São Paulo, SP",
    paymentVisa: true,
    paymentMaster: true,
    paymentPix: true,
    paymentBoleto: true
  },
  language: "pt",
  activeTemplate: "anon",
  multiVendor: {
    enabled: false,
    vendors: typeof defaultVendors !== "undefined" ? JSON.parse(JSON.stringify(defaultVendors)) : []
  },
  wishlist: [],
  compareList: []
};

// Objeto de Configuração Global de E-Commerce
let storeConfig = {};

// Biblioteca de mídias locais simuladas
let mediaLibrary = [
  { id: "clay-base", url: "clay", name: "Placeholder Mochila" },
  { id: "leaf-base", url: "leaf", name: "Placeholder Luminária" },
  { id: "blue-base", url: "blue", name: "Placeholder Kit" }
];

// Carrinho dinâmico
let cartItems = [];
let catalogActiveFilters = { availability: [], price: [] };

// Seletores DOM
const shopWindow = document.querySelector("#shopWindow");
const shopPromoBar = document.querySelector("#shopPromoBar");
const shopPromoBarText = document.querySelector("#shopPromoBarText");
const shopLogoContainer = document.querySelector("#shopLogoContainer");
const shopNavigationLinks = document.querySelector("#shopNavigationLinks");
const shopHeaderSearch = document.querySelector("#shopHeaderSearch");
const shopHeaderCart = document.querySelector("#shopHeaderCart");
const shopHeader = document.querySelector("#shopHeader");
const shopFooterText = document.querySelector("#shopFooterText");
const shopFooterAddress = document.querySelector("#shopFooterAddress");
const shopSocialsContainer = document.querySelector("#shopSocialsContainer");
const shopUrlPreview = document.querySelector("#shopUrlPreview");
const shopPreviewBody = document.querySelector("#shopPreviewBody");
const shopCartBadgeCount = document.querySelector("#shopCartBadgeCount");

// Drawer
const cartDrawerOverlay = document.querySelector("#cartDrawerOverlay");
const cartDrawerCloseBtn = document.querySelector("#cartDrawerCloseBtn");
const cartDrawerItems = document.querySelector("#cartDrawerItems");
const cartDrawerSubtotal = document.querySelector("#cartDrawerSubtotal");
const cartDrawerCheckoutBtn = document.querySelector("#cartDrawerCheckoutBtn");

// Popups
const newsPopupOverlay = document.querySelector("#newsPopupOverlay");
const newsPopupCloseBtn = document.querySelector("#newsPopupCloseBtn");
const sizeGuideModalOverlay = document.querySelector("#sizeGuideModalOverlay");
const closeSizeGuideModalBtn = document.querySelector("#closeSizeGuideModalBtn");
const closeSizeGuideBtnConfirm = document.querySelector("#closeSizeGuideBtnConfirm");

// Toast
const toast = document.querySelector("#toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

// Timer do Countdown
let countdownInterval;
let currentRemainingTime = 0; // segundos

// Flag para carregar modal de newsletter uma vez
let newsletterShownInSession = false;

// ==========================================================================
// 1. Navegação de Abas do Editor
// ==========================================================================
document.querySelectorAll(".tab-nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    
    btn.classList.add("active");
    const targetPane = document.getElementById(btn.dataset.tab);
    if (targetPane) targetPane.classList.add("active");
    
    // Oculta painel de produto se aberto
    document.querySelector("#productStateEditorPanel").style.display = "none";
  });
});

// ==========================================================================
// 2. Modos de Dispositivo do Preview (Desktop / Tablet / Mobile)
// ==========================================================================
const mockupWindow = document.querySelector("#themeMockupWindow");
const btnDesktop = document.querySelector("#btnPreviewDesktop");
const btnTablet = document.querySelector("#btnPreviewTablet");
const btnMobile = document.querySelector("#btnPreviewMobile");

function setPreviewDevice(mode) {
  mockupWindow.className = "store-preview theme-editor-mockup";
  btnDesktop.classList.remove("active");
  btnTablet.classList.remove("active");
  btnMobile.classList.remove("active");
  
  if (mode === "tablet") {
    btnTablet.classList.add("active");
    mockupWindow.classList.add("tablet-preview-frame");
  } else if (mode === "mobile") {
    btnMobile.classList.add("active");
    mockupWindow.classList.add("mobile-preview-frame");
  } else {
    btnDesktop.classList.add("active");
  }
}

if (btnDesktop) btnDesktop.addEventListener("click", () => setPreviewDevice("desktop"));
if (btnTablet) btnTablet.addEventListener("click", () => setPreviewDevice("tablet"));
if (btnMobile) btnMobile.addEventListener("click", () => setPreviewDevice("mobile"));

// ==========================================================================
// 3. Atualização e Renderização do Preview
// ==========================================================================
function updatePreview() {
  if (!shopWindow) return;

  // A. Identidade e Marca
  shopUrlPreview.textContent = storeConfig.brand.name.toLowerCase().replace(/\s+/g, "-") + ".com";
  
  if (storeConfig.brand.logoUrl) {
    shopLogoContainer.innerHTML = `<img src="${storeConfig.brand.logoUrl}" style="max-height:36px; max-width:140px; object-fit:contain;" alt="${storeConfig.brand.name}" />`;
  } else {
    shopLogoContainer.innerHTML = `<strong id="shopLogoText">${storeConfig.brand.name}</strong>`;
  }
  
  // B. Layout Classes e Variables
  const layout = storeConfig.layout;
  shopWindow.className = `shop-window font-customized preset-${storeConfig.themePreset} density-${layout.density}`;
  
  if (storeConfig.colors.darkMode) {
    shopWindow.classList.add("theme-dark-view");
  }
  
  // Configuração do Cabeçalho Fixo
  shopWindow.classList.toggle("has-sticky-header", !!layout.stickyHeader);
  shopHeader.className = layout.headerLayout;

  // CSS Variables
  shopWindow.style.setProperty("--shop-accent", storeConfig.colors.accent);
  shopWindow.style.setProperty("--shop-bg", storeConfig.colors.bg);
  shopWindow.style.setProperty("--shop-text", storeConfig.colors.text);
  shopWindow.style.setProperty("--shop-btn-bg", storeConfig.colors.btn);
  shopWindow.style.setProperty("--shop-btn-text", storeConfig.colors.btn === "#ffffff" ? "#000000" : "#ffffff");
  shopWindow.style.setProperty("--shop-radius", storeConfig.typography.borders + "px");
  shopWindow.style.setProperty("--shop-spacing", storeConfig.typography.spacing + "px");
  
  // Customização de Botões e Cards
  if (layout.btnStyle === "pill") {
    shopWindow.style.setProperty("--shop-btn-radius", "99px");
  } else if (layout.btnStyle === "square") {
    shopWindow.style.setProperty("--shop-btn-radius", "0px");
  } else {
    shopWindow.style.setProperty("--shop-btn-radius", "6px");
  }
  
  // C. Tipografia
  const typo = storeConfig.typography;
  shopWindow.style.fontFamily = typo.fontBase;
  shopWindow.style.fontSize = typo.fontSize + "px";
  
  const headings = shopWindow.querySelectorAll("h3, h4, h5, strong, .hero-title, .product-card-title, .product-detail-title");
  headings.forEach(h => {
    h.style.fontFamily = typo.fontTitle;
    h.style.fontWeight = typo.fontTitleWeight;
  });

  // D. Cabeçalho & Menu (Mega Menu vs Simples)
  renderNavigation();

  // E. Faixa de Promoção
  const mkt = storeConfig.marketing;
  if (mkt.showPromoBar) {
    shopPromoBar.style.display = "block";
    shopPromoBar.style.backgroundColor = mkt.promoBarBg;
    shopPromoBarText.innerHTML = `${mkt.promoBarText} · Use o cupom <strong>${storeConfig.cart.defaultCoupon}</strong> para ganhar desconto!`;
  } else {
    shopPromoBar.style.display = "none";
  }

  // F. Página Ativa
  renderActivePage();

  // G. Rodapé
  const footer = storeConfig.footer;
  shopFooterText.textContent = footer.text;
  
  if (footer.address && footer.address.trim() !== "") {
    shopFooterAddress.textContent = footer.address;
    shopFooterAddress.style.display = "block";
  } else {
    shopFooterAddress.style.display = "none";
  }
  
  shopSocialsContainer.innerHTML = "";
  if (footer.socialInsta) shopSocialsContainer.innerHTML += `<span class="social-icon-mock">Insta</span>`;
  if (footer.socialFb) shopSocialsContainer.innerHTML += `<span class="social-icon-mock">FB</span>`;
  
  // payment icons
  if (footer.paymentVisa || footer.paymentMaster || footer.paymentPix || footer.paymentBoleto) {
    let payHtml = `<div style="display:flex; gap:6px; margin-top:8px;">`;
    if (footer.paymentVisa) payHtml += `<span class="social-icon-mock">Visa</span>`;
    if (footer.paymentMaster) payHtml += `<span class="social-icon-mock">MC</span>`;
    if (footer.paymentPix) payHtml += `<span class="social-icon-mock">Pix</span>`;
    if (footer.paymentBoleto) payHtml += `<span class="social-icon-mock">Boleto</span>`;
    payHtml += `</div>`;
    shopSocialsContainer.innerHTML += payHtml;
  }

  // H. Popups e Marketing Clocks
  handleMarketingPopups();
  updateCartBadge();
}

// Renderiza a navegação com suporte a Mega Menu e sugestões Ajax
function renderNavigation() {
  shopNavigationLinks.innerHTML = "";
  
  const isMegaMenu = storeConfig.layout.menuType === "megamenu";
  
  storeConfig.menuLinks.forEach((link, idx) => {
    const el = document.createElement("div");
    el.className = isMegaMenu && idx === 0 ? "mega-menu-trigger" : "";
    el.style.position = "relative";
    
    let arrowHtml = isMegaMenu && idx === 0 ? ` <span style="font-size:9px;">▼</span>` : "";
    
    el.innerHTML = `<a class="nav-item-link">${link.label}${arrowHtml}</a>`;
    
    // Simula ir para o catálogo ao clicar
    el.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      changeSimulatedPage("catalog");
    });

    // Injeta o Mega Menu se ativado na primeira aba
    if (isMegaMenu && idx === 0) {
      const mega = document.createElement("div");
      mega.className = "shop-mega-menu";
      mega.innerHTML = `
        <div class="mega-menu-cols">
          <div class="mega-menu-col">
            <h5>Categorias</h5>
            <ul>
              <li><a>Móveis Compactos</a></li>
              <li><a>Luminárias Autorais</a></li>
              <li><a>Decorações Organizadas</a></li>
            </ul>
          </div>
          <div class="mega-menu-col">
            <h5>Especiais</h5>
            <ul>
              <li><a>Mais Vendidos</a></li>
              <li><a>Lançamentos da Linha</a></li>
              <li><a>Ofertas da Estação</a></li>
            </ul>
          </div>
        </div>
        <div class="mega-menu-promo">
          <span>Destaque</span>
          <strong>Coleção 2026</strong>
          <a style="font-size:10px; text-decoration:underline; font-weight:700; color:var(--shop-accent);">Acessar Looks</a>
        </div>
      `;
      el.appendChild(mega);
    }
    
    shopNavigationLinks.appendChild(el);
  });
}

// Controla popups dinâmicos de marketing
function handleMarketingPopups() {
  // Cronômetro
  const mkt = storeConfig.marketing;
  if (mkt.showCountdown && !countdownInterval) {
    currentRemainingTime = parseInt(mkt.countdownDuration) * 3600;
    startCountdownClock();
  } else if (!mkt.showCountdown && countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  
  // Popup de Newsletter diferido de 5 segundos
  if (mkt.showNewsPopup && !newsletterShownInSession) {
    setTimeout(() => {
      if (storeConfig.marketing.showNewsPopup && newsPopupOverlay) {
        newsPopupOverlay.classList.add("active");
        newsletterShownInSession = true;
      }
    }, 5000);
  }
}

function startCountdownClock() {
  if (countdownInterval) clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    if (currentRemainingTime > 0) {
      currentRemainingTime--;
      updateCountdownDigits();
    } else {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }, 1000);
}

function updateCountdownDigits() {
  const widgets = document.querySelectorAll(".countdown-timer-widget");
  if (widgets.length === 0) return;
  
  const h = Math.floor(currentRemainingTime / 3600);
  const m = Math.floor((currentRemainingTime % 3600) / 60);
  const s = currentRemainingTime % 60;
  
  const format = (num) => String(num).padStart(2, '0');
  
  widgets.forEach(widget => {
    widget.innerHTML = `
      <span style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--shop-accent);">Oferta por tempo limitado!</span>
      <div class="timer-digits-row">
        <div class="timer-digit-box"><span>${format(h)}</span><span>H</span></div>
        <div class="timer-digit-box"><span>${format(m)}</span><span>M</span></div>
        <div class="timer-digit-box"><span>${format(s)}</span><span>S</span></div>
      </div>
    `;
  });
}

// ==========================================================================
// 4. Renderização do Corpo da Vitrine (Páginas Dinâmicas)
// ==========================================================================
function renderActivePage() {
  if (!shopPreviewBody) return;
  shopPreviewBody.innerHTML = "";
  
  const page = storeConfig.activePage;
  const layout = storeConfig.layout;
  
  if (page === "home") {
    // A. Hero Banner
    const hp = storeConfig.homepage;
    const hero = document.createElement("div");
    hero.className = `shop-hero ${hp.bannerAlign}`;
    
    if (hp.bannerImgUrl) {
      hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${hp.bannerImgUrl})`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      hero.style.color = "#ffffff";
    } else {
      hero.style.backgroundImage = "none";
      hero.style.color = "inherit";
    }

    const promoBadgeHtml = hp.showPromoBadge ? `<p class="hero-promo-badge">Lançamento Especial</p>` : "";
    const secBtnHtml = hp.bannerSecBtnText ? `<button type="button" class="shop-banner-cta-secondary" id="heroSecBtn">${hp.bannerSecBtnText}</button>` : "";
    
    const heroProductHtml = !hp.bannerImgUrl ? `
      <div class="hero-product" aria-hidden="true">
        <svg class="hero-placeholder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
    ` : "";

    hero.innerHTML = `
      <div class="hero-content">
        ${promoBadgeHtml}
        <h3 class="hero-title">${hp.bannerTitle}</h3>
        <p class="hero-subtitle">${hp.bannerSubtitle}</p>
        <div class="hero-ctas">
          <button type="button" class="shop-banner-cta" id="heroBtnText">${hp.bannerBtnText}</button>
          ${secBtnHtml}
        </div>
      </div>
      ${heroProductHtml}
    `;
    
    hero.querySelector(".shop-banner-cta").addEventListener("click", () => changeSimulatedPage("catalog"));
    if (hero.querySelector("#heroSecBtn")) {
      hero.querySelector("#heroSecBtn").addEventListener("click", () => changeSimulatedPage("about"));
    }
    
    shopPreviewBody.appendChild(hero);

    // B. Widget de Conversão (Cronômetro de Oferta)
    if (storeConfig.marketing.showCountdown) {
      const widget = document.createElement("div");
      widget.className = "countdown-timer-widget";
      shopPreviewBody.appendChild(widget);
      updateCountdownDigits();
    }

    // C. Vitrine Grid de Produtos
    const gridTitle = document.createElement("h4");
    gridTitle.textContent = "Coleção em Destaque";
    gridTitle.style.fontSize = "16px";
    gridTitle.style.fontWeight = "800";
    gridTitle.style.marginTop = "12px";
    gridTitle.style.fontFamily = storeConfig.typography.fontTitle;
    shopPreviewBody.appendChild(gridTitle);

    const grid = document.createElement("div");
    grid.className = `product-grid-container cols-${layout.gridColumns}`;
    
    const visibleProds = storeConfig.products.filter(p => p.visible);
    if (visibleProds.length === 0) {
      grid.innerHTML = `<div class="empty-state-strip" style="grid-column:1/-1;">Nenhum produto cadastrado na vitrine.</div>`;
    } else {
      visibleProds.forEach(prod => {
        grid.appendChild(createProductCard(prod));
      });
    }
    shopPreviewBody.appendChild(grid);

    // D. Depoimento de Clientes e Prova Social
    if (hp.testimonialText) {
      const test = document.createElement("div");
      test.className = "campaign-card";
      test.style.padding = "20px";
      test.style.background = "rgba(128,128,128,0.02)";
      test.style.border = "1px solid var(--shop-border)";
      test.style.borderRadius = "var(--shop-radius)";
      test.style.marginTop = "10px";
      test.style.textAlign = "center";
      
      test.innerHTML = `
        <p style="font-style:italic; font-size:13px; color:var(--shop-text);">"${hp.testimonialText}"</p>
        <strong style="display:block; font-size:12px; margin-top:8px; color:var(--shop-accent);">${hp.testimonialAuthor}</strong>
      `;
      shopPreviewBody.appendChild(test);
    }

    // E. Feed do Instagram Simulador
    if (hp.showInstagramFeed) {
      const insta = document.createElement("div");
      insta.style.marginTop = "16px";
      insta.innerHTML = `
        <h5 style="font-size:11px; text-transform:uppercase; color:var(--shop-text-muted); font-weight:700; margin-bottom:10px;">@instagram_feed</h5>
        <div style="display:grid; grid-template-columns:repeat(6, 1fr); gap:8px;">
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
          <div style="aspect-ratio:1; background:rgba(128,128,128,0.08); border-radius:4px;"></div>
        </div>
      `;
      shopPreviewBody.appendChild(insta);
    }

    if (typeof renderTemplateSections === "function") {
      renderTemplateSections(shopPreviewBody);
    }
  }
  
  else if (page === "catalog") {
    // B. Catálogo com Filtros Funcionais
    const catalog = document.createElement("div");
    catalog.className = "catalog-layout";
    
    // Determinar se existem filtros ativos
    const hasFilters = catalogActiveFilters.availability.length > 0 || catalogActiveFilters.price.length > 0;
    const filterBadgeHtml = hasFilters ? `<span class="filter-badge">Ativos</span>` : "";

    catalog.innerHTML = `
      <aside class="catalog-sidebar">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--shop-border); padding-bottom:8px;">
          <h5 style="font-size:11px; text-transform:uppercase; font-weight:800;">Filtros</h5>
          ${filterBadgeHtml}
        </div>
        
        <div class="filter-group">
          <h5>Disponibilidade</h5>
          <div class="filter-list">
            <label class="filter-item">
              <input type="checkbox" class="filter-avail-check" value="in-stock" ${catalogActiveFilters.availability.includes("in-stock") ? "checked" : ""} /> Em estoque
            </label>
            <label class="filter-item">
              <input type="checkbox" class="filter-avail-check" value="out-of-stock" ${catalogActiveFilters.availability.includes("out-of-stock") ? "checked" : ""} /> Esgotado
            </label>
          </div>
        </div>

        <div class="filter-group">
          <h5>Faixa de Preço</h5>
          <div class="filter-list">
            <label class="filter-item">
              <input type="checkbox" class="filter-price-check" value="under-200" ${catalogActiveFilters.price.includes("under-200") ? "checked" : ""} /> Até R$ 200
            </label>
            <label class="filter-item">
              <input type="checkbox" class="filter-price-check" value="over-200" ${catalogActiveFilters.price.includes("over-200") ? "checked" : ""} /> Acima de R$ 200
            </label>
          </div>
        </div>
        
        ${hasFilters ? `<button type="button" class="secondary-action small-btn" id="resetCatalogFiltersBtn" style="font-size:10px; height:28px;">Limpar Filtros</button>` : ""}
      </aside>
      
      <div class="catalog-content">
        <div class="catalog-header-info">
          <h4>Coleção Completa</h4>
          <span style="font-size:12px; color:var(--shop-text-muted);" id="catalogResultCount">0 itens encontrados</span>
        </div>
        <div class="product-grid-container cols-${layout.gridColumns}" id="catalogProductGrid">
          <!-- Injetado via JS -->
        </div>
      </div>
    `;

    shopPreviewBody.appendChild(catalog);

    // Filtrar Produtos
    const grid = catalog.querySelector("#catalogProductGrid");
    const countEl = catalog.querySelector("#catalogResultCount");
    
    let filtered = storeConfig.products.filter(p => p.visible);
    
    // Filtrar por estoque
    if (catalogActiveFilters.availability.length > 0) {
      filtered = filtered.filter(p => {
        const inStock = p.stock > 0;
        if (catalogActiveFilters.availability.includes("in-stock") && inStock) return true;
        if (catalogActiveFilters.availability.includes("out-of-stock") && !inStock) return true;
        return false;
      });
    }

    // Filtrar por preço
    if (catalogActiveFilters.price.length > 0) {
      filtered = filtered.filter(p => {
        const numericPrice = parseFloat((p.promoPrice || p.price).replace(/[^\d]/g, "")) / 100;
        if (catalogActiveFilters.price.includes("under-200") && numericPrice <= 200) return true;
        if (catalogActiveFilters.price.includes("over-200") && numericPrice > 200) return true;
        return false;
      });
    }

    countEl.textContent = `${filtered.length} itens encontrados`;

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state-strip" style="grid-column:1/-1;">Nenhum produto atende aos filtros selecionados.</div>`;
    } else {
      filtered.forEach(prod => {
        grid.appendChild(createProductCard(prod));
      });
    }

    // Binds de filtros
    catalog.querySelectorAll(".filter-avail-check").forEach(chk => {
      chk.addEventListener("change", () => {
        if (chk.checked) {
          catalogActiveFilters.availability.push(chk.value);
        } else {
          const idx = catalogActiveFilters.availability.indexOf(chk.value);
          if (idx > -1) catalogActiveFilters.availability.splice(idx, 1);
        }
        updatePreview();
      });
    });

    catalog.querySelectorAll(".filter-price-check").forEach(chk => {
      chk.addEventListener("change", () => {
        if (chk.checked) {
          catalogActiveFilters.price.push(chk.value);
        } else {
          const idx = catalogActiveFilters.price.indexOf(chk.value);
          if (idx > -1) catalogActiveFilters.price.splice(idx, 1);
        }
        updatePreview();
      });
    });

    const resetBtn = catalog.querySelector("#resetCatalogFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        catalogActiveFilters = { availability: [], price: [] };
        updatePreview();
      });
    }
  }
  
  else if (page === "product") {
    // C. Página de Detalhe com Zoom e Especificações
    const activeProd = storeConfig.products.find(p => p.visible) || storeConfig.products[0];
    if (!activeProd) {
      shopPreviewBody.innerHTML = `<div class="empty-state-strip">Nenhum produto cadastrado na vitrine.</div>`;
      return;
    }

    const detail = document.createElement("div");
    detail.className = "product-detail-layout";
    
    const isSoldOut = activeProd.stock <= 0;
    const badgeHtml = activeProd.isNew ? `<span class="shop-badge badge-new" style="position:static; margin-bottom:8px; display:inline-block;">Novo</span>` : 
                     (activeProd.promoPrice ? `<span class="shop-badge badge-sale" style="position:static; margin-bottom:8px; display:inline-block;">Promoção</span>` : "");
    
    let priceHtml = "";
    if (activeProd.promoPrice) {
      priceHtml = `
        <span class="price-original" style="font-size:14px;">${activeProd.price}</span>
        <span class="price-current" style="font-size:22px; margin-left:6px;">${activeProd.promoPrice}</span>
      `;
    } else {
      priceHtml = `<span class="price-current" style="font-size:22px;">${activeProd.price}</span>`;
    }

    const installmentsHtml = activeProd.installments > 1 ? `
      <p style="font-size:12px; color:var(--shop-text-muted); margin-top:2px;">
        Ou em até <strong>${activeProd.installments}x</strong> sem juros de R$ ${(parseFloat(activeProd.price.replace(/[^\d]/g, "")) / 100 / activeProd.installments).toFixed(2)}
      </p>
    ` : "";

    const shippingHtml = activeProd.freeShipping ? `<span class="meta-free-shipping" style="font-size:12px; display:inline-block; margin-top:6px;">✓ Frete Grátis</span>` : "";

    let ratingStars = "";
    if (activeProd.rating > 0) {
      ratingStars = `<div class="product-rating" style="font-size:14px; margin-bottom:4px;">` + "★".repeat(activeProd.rating) + "☆".repeat(5 - activeProd.rating) + ` <span class="rating-count">(12 avaliações)</span></div>`;
    }

    // Especificações técnicas
    const specsHtml = storeConfig.productPage.specsActive ? `
      <table class="product-detail-specs-table">
        <tbody>
          <tr><td>Categoria</td><td>${activeProd.category || "Geral"}</td></tr>
          <tr><td>Materiais</td><td>Nobre ecológico</td></tr>
          <tr><td>Garantia</td><td>12 meses oficial</td></tr>
          <tr><td>Qtd em Estoque</td><td>${activeProd.showStock ? activeProd.stock + ' unidades' : 'Disponível'}</td></tr>
        </tbody>
      </table>
    ` : "";

    // Guia de tamanhos
    const sizeGuideLinkHtml = storeConfig.productPage.sizeGuideActive ? `
      <span class="size-guide-link" id="sizeGuideModalLink">Ver Guia de Tamanhos</span>
    ` : "";

    detail.innerHTML = `
      <div class="product-gallery">
        <div class="zoom-gallery-container">
          <div class="gallery-main-image" id="galleryMainImgBox" style="position:relative; overflow:hidden;">
            ${productSVGs[activeProd.art] || productSVGs.clay}
            <div class="zoom-lens-panel" id="zoomLens"></div>
            <div class="zoom-result-window" id="zoomResult"></div>
          </div>
        </div>
        <div class="gallery-thumbnails">
          <div class="gallery-thumb active">${productSVGs[activeProd.art]}</div>
          <div class="gallery-thumb">${productSVGs.clay}</div>
          <div class="gallery-thumb">${productSVGs.leaf}</div>
        </div>
      </div>
      <div class="product-info-column">
        <div>
          ${badgeHtml}
          <h2 class="product-detail-title">${activeProd.name}</h2>
          ${ratingStars}
        </div>
        
        <div class="product-price-block">
          <div class="product-price-row">${priceHtml}</div>
          ${installmentsHtml}
          ${shippingHtml}
        </div>

        <p class="product-detail-description">
          Objeto autoral desenvolvido sob diretrizes do design moderno de e-commerce. Fabricação premium com foco em acabamento excepcional e durabilidade.
        </p>

        <!-- Variantes de Cor e Tamanho -->
        <div class="product-variant-selector">
          <span class="variant-label">Cores Disponíveis</span>
          <div class="variant-options">
            <span class="color-variant-dot active" style="background:#5c5346;" title="Natural"></span>
            <span class="color-variant-dot" style="background:#d4a373;" title="Caramelo"></span>
            <span class="color-variant-dot" style="background:#81b29a;" title="Sálvia"></span>
          </div>
        </div>

        <div class="product-variant-selector" style="margin-top:4px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <span class="variant-label">Tamanho / Medida</span>
            ${sizeGuideLinkHtml}
          </div>
          <div class="variant-options">
            <button type="button" class="variant-option-btn active">P</button>
            <button type="button" class="variant-option-btn">M</button>
            <button type="button" class="variant-option-btn">G</button>
          </div>
        </div>

        <div class="quantity-buy-row">
          <div class="quantity-selector">
            <button type="button" class="quantity-btn" id="qtyMinusBtn">-</button>
            <span class="quantity-val" id="qtyVal">1</span>
            <button type="button" class="quantity-btn" id="qtyPlusBtn">+</button>
          </div>
          <button type="button" class="buy-btn" id="productDetailBuyBtn" style="height:40px; flex:1;" ${isSoldOut ? "disabled style='opacity:0.6; cursor:not-allowed;'" : ""}>
            ${isSoldOut ? "Esgotado" : "Adicionar ao Carrinho"}
          </button>
        </div>

        <!-- Cep Calc -->
        <div class="product-detail-shipping">
          <span class="variant-label">Calcular Frete e Prazo</span>
          <div class="shipping-input-row">
            <input type="text" placeholder="CEP ex: 01001-000" id="cepInput" />
            <button type="button" id="cepCalcBtn">Calcular</button>
          </div>
          <span id="cepResult" style="font-size:12px; color:#10b981; font-weight:600; display:none;">Entrega estimada em até 4 dias úteis.</span>
        </div>

        ${specsHtml}
        
        <div style="border-top:1px solid var(--shop-border); padding-top:12px; margin-top:8px;">
          <span class="variant-label">Trocas e Devoluções</span>
          <p style="font-size:11px; color:var(--shop-text-muted); margin-top:4px; line-height:1.4;">
            ${storeConfig.productPage.shippingInfo}
          </p>
        </div>
      </div>
    `;

    shopPreviewBody.appendChild(detail);

    // Zoom Simulado (Matemática com coordenadas)
    if (storeConfig.productPage.zoomActive) {
      const box = detail.querySelector("#galleryMainImgBox");
      const lens = detail.querySelector("#zoomLens");
      const result = detail.querySelector("#zoomResult");
      
      box.addEventListener("mousemove", (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left - 50;
        const y = e.clientY - rect.top - 50;
        
        // Limites
        const maxX = rect.width - 100;
        const maxY = rect.height - 100;
        
        const clampedX = Math.max(0, Math.min(x, maxX));
        const clampedY = Math.max(0, Math.min(y, maxY));
        
        lens.style.left = clampedX + "px";
        lens.style.top = clampedY + "px";
        
        // Simulação do zoom (mudando background-position ou SVG scale)
        result.innerHTML = `<div style="transform: scale(2); width:100%; height:100%; display:flex; align-items:center; justify-content:center; transform-origin: ${clampedX * 1.5}px ${clampedY * 1.5}px;">${productSVGs[activeProd.art] || productSVGs.clay}</div>`;
      });
    }

    // Binds
    const qtyValEl = detail.querySelector("#qtyVal");
    let qty = 1;
    detail.querySelector("#qtyMinusBtn").addEventListener("click", () => {
      if (qty > 1) qtyValEl.textContent = --qty;
    });
    detail.querySelector("#qtyPlusBtn").addEventListener("click", () => {
      qtyValEl.textContent = ++qty;
    });
    
    detail.querySelector("#productDetailBuyBtn").addEventListener("click", () => {
      addToCart(activeProd, qty);
    });

    const cepInput = detail.querySelector("#cepInput");
    const cepResult = detail.querySelector("#cepResult");
    detail.querySelector("#cepCalcBtn").addEventListener("click", () => {
      if (cepInput.value.trim() !== "") {
        cepResult.style.display = "block";
      }
    });

    const sizeGuideLink = detail.querySelector("#sizeGuideModalLink");
    if (sizeGuideLink && sizeGuideModalOverlay) {
      sizeGuideLink.addEventListener("click", () => {
        sizeGuideModalOverlay.classList.add("active");
      });
    }

    // Variant Selection
    detail.querySelectorAll(".color-variant-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        detail.querySelectorAll(".color-variant-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        showToast(`Cor "${dot.title}" selecionada.`);
      });
    });
    
    detail.querySelectorAll(".variant-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        detail.querySelectorAll(".variant-option-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }
  
  else if (page === "cart") {
    // D. Página de Carrinho Cheia
    const cartPage = document.createElement("div");
    cartPage.className = "cart-page-layout";
    
    if (cartItems.length === 0) {
      cartPage.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding: 48px 24px;">
          <h4 style="font-family:var(--shop-font-title); font-size:18px; margin-bottom:8px;">Seu Carrinho está vazio</h4>
          <p style="font-size:13px; color:var(--shop-text-muted); margin-bottom:16px;">Navegue pela loja para simular checkout.</p>
          <button type="button" class="checkout-btn" style="width:auto; display:inline-flex; padding:0 24px;" id="cartReturnHomeBtn">Ver Produtos</button>
        </div>
      `;
      shopPreviewBody.appendChild(cartPage);
      cartPage.querySelector("#cartReturnHomeBtn").addEventListener("click", () => changeSimulatedPage("catalog"));
      return;
    }

    let itemsHtml = "";
    let subtotal = 0;
    cartItems.forEach((item, index) => {
      const priceVal = parseFloat((item.product.promoPrice || item.product.price).replace(/[^\d]/g, "")) / 100;
      const totalItemPrice = priceVal * item.quantity;
      subtotal += totalItemPrice;
      
      itemsHtml += `
        <div class="cart-item-card">
          <div class="cart-item-thumb">${productSVGs[item.product.art] || productSVGs.clay}</div>
          <div class="cart-item-info">
            <h5>${item.product.name}</h5>
            <div class="cart-qty-spinner" style="margin-top:4px;">
              <button class="qty-spin-btn-page-minus" data-index="${index}">-</button>
              <span>${item.quantity}</span>
              <button class="qty-spin-btn-page-plus" data-index="${index}">+</button>
            </div>
          </div>
          <div class="cart-item-price">R$ ${totalItemPrice.toFixed(2)}</div>
          <div class="cart-item-remove" data-index="${index}">&times;</div>
        </div>
      `;
    });

    const discountVal = parseFloat(storeConfig.marketing.promoDiscount) || 10;
    const discountAmount = subtotal * (discountVal / 100);
    const finalTotal = subtotal - discountAmount;

    cartPage.innerHTML = `
      <div class="cart-items-list">
        <h4>Seus Itens</h4>
        ${itemsHtml}
      </div>
      <div class="cart-summary-box">
        <h4>Resumo da Compra</h4>
        <div class="summary-row"><span>Subtotal</span><span>R$ ${subtotal.toFixed(2)}</span></div>
        <div class="summary-row"><span>Frete Estimado</span><span style="color:#10b981; font-weight:600;">Grátis</span></div>
        <div class="summary-row"><span>Desconto (${discountVal}%)</span><span>- R$ ${discountAmount.toFixed(2)}</span></div>
        <div class="summary-row total"><span>Total</span><span>R$ ${finalTotal.toFixed(2)}</span></div>
        <button class="checkout-btn" type="button" id="cartPageCheckoutBtn">Finalizar Compra</button>
      </div>
    `;

    shopPreviewBody.appendChild(cartPage);

    // Binds do spinner de quantidade e remoção na página de carrinho
    cartPage.querySelectorAll(".qty-spin-btn-page-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity--;
          updatePreview();
        }
      });
    });

    cartPage.querySelectorAll(".qty-spin-btn-page-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        cartItems[index].quantity++;
        updatePreview();
      });
    });

    cartPage.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index);
        cartItems.splice(index, 1);
        updatePreview();
        showToast("Produto removido.");
      });
    });

    cartPage.querySelector("#cartPageCheckoutBtn").addEventListener("click", () => {
      showToast("Checkout concluído com sucesso!");
    });
  }
  
  else if (page === "checkout") {
    if (typeof renderCheckoutPage === "function") {
      renderCheckoutPage(shopPreviewBody);
    }
  }

  else if (page === "vendor-panel") {
    if (typeof renderVendorPanel === "function") {
      renderVendorPanel(shopPreviewBody);
    }
  }

  else if (page === "analytics") {
    if (typeof renderAnalyticsDashboard === "function") {
      renderAnalyticsDashboard(shopPreviewBody);
    }
  }

  else if (page === "about") {
    // E. Página Sobre / FAQ Institucional
    const about = document.createElement("div");
    about.className = "institucional-layout";
    
    // Customizar texto sobre de acordo com o tom de voz
    let brandStatement = "";
    const tone = storeConfig.brand.tone;
    if (tone === "premium") {
      brandStatement = i18n("premiumBrandStatement", "Nossa marca preza pelo rigor estético e design nobre. Criamos coleções de alto valor conceitual para clientes que apreciam a elegância intemporal em cada detalhe.");
    } else if (tone === "jovem") {
      brandStatement = i18n("jovemBrandStatement", "E aí! Somos focados em trazer produtos super descolados, modernos e cheios de atitude para o seu cotidiano de um jeito simples, leve e descomplicado.");
    } else if (tone === "tecnico") {
      brandStatement = i18n("tecnicoBrandStatement", "Nossa corporação opera sob padrões técnicos avançados de engenharia de produto, fornecendo soluções de alta precisão baseadas em especificações rigorosas.");
    } else if (tone === "artesanal") {
      brandStatement = i18n("artesanalBrandStatement", "Fazemos cada peça com as nossas próprias mãos, honrando artesãos locais e materiais de procedência ecológica. Uma produção cuidadosa e cheia de amor.");
    } else {
      brandStatement = i18n("defaultBrandStatement", "Fornecemos produtos eficientes de forma direta, garantindo transparência, ótimo custo-benefício e total foco na satisfação das suas compras diárias.");
    }

    about.innerHTML = `
      <div class="institucional-header">
        <h2>${i18n("aboutTitle", "Sobre a Nossa Loja")}</h2>
        <p style="font-size:13px; color:var(--shop-text-muted); margin-top:4px;">${i18n("aboutSubtitle", "Conheça a nossa jornada e valores.")}</p>
      </div>

      <p style="font-size:13px; line-height:1.6;">
        <strong>${i18n("welcome", "Bem-vindo ao")} ${storeConfig.brand.name}.</strong> ${storeConfig.brand.slogan}. ${brandStatement}
      </p>

      <hr class="divider-h" />
      
      <div class="faq-section">
        <h4 style="font-family:var(--shop-font-title); font-size:16px; margin-bottom:12px;">Perguntas Frequentes (FAQ)</h4>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question">${i18n("faqQ1", "Qual o prazo de envio?")} <span>▼</span></button>
            <div class="faq-answer">${i18n("faqA1", "Todos os pedidos são processados e enviados em até 48 horas úteis com rastreamento completo.")}</div>
          </div>
          <div class="faq-item">
            <button class="faq-question">${i18n("faqQ2", "Quais as opções de pagamento?")} <span>▼</span></button>
            <div class="faq-answer">${i18n("faqA2", "Aceitamos cartões de crédito Visa e Mastercard em até 10x sem juros, Pix e boleto bancário.")}</div>
          </div>
          <div class="faq-item">
            <button class="faq-question">${i18n("faqQ3", "Posso trocar ou devolver meu produto?")} <span>▼</span></button>
            <div class="faq-answer">${i18n("faqA3", "Sim! A primeira troca é grátis e pode ser solicitada em até 7 dias corridos após o recebimento.")}</div>
          </div>
        </div>
      </div>
    `;

    shopPreviewBody.appendChild(about);

    // Bind do FAQ
    about.querySelectorAll(".faq-question").forEach(q => {
      q.addEventListener("click", () => {
        q.parentElement.classList.toggle("active");
      });
    });
  }
}

// Cria card de produto comercial
function createProductCard(prod) {
  const card = document.createElement("article");
  card.className = `product-card ${storeConfig.layout.cardStyle === "minimal" ? "" : (storeConfig.layout.cardStyle === "shadowed" ? "has-shadow" : "has-border")}`;
  
  // Customização de bordas no card
  card.style.borderRadius = storeConfig.typography.borders + "px";
  
  const isSoldOut = prod.stock <= 0;
  
  let badgeHtml = "";
  if (isSoldOut) {
    badgeHtml = `<span class="shop-badge badge-soldout">Esgotado</span>`;
  } else if (prod.isNew) {
    badgeHtml = `<span class="shop-badge badge-new" style="background:${storeConfig.colors.badges}">Novo</span>`;
  } else if (prod.promoPrice) {
    badgeHtml = `<span class="shop-badge badge-sale" style="background:${storeConfig.colors.sale}">Promoção</span>`;
  }

  let starsHtml = "";
  if (prod.rating > 0) {
    starsHtml = `<div class="product-rating">` + "★".repeat(prod.rating) + "☆".repeat(5 - prod.rating) + `</div>`;
  }

  let priceHtml = "";
  if (prod.promoPrice) {
    priceHtml = `
      <span class="price-original">${prod.price}</span>
      <span class="price-current" style="color:${storeConfig.colors.sale}">${prod.promoPrice}</span>
    `;
  } else {
    priceHtml = `<span class="price-current" style="color:${storeConfig.colors.accent}">${prod.price}</span>`;
  }

  const freeShippingHtml = prod.freeShipping ? `<span class="meta-free-shipping">Frete Grátis</span>` : "";
  const installmentsText = prod.installments > 1 ? `<span>Até ${prod.installments}x sem juros</span>` : "";

  const vendorHtml = typeof getVendorBadgeHtml !== "undefined" ? getVendorBadgeHtml(prod) : "";

  card.innerHTML = `
    ${badgeHtml}
    <div class="product-image-container">
      ${productSVGs[prod.art] || productSVGs.clay}
    </div>
    <div class="product-info-block">
      ${vendorHtml}
      ${starsHtml}
      <strong class="product-card-title">${prod.name}</strong>
      <div class="product-price-row">${priceHtml}</div>
      <div class="product-meta-details">
        ${installmentsText}
        ${freeShippingHtml}
      </div>
    </div>
    <button type="button" class="buy-btn" ${isSoldOut ? "disabled style='opacity:0.6; cursor:not-allowed;'" : ""}>
      ${isSoldOut ? "Esgotado" : "Comprar"}
    </button>
  `;

  // Comprar
  if (!isSoldOut) {
    card.querySelector(".buy-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(prod, 1);
    });
  }

  // Detalhe
  card.addEventListener("click", () => {
    // Altera produto ativo para o primeiro da lista
    const idx = storeConfig.products.indexOf(prod);
    if (idx > -1) {
      storeConfig.products.splice(idx, 1);
      storeConfig.products.unshift(prod);
    }
    changeSimulatedPage("product");
  });

  return card;
}

// ==========================================================================
// 5. Lógica de Carrinho Retrátil / Drawer Lateral
// ==========================================================================
function addToCart(product, quantity) {
  const existing = cartItems.find(item => item.product.name === product.name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }
  
  updateCartBadge();
  updatePreview();
  
  if (storeConfig.cart.cartType === "drawer") {
    openCartDrawer();
  } else {
    changeSimulatedPage("cart");
  }
  showToast(`${product.name} adicionado!`);
}

function updateCartBadge() {
  const total = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  if (shopCartBadgeCount) {
    shopCartBadgeCount.textContent = total;
    shopCartBadgeCount.style.display = total > 0 ? "flex" : "none";
  }
}

function openCartDrawer() {
  if (!cartDrawerOverlay) return;
  cartDrawerItems.innerHTML = "";
  let subtotal = 0;
  
  if (cartItems.length === 0) {
    cartDrawerItems.innerHTML = `<p class="empty-state" style="padding:24px 0;">Seu carrinho está vazio.</p>`;
  } else {
    cartItems.forEach((item, index) => {
      const priceVal = parseFloat((item.product.promoPrice || item.product.price).replace(/[^\d]/g, "")) / 100;
      const itemCost = priceVal * item.quantity;
      subtotal += itemCost;
      
      const el = document.createElement("div");
      el.className = "cart-drawer-item";
      el.innerHTML = `
        <div style="width:36px; height:36px;">${productSVGs[item.product.art]}</div>
        <div class="cart-drawer-item-info">
          <h5>${item.product.name}</h5>
          <div class="cart-qty-spinner" style="margin-top:2px;">
            <button class="qty-spin-btn-minus" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="qty-spin-btn-plus" data-index="${index}">+</button>
          </div>
        </div>
        <span class="cart-item-remove" data-drawer-index="${index}" style="font-size:16px;">&times;</span>
      `;
      
      el.querySelector(".qty-spin-btn-minus").addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          openCartDrawer();
          updatePreview();
        }
      });
      el.querySelector(".qty-spin-btn-plus").addEventListener("click", () => {
        item.quantity++;
        openCartDrawer();
        updatePreview();
      });
      el.querySelector(".cart-item-remove").addEventListener("click", () => {
        cartItems.splice(index, 1);
        openCartDrawer();
        updatePreview();
      });
      
      cartDrawerItems.appendChild(el);
    });
  }
  
  cartDrawerSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
  cartDrawerOverlay.classList.add("active");
}

function closeCartDrawer() {
  if (cartDrawerOverlay) cartDrawerOverlay.classList.remove("active");
}

if (cartDrawerCloseBtn) cartDrawerCloseBtn.addEventListener("click", closeCartDrawer);
if (shopHeaderCart) {
  shopHeaderCart.addEventListener("click", (e) => {
    e.preventDefault();
    if (storeConfig.cart.cartType === "drawer") {
      openCartDrawer();
    } else {
      changeSimulatedPage("cart");
    }
  });
}

if (cartDrawerCheckoutBtn) {
  cartDrawerCheckoutBtn.addEventListener("click", () => {
    closeCartDrawer();
    changeSimulatedPage("cart");
  });
}

function changeSimulatedPage(pageName) {
  storeConfig.activePage = pageName;
  updatePreview();
  
  document.querySelectorAll(".page-select-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageName);
  });
}

// Binds de Modais
if (newsPopupCloseBtn) {
  newsPopupCloseBtn.addEventListener("click", () => {
    newsPopupOverlay.classList.remove("active");
  });
}

if (closeSizeGuideModalBtn) {
  closeSizeGuideModalBtn.addEventListener("click", () => {
    sizeGuideModalOverlay.classList.remove("active");
  });
}
if (closeSizeGuideBtnConfirm) {
  closeSizeGuideBtnConfirm.addEventListener("click", () => {
    sizeGuideModalOverlay.classList.remove("active");
  });
}

// ==========================================================================
// 6. Busca com Auto-complete Ajax simulado
// ==========================================================================
const searchInputBox = document.querySelector("#searchInputBox");
const searchSuggestionsBox = document.querySelector("#searchSuggestionsBox");

if (searchInputBox && searchSuggestionsBox) {
  searchInputBox.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length === 0) {
      searchSuggestionsBox.style.display = "none";
      return;
    }
    
    // Procura na vitrine
    const matched = storeConfig.products.filter(p => p.name.toLowerCase().includes(val));
    searchSuggestionsBox.innerHTML = "";
    
    if (matched.length === 0) {
      searchSuggestionsBox.innerHTML = `<div class="suggestion-empty">Nenhum resultado para "${e.target.value}"</div>`;
    } else {
      matched.forEach(p => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.innerHTML = `
          <div style="width:20px; height:20px; color:var(--shop-accent);">${productSVGs[p.art]}</div>
          <span>${p.name}</span>
        `;
        item.addEventListener("click", () => {
          // Muda produto ativo e abre a tela
          const idx = storeConfig.products.indexOf(p);
          if (idx > -1) {
            storeConfig.products.splice(idx, 1);
            storeConfig.products.unshift(p);
          }
          changeSimulatedPage("product");
          searchSuggestionsBox.style.display = "none";
          searchInputBox.value = "";
        });
        searchSuggestionsBox.appendChild(item);
      });
    }
    searchSuggestionsBox.style.display = "flex";
  });
  
  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#shopSearchWrapper")) {
      searchSuggestionsBox.style.display = "none";
    }
  });
}

// ==========================================================================
// 7. Gerenciador de Produtos e Paletas Dinâmicas
// ==========================================================================
const productStateEditorPanel = document.querySelector("#productStateEditorPanel");
const saveProductStateBtn = document.querySelector("#saveProductStateBtn");
const closeStateEditorBtn = document.querySelector("#closeStateEditorBtn");

function renderProductsManager() {
  const container = document.querySelector("#featuredProductsContainer");
  if (!container) return;
  container.innerHTML = "";

  storeConfig.products.forEach((prod, index) => {
    const item = document.createElement("div");
    item.className = "manager-item";
    
    const detailsText = prod.promoPrice ? `<span style="color:#ef4444; font-weight:700;">Promo: ${prod.promoPrice}</span>` : `<span>Original: ${prod.price}</span>`;
    
    item.innerHTML = `
      <div class="item-info">
        <strong>${prod.name}</strong>
        ${detailsText}
      </div>
      <div class="item-actions">
        <button type="button" class="action-mini-btn visibility ${prod.visible ? "active" : ""}">
          ${prod.visible ? "Visível" : "Oculto"}
        </button>
        <button type="button" class="action-mini-btn edit-state" style="width:auto; padding:0 8px;">
          Editar Estado
        </button>
        <button type="button" class="action-mini-btn remove">×</button>
      </div>
    `;
    
    item.querySelector(".visibility").addEventListener("click", () => {
      prod.visible = !prod.visible;
      renderProductsManager();
      updatePreview();
    });
    
    item.querySelector(".edit-state").addEventListener("click", () => {
      openProductStateEditor(index);
    });
    
    item.querySelector(".remove").addEventListener("click", () => {
      storeConfig.products.splice(index, 1);
      renderProductsManager();
      updatePreview();
      showToast("Produto removido.");
    });
    
    container.appendChild(item);
  });
}

function openProductStateEditor(index) {
  if (!productStateEditorPanel) return;
  const prod = storeConfig.products[index];
  if (!prod) return;

  document.querySelector("#editProdIndex").value = index;
  document.querySelector("#editProdName").value = prod.name;
  document.querySelector("#editProdPrice").value = prod.price;
  document.querySelector("#editProdPromoPrice").value = prod.promoPrice || "";
  document.querySelector("#editProdStock").value = prod.stock;
  document.querySelector("#editProdRating").value = prod.rating || 0;
  document.querySelector("#editProdInstallments").value = prod.installments || 1;
  document.querySelector("#editProdIsNew").checked = !!prod.isNew;
  document.querySelector("#editProdFreeShipping").checked = !!prod.freeShipping;
  document.querySelector("#editProdShowStockToggle").checked = !!prod.showStock;

  productStateEditorPanel.style.display = "flex";
  productStateEditorPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

if (closeStateEditorBtn && productStateEditorPanel) {
  closeStateEditorBtn.addEventListener("click", () => {
    productStateEditorPanel.style.display = "none";
  });
}

if (saveProductStateBtn) {
  saveProductStateBtn.addEventListener("click", () => {
    const index = parseInt(document.querySelector("#editProdIndex").value);
    const prod = storeConfig.products[index];
    if (prod) {
      prod.name = document.querySelector("#editProdName").value.trim();
      prod.price = document.querySelector("#editProdPrice").value.trim();
      prod.promoPrice = document.querySelector("#editProdPromoPrice").value.trim();
      prod.stock = parseInt(document.querySelector("#editProdStock").value) || 0;
      prod.rating = parseInt(document.querySelector("#editProdRating").value) || 0;
      prod.installments = parseInt(document.querySelector("#editProdInstallments").value) || 1;
      prod.isNew = document.querySelector("#editProdIsNew").checked;
      prod.freeShipping = document.querySelector("#editProdFreeShipping").checked;
      prod.showStock = document.querySelector("#editProdShowStockToggle").checked;

      productStateEditorPanel.style.display = "none";
      renderProductsManager();
      updatePreview();
      showToast("Estados do produto salvos!");
    }
  });
}

function updatePalettePresets() {
  const container = document.querySelector("#palettePresetGrid");
  if (!container) return;
  container.innerHTML = "";
  
  const currentNiche = storeConfig.themePreset;
  const palettes = presetPalettes[currentNiche] || presetPalettes.casa;
  
  palettes.forEach((palette, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "palette-preset";
    btn.innerHTML = `
      <span class="dot" style="background:${palette.accent}; border: 1px solid rgba(0,0,0,0.1)"></span>
      <span>${palette.name}</span>
    `;
    
    btn.addEventListener("click", () => {
      storeConfig.colors.accent = palette.accent;
      storeConfig.colors.bg = palette.bg;
      storeConfig.colors.btn = palette.btn;
      storeConfig.colors.text = palette.text;
      
      document.querySelector("#colorAccentInput").value = palette.accent;
      document.querySelector("#colorBgInput").value = palette.bg;
      document.querySelector("#colorBtnInput").value = palette.btn;
      document.querySelector("#colorTextInput").value = palette.text;
      
      updatePreview();
      showToast(`Paleta aplicada: ${palette.name}`);
    });
    container.appendChild(btn);
  });
}

// Links
function renderLinksManager() {
  const container = document.querySelector("#menuLinksContainer");
  if (!container) return;
  container.innerHTML = "";
  
  storeConfig.menuLinks.forEach((link, index) => {
    const item = document.createElement("div");
    item.className = "manager-item";
    item.innerHTML = `
      <div class="item-info">
        <strong>${link.label}</strong>
        <span>${link.url}</span>
      </div>
      <div class="item-actions">
        <button type="button" class="action-mini-btn remove" data-index="${index}">×</button>
      </div>
    `;
    item.querySelector(".remove").addEventListener("click", () => {
      storeConfig.menuLinks.splice(index, 1);
      renderLinksManager();
      updatePreview();
    });
    container.appendChild(item);
  });
}

function renderMediaLibrary() {
  const container = document.querySelector("#mediaLibraryContainer");
  if (!container) return;
  container.innerHTML = "";

  if (mediaLibrary.length === 0) {
    container.innerHTML = `<p class="empty-state" style="padding:12px; font-size:11px;">Biblioteca vazia.</p>`;
    return;
  }

  mediaLibrary.forEach((media, index) => {
    const card = document.createElement("div");
    card.className = "media-card";
    
    let thumbHtml = "";
    if (["clay", "leaf", "blue"].includes(media.url)) {
      thumbHtml = `<div class="media-thumb-art ${media.url}" style="display:flex; align-items:center; justify-content:center; color:#fff; background:#1e293b;">
        <svg style="width:24px; height:24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
      </div>`;
    } else {
      thumbHtml = `<img src="${media.url}" class="media-thumb-img" alt="${media.name}" />`;
    }
    
    card.innerHTML = `
      ${thumbHtml}
      <div class="media-details">
        <strong title="${media.name}">${media.name}</strong>
        <div class="media-actions-row">
          <button type="button" class="media-action-link use-banner" data-index="${index}">Banner</button>
          <button type="button" class="media-action-link use-logo" data-index="${index}">Logo</button>
          <button type="button" class="media-action-link delete" data-index="${index}">×</button>
        </div>
      </div>
    `;
    
    card.querySelector(".use-banner").addEventListener("click", () => {
      storeConfig.homepage.bannerImgUrl = ["clay", "leaf", "blue"].includes(media.url) ? "" : media.url;
      const bannerPreview = document.querySelector("#bannerPreviewWrapper");
      const bannerImg = document.querySelector("#bannerPreviewImg");
      if (bannerPreview && bannerImg) {
        if (!storeConfig.homepage.bannerImgUrl) {
          bannerImg.src = "";
          bannerPreview.style.display = "none";
        } else {
          bannerImg.src = media.url;
          bannerPreview.style.display = "block";
        }
      }
      updatePreview();
      showToast("Fundo do banner atualizado!");
    });
    
    card.querySelector(".use-logo").addEventListener("click", () => {
      storeConfig.brand.logoUrl = ["clay", "leaf", "blue"].includes(media.url) ? "" : media.url;
      const logoPreview = document.querySelector("#logoPreviewWrapper");
      const logoImg = document.querySelector("#logoPreviewImg");
      if (logoPreview && logoImg) {
        if (!storeConfig.brand.logoUrl) {
          logoImg.src = "";
          logoPreview.style.display = "none";
        } else {
          logoImg.src = media.url;
          logoPreview.style.display = "block";
        }
      }
      updatePreview();
      showToast("Logo aplicada no cabeçalho!");
    });

    card.querySelector(".delete").addEventListener("click", () => {
      mediaLibrary.splice(index, 1);
      renderMediaLibrary();
      showToast("Mídia excluída.");
    });

    container.appendChild(card);
  });
}

// ==========================================================================
// 8. Eventos e Inputs do Sidebar
// ==========================================================================
function bindInputs() {
  // A. Modelos / Nichos
  const applyModelBtn = document.querySelector("#applyModelBtn");
  if (applyModelBtn) {
    applyModelBtn.addEventListener("click", () => {
      const selected = document.querySelector("#modelSelectPreset").value;
      const preset = nichePresets[selected];
      
      if (preset && confirm("Tem certeza que deseja aplicar o modelo selecionado? Suas configurações de estilo atuais serão sobrescritas.")) {
        storeConfig.themePreset = preset.stylePreset;
        storeConfig.typography.borders = preset.borders;
        storeConfig.typography.spacing = preset.spacing;
        
        storeConfig.colors.accent = preset.colorAccent;
        storeConfig.colors.bg = preset.colorBg;
        storeConfig.colors.btn = preset.colorBtn;
        storeConfig.colors.text = preset.colorText;
        storeConfig.colors.secondary = preset.colorSecondary;
        storeConfig.colors.badges = preset.colorBadges;
        storeConfig.colors.sale = preset.colorSale;
        storeConfig.colors.darkMode = preset.darkMode;

        storeConfig.typography.fontTitle = preset.fontTitle;
        storeConfig.typography.fontBase = preset.fontBase;
        storeConfig.typography.fontSize = preset.fontSize;
        storeConfig.typography.fontTitleWeight = preset.fontTitleWeight;
        storeConfig.typography.fontPreset = preset.fontPreset;

        storeConfig.layout.density = preset.density;
        storeConfig.layout.gridColumns = preset.gridColumns;
        storeConfig.layout.menuType = preset.menuType;
        storeConfig.layout.btnStyle = preset.btnStyle;
        storeConfig.layout.cardStyle = preset.cardStyle;
        storeConfig.layout.stickyHeader = preset.stickyHeader;
        storeConfig.layout.headerLayout = preset.headerLayout;

        storeConfig.homepage.bannerTitle = preset.bannerTitle;
        storeConfig.homepage.bannerSubtitle = preset.bannerSubtitle;
        storeConfig.homepage.bannerBtnText = preset.bannerBtnText;
        storeConfig.homepage.bannerSecBtnText = preset.bannerSecBtnText;
        storeConfig.homepage.bannerAlign = preset.bannerAlign;
        storeConfig.homepage.showPromoBadge = preset.showPromoBadge;
        storeConfig.homepage.testimonialAuthor = preset.testimonialAuthor;
        storeConfig.homepage.testimonialText = preset.testimonialText;

        // Limpa carrinho ao mudar estilo
        cartItems = [];

        syncInputsFromConfig();
        updatePalettePresets();
        updatePreview();
        showToast("Modelo de nicho aplicado com sucesso!");
      }
    });
  }

  // B. Marca
  document.querySelector("#storeNameInput").addEventListener("input", (e) => {
    storeConfig.brand.name = e.target.value;
    updatePreview();
  });
  document.querySelector("#storeSloganInput").addEventListener("input", (e) => {
    storeConfig.brand.slogan = e.target.value;
    updatePreview();
  });

  const logoUploadInput = document.querySelector("#logoUploadInput");
  const logoPreviewWrapper = document.querySelector("#logoPreviewWrapper");
  const logoPreviewImg = document.querySelector("#logoPreviewImg");
  logoUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      storeConfig.brand.logoUrl = url;
      logoPreviewImg.src = url;
      logoPreviewWrapper.style.display = "block";
      mediaLibrary.push({ id: "logo-" + Date.now(), url: url, name: file.name });
      renderMediaLibrary();
      updatePreview();
    }
  });

  document.querySelector("#removeLogoBtn").addEventListener("click", () => {
    storeConfig.brand.logoUrl = "";
    logoPreviewWrapper.style.display = "none";
    logoUploadInput.value = "";
    updatePreview();
  });

  const faviconUploadInput = document.querySelector("#faviconUploadInput");
  const faviconPreviewWrapper = document.querySelector("#faviconPreviewWrapper");
  const faviconPreviewImg = document.querySelector("#faviconPreviewImg");
  faviconUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      storeConfig.brand.faviconUrl = url;
      faviconPreviewImg.src = url;
      faviconPreviewWrapper.style.display = "block";
    }
  });

  document.querySelector("#removeFaviconBtn").addEventListener("click", () => {
    storeConfig.brand.faviconUrl = "";
    faviconPreviewWrapper.style.display = "none";
    faviconUploadInput.value = "";
  });

  document.querySelector("#brandToneSelect").addEventListener("change", (e) => {
    storeConfig.brand.tone = e.target.value;
    updatePreview();
  });

  // C. Layout
  document.querySelector("#headerLayoutSelect").addEventListener("change", (e) => {
    storeConfig.layout.headerLayout = e.target.value;
    updatePreview();
  });
  document.querySelector("#stickyHeaderToggle").addEventListener("change", (e) => {
    storeConfig.layout.stickyHeader = e.target.checked;
    updatePreview();
  });
  document.querySelector("#navigationMenuType").addEventListener("change", (e) => {
    storeConfig.layout.menuType = e.target.value;
    updatePreview();
  });
  document.querySelector("#gridColumnsSelect").addEventListener("change", (e) => {
    storeConfig.layout.gridColumns = e.target.value;
    updatePreview();
  });
  document.querySelector("#layoutDensitySelect").addEventListener("change", (e) => {
    storeConfig.layout.density = e.target.value;
    updatePreview();
  });
  document.querySelector("#btnStyleSelect").addEventListener("change", (e) => {
    storeConfig.layout.btnStyle = e.target.value;
    updatePreview();
  });
  document.querySelector("#cardStyleSelect").addEventListener("change", (e) => {
    storeConfig.layout.cardStyle = e.target.value;
    updatePreview();
  });
  
  // D. Cores
  document.querySelector("#colorAccentInput").addEventListener("input", (e) => {
    storeConfig.colors.accent = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorBgInput").addEventListener("input", (e) => {
    storeConfig.colors.bg = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorBtnInput").addEventListener("input", (e) => {
    storeConfig.colors.btn = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorTextInput").addEventListener("input", (e) => {
    storeConfig.colors.text = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorSecondaryInput").addEventListener("input", (e) => {
    storeConfig.colors.secondary = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorBadgesInput").addEventListener("input", (e) => {
    storeConfig.colors.badges = e.target.value;
    updatePreview();
  });
  document.querySelector("#colorSaleInput").addEventListener("input", (e) => {
    storeConfig.colors.sale = e.target.value;
    updatePreview();
  });
  document.querySelector("#darkModeToggle").addEventListener("change", (e) => {
    storeConfig.colors.darkMode = e.target.checked;
    updatePreview();
  });

  // E. Tipografia
  document.querySelector("#fontStyleSelect").addEventListener("change", (e) => {
    storeConfig.typography.fontTitle = e.target.value;
    updatePreview();
  });
  document.querySelector("#fontBaseSelect").addEventListener("change", (e) => {
    storeConfig.typography.fontBase = e.target.value;
    updatePreview();
  });
  
  const fontSizeRange = document.querySelector("#fontSizeRange");
  const fontSizeVal = document.querySelector("#fontSizeVal");
  fontSizeRange.addEventListener("input", (e) => {
    storeConfig.typography.fontSize = e.target.value;
    fontSizeVal.textContent = e.target.value;
    updatePreview();
  });

  document.querySelector("#fontTitleWeightSelect").addEventListener("change", (e) => {
    storeConfig.typography.fontTitleWeight = e.target.value;
    updatePreview();
  });
  document.querySelector("#fontStylePreset").addEventListener("change", (e) => {
    storeConfig.typography.fontPreset = e.target.value;
    updatePreview();
  });

  // Espaçamento e borda adicionais na aba Fontes
  document.querySelector("#storeBordersRange").addEventListener("input", (e) => {
    storeConfig.typography.borders = e.target.value;
    document.querySelector("#storeBordersVal").textContent = e.target.value;
    updatePreview();
  });
  document.querySelector("#storeSpacingRange").addEventListener("input", (e) => {
    storeConfig.typography.spacing = e.target.value;
    document.querySelector("#storeSpacingVal").textContent = e.target.value;
    updatePreview();
  });

  // F. Homepage
  document.querySelector("#bannerTitleInput").addEventListener("input", (e) => {
    storeConfig.homepage.bannerTitle = e.target.value;
    updatePreview();
  });
  document.querySelector("#bannerSubtitleInput").addEventListener("input", (e) => {
    storeConfig.homepage.bannerSubtitle = e.target.value;
    updatePreview();
  });
  document.querySelector("#bannerBtnTextInput").addEventListener("input", (e) => {
    storeConfig.homepage.bannerBtnText = e.target.value;
    updatePreview();
  });
  document.querySelector("#bannerSecBtnTextInput").addEventListener("input", (e) => {
    storeConfig.homepage.bannerSecBtnText = e.target.value;
    updatePreview();
  });
  document.querySelector("#bannerAlignSelect").addEventListener("change", (e) => {
    storeConfig.homepage.bannerAlign = e.target.value;
    updatePreview();
  });
  document.querySelector("#togglePromoBadgeInput").addEventListener("change", (e) => {
    storeConfig.homepage.showPromoBadge = e.target.checked;
    updatePreview();
  });
  document.querySelector("#homeTestimonialAuthor").addEventListener("input", (e) => {
    storeConfig.homepage.testimonialAuthor = e.target.value;
    updatePreview();
  });
  document.querySelector("#homeTestimonialText").addEventListener("input", (e) => {
    storeConfig.homepage.testimonialText = e.target.value;
    updatePreview();
  });
  document.querySelector("#homeInstagramToggle").addEventListener("change", (e) => {
    storeConfig.homepage.showInstagramFeed = e.target.checked;
    updatePreview();
  });

  const bannerImageInput = document.querySelector("#bannerImageInput");
  const bannerPreviewWrapper = document.querySelector("#bannerPreviewWrapper");
  const bannerPreviewImg = document.querySelector("#bannerPreviewImg");
  bannerImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      storeConfig.homepage.bannerImgUrl = url;
      bannerPreviewImg.src = url;
      bannerPreviewWrapper.style.display = "block";
      mediaLibrary.push({ id: "banner-" + Date.now(), url: url, name: file.name });
      renderMediaLibrary();
      updatePreview();
    }
  });

  document.querySelector("#removeBannerImgBtn").addEventListener("click", () => {
    storeConfig.homepage.bannerImgUrl = "";
    bannerPreviewWrapper.style.display = "none";
    bannerImageInput.value = "";
    updatePreview();
  });

  // G. Produtos (Cadastrar)
  document.querySelector("#addProductBtn").addEventListener("click", () => {
    const name = document.querySelector("#newProdName").value.trim();
    const price = document.querySelector("#newProdPrice").value.trim();
    const art = document.querySelector("#newProdArt").value;
    
    if (!name || !price) {
      showToast("Preencha nome e preço.");
      return;
    }
    
    storeConfig.products.push({
      name, price, promoPrice: "", stock: 10, rating: 5, installments: 3, isNew: true, freeShipping: false, art, visible: true, category: "Geral", showStock: true
    });
    
    document.querySelector("#newProdName").value = "";
    document.querySelector("#newProdPrice").value = "";
    renderProductsManager();
    updatePreview();
    showToast("Produto adicionado!");
  });

  // H. Página de Produto
  document.querySelector("#productZoomToggle").addEventListener("change", (e) => {
    storeConfig.productPage.zoomActive = e.target.checked;
    updatePreview();
  });
  document.querySelector("#productSpecsToggle").addEventListener("change", (e) => {
    storeConfig.productPage.specsActive = e.target.checked;
    updatePreview();
  });
  document.querySelector("#productSizeGuideToggle").addEventListener("change", (e) => {
    storeConfig.productPage.sizeGuideActive = e.target.checked;
    updatePreview();
  });
  
  const productRelatedCount = document.querySelector("#productRelatedCount");
  const productRelatedCountVal = document.querySelector("#productRelatedCountVal");
  productRelatedCount.addEventListener("input", (e) => {
    storeConfig.productPage.relatedCount = e.target.value;
    productRelatedCountVal.textContent = e.target.value;
    updatePreview();
  });
  
  document.querySelector("#productShippingInfoInput").addEventListener("input", (e) => {
    storeConfig.productPage.shippingInfo = e.target.value;
    updatePreview();
  });

  // I. Carrinho
  document.querySelector("#cartTypeSelect").addEventListener("change", (e) => {
    storeConfig.cart.cartType = e.target.value;
    updatePreview();
  });
  document.querySelector("#cartRecommendationsToggle").addEventListener("change", (e) => {
    storeConfig.cart.recommendationsActive = e.target.checked;
    updatePreview();
  });
  document.querySelector("#cartShippingCalcToggle").addEventListener("change", (e) => {
    storeConfig.cart.shippingCalcActive = e.target.checked;
    updatePreview();
  });
  document.querySelector("#cartCouponInput").addEventListener("input", (e) => {
    storeConfig.cart.defaultCoupon = e.target.value;
    updatePreview();
  });

  // J. Marketing
  document.querySelector("#togglePromoBarInput").addEventListener("change", (e) => {
    storeConfig.marketing.showPromoBar = e.target.checked;
    updatePreview();
  });
  document.querySelector("#promoBarTextInput").addEventListener("input", (e) => {
    storeConfig.marketing.promoBarText = e.target.value;
    updatePreview();
  });
  document.querySelector("#promoBarBgColorInput").addEventListener("input", (e) => {
    storeConfig.marketing.promoBarBg = e.target.value;
    updatePreview();
  });
  document.querySelector("#marketingNewsPopupToggle").addEventListener("change", (e) => {
    storeConfig.marketing.showNewsPopup = e.target.checked;
  });
  document.querySelector("#marketingCountdownToggle").addEventListener("change", (e) => {
    storeConfig.marketing.showCountdown = e.target.checked;
    updatePreview();
  });
  document.querySelector("#marketingCountdownDuration").addEventListener("change", (e) => {
    storeConfig.marketing.countdownDuration = e.target.value;
    currentRemainingTime = parseInt(e.target.value) * 3600;
    startCountdownClock();
  });
  document.querySelector("#marketingTrustBadgesToggle").addEventListener("change", (e) => {
    storeConfig.marketing.showTrustBadges = e.target.checked;
    updatePreview();
  });

  // K. Rodapé
  document.querySelector("#footerTextInput").addEventListener("input", (e) => {
    storeConfig.footer.text = e.target.value;
    updatePreview();
  });
  document.querySelector("#toggleNewsletterInput").addEventListener("change", (e) => {
    storeConfig.footer.showNewsletter = e.target.checked;
    updatePreview();
  });
  document.querySelector("#socialInstaInput").addEventListener("input", (e) => {
    storeConfig.footer.socialInsta = e.target.value;
    updatePreview();
  });
  document.querySelector("#socialFbInput").addEventListener("input", (e) => {
    storeConfig.footer.socialFb = e.target.value;
    updatePreview();
  });
  document.querySelector("#footerAddressInput").addEventListener("input", (e) => {
    storeConfig.footer.address = e.target.value;
    updatePreview();
  });
  
  // Checkout ticks
  document.querySelector("#paymentVisaCheckbox").addEventListener("change", (e) => {
    storeConfig.footer.paymentVisa = e.target.checked;
    updatePreview();
  });
  document.querySelector("#paymentMasterCheckbox").addEventListener("change", (e) => {
    storeConfig.footer.paymentMaster = e.target.checked;
    updatePreview();
  });
  document.querySelector("#paymentPixCheckbox").addEventListener("change", (e) => {
    storeConfig.footer.paymentPix = e.target.checked;
    updatePreview();
  });
  document.querySelector("#paymentBoletoCheckbox").addEventListener("change", (e) => {
    storeConfig.footer.paymentBoleto = e.target.checked;
    updatePreview();
  });

  // Menu navigation link add
  document.querySelector("#addMenuItemBtn").addEventListener("click", () => {
    renderLinksManager();
    updatePreview();
  });

  // Páginas Switches
  document.querySelectorAll(".page-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      changeSimulatedPage(btn.dataset.page);
    });
  });

  // Mídias
  document.querySelector("#mediaUploadInput").addEventListener("change", (e) => {
    const files = e.target.files;
    let added = 0;
    for(let i=0; i<files.length; i++) {
      const file = files[i];
      if(file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        mediaLibrary.push({ id: "media-" + Date.now() + "-" + i, url, name: file.name });
        added++;
      }
    }
    if (added > 0) {
      renderMediaLibrary();
      showToast(`${added} mídias carregadas!`);
    }
  });

  // Express checkout
  document.querySelector("#expressCheckoutToggle").addEventListener("change", (e) => {
    storeConfig.expressCheckout = e.target.checked;
    updatePreview();
  });

  // i18n Language Select
  const langSelect = document.querySelector("#i18nLanguageSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      storeConfig.language = e.target.value;
      updatePreview();
      showToast(storeConfig.language === "en" ? "Language updated to English!" : "Idioma alterado para Português!");
    });
  }

  // Multi-vendor toggle
  const mvToggle = document.querySelector("#multiVendorToggle");
  if (mvToggle) {
    mvToggle.addEventListener("change", (e) => {
      if (!storeConfig.multiVendor) {
        storeConfig.multiVendor = { enabled: false, vendors: [] };
      }
      storeConfig.multiVendor.enabled = e.target.checked;
      updatePreview();
    });
  }

  // Add Vendor button
  const addVendorBtn = document.querySelector("#addVendorBtn");
  const newVendorName = document.querySelector("#newVendorNameInput");
  if (addVendorBtn && newVendorName) {
    addVendorBtn.addEventListener("click", () => {
      const name = newVendorName.value.trim();
      if (name) {
        addNewVendor(name);
        newVendorName.value = "";
        renderVendorsManager("vendorsManagerList");
        updatePreview();
      }
    });
  }

  // Checkout payment methods checkboxes
  const chAllowCard = document.querySelector("#checkoutAllowCard");
  const chAllowPix = document.querySelector("#checkoutAllowPix");
  const chAllowBoleto = document.querySelector("#checkoutAllowBoleto");
  
  const handlePaymentMethodToggle = () => {
    if (!storeConfig.checkout) storeConfig.checkout = { paymentMethods: ["card", "pix", "boleto"] };
    const methods = [];
    if (chAllowCard && chAllowCard.checked) methods.push("card");
    if (chAllowPix && chAllowPix.checked) methods.push("pix");
    if (chAllowBoleto && chAllowBoleto.checked) methods.push("boleto");
    storeConfig.checkout.paymentMethods = methods;
  };

  if (chAllowCard) chAllowCard.addEventListener("change", handlePaymentMethodToggle);
  if (chAllowPix) chAllowPix.addEventListener("change", handlePaymentMethodToggle);
  if (chAllowBoleto) chAllowBoleto.addEventListener("change", handlePaymentMethodToggle);
}

// ==========================================================================
// 9. Sincronização de Inputs a partir do Config
// ==========================================================================
function syncInputsFromConfig() {
  document.querySelector("#modelSelectPreset").value = storeConfig.themePreset;
  
  // Marca
  document.querySelector("#storeNameInput").value = storeConfig.brand.name;
  document.querySelector("#storeSloganInput").value = storeConfig.brand.slogan;
  document.querySelector("#brandToneSelect").value = storeConfig.brand.tone;

  // Layout
  document.querySelector("#headerLayoutSelect").value = storeConfig.layout.headerLayout;
  document.querySelector("#stickyHeaderToggle").checked = !!storeConfig.layout.stickyHeader;
  document.querySelector("#navigationMenuType").value = storeConfig.layout.menuType;
  document.querySelector("#gridColumnsSelect").value = storeConfig.layout.gridColumns;
  document.querySelector("#layoutDensitySelect").value = storeConfig.layout.density;
  document.querySelector("#btnStyleSelect").value = storeConfig.layout.btnStyle;
  document.querySelector("#cardStyleSelect").value = storeConfig.layout.cardStyle;

  // Cores
  document.querySelector("#colorAccentInput").value = storeConfig.colors.accent;
  document.querySelector("#colorBgInput").value = storeConfig.colors.bg;
  document.querySelector("#colorBtnInput").value = storeConfig.colors.btn;
  document.querySelector("#colorTextInput").value = storeConfig.colors.text;
  document.querySelector("#colorSecondaryInput").value = storeConfig.colors.secondary;
  document.querySelector("#colorBadgesInput").value = storeConfig.colors.badges;
  document.querySelector("#colorSaleInput").value = storeConfig.colors.sale;
  document.querySelector("#darkModeToggle").checked = !!storeConfig.colors.darkMode;

  // Tipografia
  document.querySelector("#fontStyleSelect").value = storeConfig.typography.fontTitle;
  document.querySelector("#fontBaseSelect").value = storeConfig.typography.fontBase;
  document.querySelector("#fontSizeRange").value = storeConfig.typography.fontSize;
  document.querySelector("#fontSizeVal").textContent = storeConfig.typography.fontSize;
  document.querySelector("#fontTitleWeightSelect").value = storeConfig.typography.fontTitleWeight;
  document.querySelector("#fontStylePreset").value = storeConfig.typography.fontPreset;
  
  // Spacings e borders
  document.querySelector("#storeBordersRange").value = storeConfig.typography.borders || 8;
  document.querySelector("#storeBordersVal").textContent = storeConfig.typography.borders || 8;
  document.querySelector("#storeSpacingRange").value = storeConfig.typography.spacing || 24;
  document.querySelector("#storeSpacingVal").textContent = storeConfig.typography.spacing || 24;

  // Homepage
  document.querySelector("#bannerTitleInput").value = storeConfig.homepage.bannerTitle;
  document.querySelector("#bannerSubtitleInput").value = storeConfig.homepage.bannerSubtitle;
  document.querySelector("#bannerBtnTextInput").value = storeConfig.homepage.bannerBtnText;
  document.querySelector("#bannerSecBtnTextInput").value = storeConfig.homepage.bannerSecBtnText;
  document.querySelector("#bannerAlignSelect").value = storeConfig.homepage.bannerAlign;
  document.querySelector("#togglePromoBadgeInput").checked = !!storeConfig.homepage.showPromoBadge;
  document.querySelector("#homeTestimonialAuthor").value = storeConfig.homepage.testimonialAuthor;
  document.querySelector("#homeTestimonialText").value = storeConfig.homepage.testimonialText;
  document.querySelector("#homeInstagramToggle").checked = !!storeConfig.homepage.showInstagramFeed;

  // Página de Produto
  document.querySelector("#productZoomToggle").checked = !!storeConfig.productPage.zoomActive;
  document.querySelector("#productSpecsToggle").checked = !!storeConfig.productPage.specsActive;
  document.querySelector("#productSizeGuideToggle").checked = !!storeConfig.productPage.sizeGuideActive;
  document.querySelector("#productRelatedCount").value = storeConfig.productPage.relatedCount;
  document.querySelector("#productRelatedCountVal").textContent = storeConfig.productPage.relatedCount;
  document.querySelector("#productShippingInfoInput").value = storeConfig.productPage.shippingInfo;

  // Carrinho
  document.querySelector("#cartTypeSelect").value = storeConfig.cart.cartType;
  document.querySelector("#cartRecommendationsToggle").checked = !!storeConfig.cart.recommendationsActive;
  document.querySelector("#cartShippingCalcToggle").checked = !!storeConfig.cart.shippingCalcActive;
  document.querySelector("#cartCouponInput").value = storeConfig.cart.defaultCoupon;

  // Marketing
  document.querySelector("#togglePromoBarInput").checked = !!storeConfig.marketing.showPromoBar;
  document.querySelector("#promoBarTextInput").value = storeConfig.marketing.promoBarText;
  document.querySelector("#promoBarBgColorInput").value = storeConfig.marketing.promoBarBg;
  document.querySelector("#marketingNewsPopupToggle").checked = !!storeConfig.marketing.showNewsPopup;
  document.querySelector("#marketingCountdownToggle").checked = !!storeConfig.marketing.showCountdown;
  document.querySelector("#marketingCountdownDuration").value = storeConfig.marketing.countdownDuration;
  document.querySelector("#marketingTrustBadgesToggle").checked = !!storeConfig.marketing.showTrustBadges;

  // Rodapé
  document.querySelector("#footerTextInput").value = storeConfig.footer.text;
  document.querySelector("#toggleNewsletterInput").checked = !!storeConfig.footer.showNewsletter;
  document.querySelector("#socialInstaInput").value = storeConfig.footer.socialInsta;
  document.querySelector("#socialFbInput").value = storeConfig.footer.socialFb;
  document.querySelector("#footerAddressInput").value = storeConfig.footer.address;
  
  document.querySelector("#paymentVisaCheckbox").checked = !!storeConfig.footer.paymentVisa;
  document.querySelector("#paymentMasterCheckbox").checked = !!storeConfig.footer.paymentMaster;
  document.querySelector("#paymentPixCheckbox").checked = !!storeConfig.footer.paymentPix;
  document.querySelector("#paymentBoletoCheckbox").checked = !!storeConfig.footer.paymentBoleto;

  // Previews de Imagem
  const logoPreview = document.querySelector("#logoPreviewWrapper");
  const logoImg = document.querySelector("#logoPreviewImg");
  if (logoPreview && logoImg) {
    if (storeConfig.brand.logoUrl) {
      logoImg.src = storeConfig.brand.logoUrl;
      logoPreview.style.display = "block";
    } else {
      logoPreview.style.display = "none";
    }
  }

  const bannerPreview = document.querySelector("#bannerPreviewWrapper");
  const bannerImg = document.querySelector("#bannerPreviewImg");
  if (bannerPreview && bannerImg) {
    if (storeConfig.homepage.bannerImgUrl) {
      bannerImg.src = storeConfig.homepage.bannerImgUrl;
      bannerPreview.style.display = "block";
    } else {
      bannerPreview.style.display = "none";
    }
  }
  
  const elPublishStatus = document.querySelector("#storePublishStatus");
  if (elPublishStatus) elPublishStatus.value = storeConfig.publishStatus || "draft";

  const elCurrency = document.querySelector("#currencySelect");
  if (elCurrency) elCurrency.value = storeConfig.currency || "BRL";

  const elCountry = document.querySelector("#countrySelect");
  if (elCountry) elCountry.value = storeConfig.country || "BR";

  const elLanguage = document.querySelector("#languageSelect");
  if (elLanguage) elLanguage.value = storeConfig.language || "PT";

  const elExpressCheckout = document.querySelector("#expressCheckoutToggle");
  if (elExpressCheckout) elExpressCheckout.checked = !!storeConfig.expressCheckout;

  // Sync new modules
  const langSelect = document.querySelector("#i18nLanguageSelect");
  if (langSelect) langSelect.value = storeConfig.language || "pt";

  const mvToggle = document.querySelector("#multiVendorToggle");
  if (mvToggle) mvToggle.checked = !!(storeConfig.multiVendor && storeConfig.multiVendor.enabled);

  if (storeConfig.checkout && storeConfig.checkout.paymentMethods) {
    const methods = storeConfig.checkout.paymentMethods;
    const chAllowCard = document.querySelector("#checkoutAllowCard");
    const chAllowPix = document.querySelector("#checkoutAllowPix");
    const chAllowBoleto = document.querySelector("#checkoutAllowBoleto");
    if (chAllowCard) chAllowCard.checked = methods.includes("card");
    if (chAllowPix) chAllowPix.checked = methods.includes("pix");
    if (chAllowBoleto) chAllowBoleto.checked = methods.includes("boleto");
  }

  // Render sub-lists
  if (typeof renderTemplateGrid === "function") {
    renderTemplateGrid("templateGridContainer");
  }
  if (typeof renderVendorsManager === "function") {
    renderVendorsManager("vendorsManagerList");
  }
}

// ==========================================================================
// 10. Persistência: Rascunhos e Publicações
// ==========================================================================
const saveDraftBtn = document.querySelector("#saveDraftBtn");
const publishThemeBtn = document.querySelector("#publishThemeBtn");

if (saveDraftBtn) {
  saveDraftBtn.addEventListener("click", () => {
    localStorage.setItem("nexa_theme_draft", JSON.stringify(storeConfig));
    showToast("Rascunho de configurações do SaaS salvo localmente.");
  });
}

if (publishThemeBtn) {
  publishThemeBtn.addEventListener("click", () => {
    setButtonLoading(publishThemeBtn, true);
    
    setTimeout(() => {
      localStorage.setItem("nexa_theme_published", JSON.stringify(storeConfig));
      showToast("Configuração da loja online publicada!");
      
      setTimeout(() => {
        setButtonLoading(publishThemeBtn, false);
        window.location.href = "./index.html?view=storefront";
      }, 800);
    }, 1500);
  });
}

function setButtonLoading(button, isLoading) {
  const btnText = button.querySelector(".btn-text");
  const spinner = button.querySelector(".spinner");
  
  if (isLoading) {
    button.disabled = true;
    button.classList.add("loading");
    if (btnText) btnText.style.visibility = "hidden";
    if (spinner) spinner.style.display = "block";
  } else {
    button.disabled = false;
    button.classList.remove("loading");
    if (btnText) btnText.style.visibility = "visible";
    if (spinner) spinner.style.display = "none";
  }
}

// ==========================================================================
// 11. Inicialização do Editor
// ==========================================================================
function initEditor() {
  const savedDraft = localStorage.getItem("nexa_theme_draft");
  const savedPublish = localStorage.getItem("nexa_theme_published");
  
  if (savedDraft) {
    try {
      storeConfig = JSON.parse(savedDraft);
    } catch (e) {
      storeConfig = JSON.parse(JSON.stringify(defaultStoreConfig));
    }
  } else if (savedPublish) {
    try {
      storeConfig = JSON.parse(savedPublish);
    } catch (e) {
      storeConfig = JSON.parse(JSON.stringify(defaultStoreConfig));
    }
  } else {
    storeConfig = JSON.parse(JSON.stringify(defaultStoreConfig));
  }

  // Preenche metadados novos se necessário
  if (!storeConfig.menuLinks) {
    storeConfig.menuLinks = [
      { label: "Novidades", url: "#" },
      { label: "Casa", url: "#" },
      { label: "Viagem", url: "#" }
    ];
  }
  if (!storeConfig.themePreset) storeConfig.themePreset = "casa";
  if (!storeConfig.activePage) storeConfig.activePage = "home";
  if (!storeConfig.language) storeConfig.language = "pt";
  if (!storeConfig.activeTemplate) storeConfig.activeTemplate = "anon";
  if (!storeConfig.multiVendor) {
    storeConfig.multiVendor = {
      enabled: false,
      vendors: typeof defaultVendors !== "undefined" ? JSON.parse(JSON.stringify(defaultVendors)) : []
    };
  }
  if (!storeConfig.wishlist) storeConfig.wishlist = [];
  if (!storeConfig.compareList) storeConfig.compareList = [];
  if (!storeConfig.checkout) storeConfig.checkout = { paymentMethods: ["card", "pix", "boleto"] };

  bindInputs();
  syncInputsFromConfig();
  updatePalettePresets();
  
  renderLinksManager();
  renderProductsManager();
  renderMediaLibrary();
  
  // Renderiza vitrine
  updatePreview();
}

initEditor();
