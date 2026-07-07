/* ==========================================================================
   Nexa Commerce - Módulo de Checkout Multi-Step
   Referência: hasan-py/Hayroo (MERN checkout flow)
   ========================================================================== */

// ==========================================================================
// 1. Estado do Checkout
// ==========================================================================
let checkoutState = {
  currentStep: 1,
  totalSteps: 3,
  address: {
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    fullName: "",
    phone: ""
  },
  payment: {
    method: "card", // card | pix | boleto
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: ""
  },
  orderNumber: "",
  completed: false
};

// ==========================================================================
// 2. Renderizar Checkout Multi-Step
// ==========================================================================
function renderCheckoutPage(container) {
  if (!container) return;
  container.innerHTML = "";

  if (typeof cartItems !== "undefined" && cartItems.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:48px 24px;">
        <h4 style="font-size:18px; margin-bottom:8px;">${i18n("emptyCart", "Seu carrinho está vazio")}</h4>
        <p style="font-size:13px; color:var(--shop-text-muted); margin-bottom:16px;">${i18n("addProducts", "Adicione produtos para continuar.")}</p>
        <button type="button" class="checkout-btn" style="width:auto; display:inline-flex; padding:0 24px;" id="checkoutReturnBtn">${i18n("viewProducts", "Ver Produtos")}</button>
      </div>
    `;
    container.querySelector("#checkoutReturnBtn").addEventListener("click", () => {
      if (typeof changeSimulatedPage === "function") changeSimulatedPage("catalog");
    });
    return;
  }

  // Checkout concluído
  if (checkoutState.completed) {
    renderOrderConfirmation(container);
    return;
  }

  const checkout = document.createElement("div");
  checkout.className = "checkout-layout";

  // Progress Bar
  const progressHtml = createProgressBar();

  // Step Content
  let stepContent = "";
  if (checkoutState.currentStep === 1) {
    stepContent = createAddressStep();
  } else if (checkoutState.currentStep === 2) {
    stepContent = createPaymentStep();
  } else if (checkoutState.currentStep === 3) {
    stepContent = createConfirmationStep();
  }

  // Order Summary Sidebar
  const summaryHtml = createOrderSummary();

  checkout.innerHTML = `
    <div class="checkout-main">
      ${progressHtml}
      <div class="checkout-step-content">${stepContent}</div>
      <div class="checkout-nav-buttons">
        ${checkoutState.currentStep > 1 ? `<button type="button" class="checkout-back-btn" id="checkoutBackBtn">${i18n("back", "Voltar")}</button>` : "<div></div>"}
        ${checkoutState.currentStep < 3 
          ? `<button type="button" class="checkout-next-btn" id="checkoutNextBtn">${i18n("continue", "Continuar")}</button>`
          : `<button type="button" class="checkout-confirm-btn" id="checkoutConfirmBtn">${i18n("confirmOrder", "Confirmar Pedido")}</button>`
        }
      </div>
    </div>
    <div class="checkout-summary">${summaryHtml}</div>
  `;

  container.appendChild(checkout);

  // Binds
  const backBtn = checkout.querySelector("#checkoutBackBtn");
  const nextBtn = checkout.querySelector("#checkoutNextBtn");
  const confirmBtn = checkout.querySelector("#checkoutConfirmBtn");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      checkoutState.currentStep--;
      renderCheckoutPage(container);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (validateCurrentStep(checkout)) {
        saveStepData(checkout);
        checkoutState.currentStep++;
        renderCheckoutPage(container);
      }
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      checkoutState.orderNumber = "NX-" + Math.floor(10000 + Math.random() * 90000);
      checkoutState.completed = true;
      renderCheckoutPage(container);
    });
  }

  // Payment method toggle
  checkout.querySelectorAll(".payment-method-option").forEach(opt => {
    opt.addEventListener("click", () => {
      checkout.querySelectorAll(".payment-method-option").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      checkoutState.payment.method = opt.dataset.method;

      // Show/hide card form
      const cardForm = checkout.querySelector("#cardFormFields");
      const pixInfo = checkout.querySelector("#pixInfo");
      const boletoInfo = checkout.querySelector("#boletoInfo");
      if (cardForm) cardForm.style.display = checkoutState.payment.method === "card" ? "grid" : "none";
      if (pixInfo) pixInfo.style.display = checkoutState.payment.method === "pix" ? "block" : "none";
      if (boletoInfo) boletoInfo.style.display = checkoutState.payment.method === "boleto" ? "block" : "none";
    });
  });

  // CEP auto-fill simulation
  const cepInput = checkout.querySelector("#checkoutCep");
  if (cepInput) {
    cepInput.addEventListener("blur", () => {
      if (cepInput.value.length >= 8) {
        const streetInput = checkout.querySelector("#checkoutStreet");
        const neighborhoodInput = checkout.querySelector("#checkoutNeighborhood");
        const cityInput = checkout.querySelector("#checkoutCity");
        const stateInput = checkout.querySelector("#checkoutState");
        if (streetInput && !streetInput.value) streetInput.value = "Rua das Flores";
        if (neighborhoodInput && !neighborhoodInput.value) neighborhoodInput.value = "Centro";
        if (cityInput && !cityInput.value) cityInput.value = "São Paulo";
        if (stateInput && !stateInput.value) stateInput.value = "SP";
        if (typeof showToast === "function") showToast(i18n("cepFound", "CEP encontrado! Endereço preenchido."));
      }
    });
  }
}

// ==========================================================================
// 3. Componentes do Checkout
// ==========================================================================
function createProgressBar() {
  const steps = [
    { num: 1, label: i18n("address", "Endereço") },
    { num: 2, label: i18n("payment", "Pagamento") },
    { num: 3, label: i18n("confirmation", "Confirmação") }
  ];

  let html = '<div class="checkout-progress">';
  steps.forEach((step, idx) => {
    const state = checkoutState.currentStep > step.num ? "completed" :
                  checkoutState.currentStep === step.num ? "active" : "upcoming";
    html += `
      <div class="checkout-progress-step ${state}">
        <div class="step-circle">${state === "completed" ? "✓" : step.num}</div>
        <span class="step-label">${step.label}</span>
      </div>
      ${idx < steps.length - 1 ? '<div class="step-connector"><div class="step-connector-fill"></div></div>' : ""}
    `;
  });
  html += "</div>";
  return html;
}

function createAddressStep() {
  const a = checkoutState.address;
  return `
    <h4>${i18n("deliveryAddress", "Endereço de Entrega")}</h4>
    <div class="checkout-form-grid">
      <div class="form-field full">
        <label>${i18n("fullName", "Nome Completo")} *</label>
        <input type="text" id="checkoutFullName" value="${a.fullName}" placeholder="${i18n("enterName", "Digite seu nome completo")}" required />
      </div>
      <div class="form-field">
        <label>${i18n("phone", "Telefone")} *</label>
        <input type="tel" id="checkoutPhone" value="${a.phone}" placeholder="(11) 99999-0000" required />
      </div>
      <div class="form-field">
        <label>CEP *</label>
        <input type="text" id="checkoutCep" value="${a.cep}" placeholder="01001-000" maxlength="9" required />
      </div>
      <div class="form-field full">
        <label>${i18n("street", "Rua")} *</label>
        <input type="text" id="checkoutStreet" value="${a.street}" placeholder="${i18n("streetName", "Nome da rua")}" required />
      </div>
      <div class="form-field">
        <label>${i18n("number", "Número")} *</label>
        <input type="text" id="checkoutNumber" value="${a.number}" placeholder="123" required />
      </div>
      <div class="form-field">
        <label>${i18n("complement", "Complemento")}</label>
        <input type="text" id="checkoutComplement" value="${a.complement}" placeholder="${i18n("apt", "Apto, Bloco...")}" />
      </div>
      <div class="form-field">
        <label>${i18n("neighborhood", "Bairro")} *</label>
        <input type="text" id="checkoutNeighborhood" value="${a.neighborhood}" />
      </div>
      <div class="form-field">
        <label>${i18n("city", "Cidade")} *</label>
        <input type="text" id="checkoutCity" value="${a.city}" />
      </div>
      <div class="form-field">
        <label>${i18n("state", "Estado")} *</label>
        <input type="text" id="checkoutState" value="${a.state}" maxlength="2" placeholder="SP" />
      </div>
    </div>
  `;
}

function createPaymentStep() {
  const isCard = checkoutState.payment.method === "card";
  const isPix = checkoutState.payment.method === "pix";
  const isBoleto = checkoutState.payment.method === "boleto";

  return `
    <h4>${i18n("paymentMethod", "Método de Pagamento")}</h4>
    <div class="payment-methods-grid">
      <div class="payment-method-option ${isCard ? "active" : ""}" data-method="card">
        <span class="pm-icon">💳</span>
        <span>${i18n("creditCard", "Cartão de Crédito")}</span>
      </div>
      <div class="payment-method-option ${isPix ? "active" : ""}" data-method="pix">
        <span class="pm-icon">⚡</span>
        <span>Pix</span>
      </div>
      <div class="payment-method-option ${isBoleto ? "active" : ""}" data-method="boleto">
        <span class="pm-icon">📄</span>
        <span>Boleto</span>
      </div>
    </div>

    <div class="checkout-form-grid" id="cardFormFields" style="display:${isCard ? "grid" : "none"};">
      <div class="form-field full">
        <label>${i18n("cardNumber", "Número do Cartão")} *</label>
        <input type="text" id="checkoutCardNumber" value="${checkoutState.payment.cardNumber}" placeholder="0000 0000 0000 0000" maxlength="19" />
      </div>
      <div class="form-field full">
        <label>${i18n("cardName", "Nome no Cartão")} *</label>
        <input type="text" id="checkoutCardName" value="${checkoutState.payment.cardName}" placeholder="${i18n("asOnCard", "Como está impresso no cartão")}" />
      </div>
      <div class="form-field">
        <label>${i18n("expiry", "Validade")} *</label>
        <input type="text" id="checkoutCardExpiry" value="${checkoutState.payment.cardExpiry}" placeholder="MM/AA" maxlength="5" />
      </div>
      <div class="form-field">
        <label>CVV *</label>
        <input type="text" id="checkoutCardCVV" value="${checkoutState.payment.cardCVV}" placeholder="123" maxlength="4" />
      </div>
    </div>

    <div id="pixInfo" style="display:${isPix ? "block" : "none"};">
      <div class="pix-qr-container">
        <div class="pix-qr-code">
          <svg viewBox="0 0 100 100" width="120" height="120">
            <rect x="5" y="5" width="25" height="25" fill="#000" rx="2"/>
            <rect x="70" y="5" width="25" height="25" fill="#000" rx="2"/>
            <rect x="5" y="70" width="25" height="25" fill="#000" rx="2"/>
            <rect x="35" y="5" width="8" height="8" fill="#000"/>
            <rect x="50" y="5" width="8" height="8" fill="#000"/>
            <rect x="35" y="20" width="8" height="8" fill="#000"/>
            <rect x="5" y="35" width="8" height="8" fill="#000"/>
            <rect x="20" y="35" width="8" height="8" fill="#000"/>
            <rect x="35" y="35" width="8" height="8" fill="#000"/>
            <rect x="50" y="35" width="8" height="8" fill="#000"/>
            <rect x="65" y="35" width="8" height="8" fill="#000"/>
            <rect x="87" y="35" width="8" height="8" fill="#000"/>
            <rect x="5" y="50" width="8" height="8" fill="#000"/>
            <rect x="35" y="50" width="8" height="8" fill="#000"/>
            <rect x="50" y="50" width="8" height="8" fill="#000"/>
            <rect x="87" y="50" width="8" height="8" fill="#000"/>
            <rect x="35" y="65" width="8" height="8" fill="#000"/>
            <rect x="50" y="65" width="8" height="8" fill="#000"/>
            <rect x="65" y="65" width="8" height="8" fill="#000"/>
            <rect x="35" y="80" width="8" height="8" fill="#000"/>
            <rect x="50" y="80" width="8" height="8" fill="#000"/>
            <rect x="70" y="70" width="25" height="25" fill="none" stroke="#000" stroke-width="3" rx="2"/>
            <rect x="76" y="76" width="13" height="13" fill="#000" rx="1"/>
          </svg>
        </div>
        <p style="font-size:12px; color:var(--shop-text-muted); margin-top:8px;">${i18n("scanPix", "Escaneie o QR Code com seu app de banco para pagar via Pix")}</p>
        <div class="pix-copy-row">
          <input type="text" value="00020126580014BR.GOV.BCB.PIX" readonly class="pix-copy-input" />
          <button type="button" class="pix-copy-btn">${i18n("copy", "Copiar")}</button>
        </div>
      </div>
    </div>

    <div id="boletoInfo" style="display:${isBoleto ? "block" : "none"};">
      <div class="boleto-container">
        <div class="boleto-barcode">
          <svg viewBox="0 0 200 40" width="100%" height="40">
            ${generateBarcodeLines()}
          </svg>
        </div>
        <p style="font-size:12px; color:var(--shop-text-muted); margin-top:8px;">${i18n("boletoInfo", "O boleto será gerado após a confirmação do pedido. Prazo de pagamento: 3 dias úteis.")}</p>
      </div>
    </div>
  `;
}

function createConfirmationStep() {
  const a = checkoutState.address;
  const paymentLabels = { card: i18n("creditCard", "Cartão de Crédito"), pix: "Pix", boleto: "Boleto" };

  let itemsHtml = "";
  let subtotal = 0;
  if (typeof cartItems !== "undefined") {
    cartItems.forEach(item => {
      const priceVal = parseFloat((item.product.promoPrice || item.product.price).replace(/[^\d]/g, "")) / 100;
      const totalItemPrice = priceVal * item.quantity;
      subtotal += totalItemPrice;
      itemsHtml += `
        <div class="confirmation-item">
          <span>${item.product.name} × ${item.quantity}</span>
          <span>R$ ${totalItemPrice.toFixed(2)}</span>
        </div>
      `;
    });
  }

  return `
    <h4>${i18n("orderReview", "Resumo do Pedido")}</h4>
    
    <div class="confirmation-section">
      <h5>${i18n("deliveryAddress", "Endereço de Entrega")}</h5>
      <p>${a.fullName}</p>
      <p>${a.street}, ${a.number} ${a.complement ? "- " + a.complement : ""}</p>
      <p>${a.neighborhood} - ${a.city}/${a.state}</p>
      <p>CEP: ${a.cep}</p>
    </div>

    <div class="confirmation-section">
      <h5>${i18n("paymentMethod", "Método de Pagamento")}</h5>
      <p>${paymentLabels[checkoutState.payment.method] || checkoutState.payment.method}</p>
      ${checkoutState.payment.method === "card" ? `<p>**** **** **** ${(checkoutState.payment.cardNumber || "").slice(-4)}</p>` : ""}
    </div>

    <div class="confirmation-section">
      <h5>${i18n("items", "Itens")}</h5>
      ${itemsHtml}
      <div class="confirmation-total">
        <strong>${i18n("total", "Total")}</strong>
        <strong>R$ ${subtotal.toFixed(2)}</strong>
      </div>
    </div>
  `;
}

function createOrderSummary() {
  let subtotal = 0;
  let itemCount = 0;

  if (typeof cartItems !== "undefined") {
    cartItems.forEach(item => {
      const priceVal = parseFloat((item.product.promoPrice || item.product.price).replace(/[^\d]/g, "")) / 100;
      subtotal += priceVal * item.quantity;
      itemCount += item.quantity;
    });
  }

  return `
    <h5>${i18n("orderSummary", "Resumo")}</h5>
    <div class="summary-row"><span>${itemCount} ${i18n("items", "itens")}</span><span>R$ ${subtotal.toFixed(2)}</span></div>
    <div class="summary-row"><span>${i18n("shipping", "Frete")}</span><span style="color:#10b981; font-weight:600;">${i18n("free", "Grátis")}</span></div>
    <div class="summary-row total"><span>${i18n("total", "Total")}</span><span>R$ ${subtotal.toFixed(2)}</span></div>
  `;
}

// ==========================================================================
// 4. Confirmação de Pedido
// ==========================================================================
function renderOrderConfirmation(container) {
  container.innerHTML = `
    <div class="order-confirmation">
      <div class="confirmation-check">✓</div>
      <h3>${i18n("orderConfirmed", "Pedido Confirmado!")}</h3>
      <p class="confirmation-order-number">${i18n("orderNumber", "Número do Pedido")}: <strong>${checkoutState.orderNumber}</strong></p>
      <p style="font-size:13px; color:var(--shop-text-muted); max-width:400px; margin:12px auto;">${i18n("orderMsg", "Seu pedido foi processado com sucesso. Você receberá um e-mail com os detalhes de rastreamento em breve.")}</p>
      <div class="confirmation-tracking">
        <span class="tracking-label">${i18n("trackingCode", "Código de Rastreamento")}</span>
        <span class="tracking-code">BR${Math.random().toString(36).substring(2, 14).toUpperCase()}</span>
      </div>
      <button type="button" class="checkout-btn" id="confirmBackHome" style="margin-top:16px;">${i18n("backToStore", "Voltar para a Loja")}</button>
    </div>
  `;

  container.querySelector("#confirmBackHome").addEventListener("click", () => {
    checkoutState = { currentStep: 1, totalSteps: 3, address: {}, payment: { method: "card" }, orderNumber: "", completed: false };
    if (typeof cartItems !== "undefined") cartItems.length = 0;
    if (typeof updateCartBadge === "function") updateCartBadge();
    if (typeof changeSimulatedPage === "function") changeSimulatedPage("home");
  });
}

// ==========================================================================
// 5. Validação e Persistência do Step
// ==========================================================================
function validateCurrentStep(container) {
  if (checkoutState.currentStep === 1) {
    const name = container.querySelector("#checkoutFullName");
    const cep = container.querySelector("#checkoutCep");
    const street = container.querySelector("#checkoutStreet");
    const number = container.querySelector("#checkoutNumber");

    if (!name.value.trim() || !cep.value.trim() || !street.value.trim() || !number.value.trim()) {
      if (typeof showToast === "function") showToast(i18n("fillRequired", "Preencha os campos obrigatórios."));
      return false;
    }
  }

  if (checkoutState.currentStep === 2 && checkoutState.payment.method === "card") {
    const cardNum = container.querySelector("#checkoutCardNumber");
    const cardName = container.querySelector("#checkoutCardName");
    if (cardNum && (!cardNum.value.trim() || cardNum.value.length < 13)) {
      if (typeof showToast === "function") showToast(i18n("invalidCard", "Número do cartão inválido."));
      return false;
    }
    if (cardName && !cardName.value.trim()) {
      if (typeof showToast === "function") showToast(i18n("fillCardName", "Preencha o nome no cartão."));
      return false;
    }
  }

  return true;
}

function saveStepData(container) {
  if (checkoutState.currentStep === 1) {
    checkoutState.address = {
      fullName: (container.querySelector("#checkoutFullName") || {}).value || "",
      phone: (container.querySelector("#checkoutPhone") || {}).value || "",
      cep: (container.querySelector("#checkoutCep") || {}).value || "",
      street: (container.querySelector("#checkoutStreet") || {}).value || "",
      number: (container.querySelector("#checkoutNumber") || {}).value || "",
      complement: (container.querySelector("#checkoutComplement") || {}).value || "",
      neighborhood: (container.querySelector("#checkoutNeighborhood") || {}).value || "",
      city: (container.querySelector("#checkoutCity") || {}).value || "",
      state: (container.querySelector("#checkoutState") || {}).value || ""
    };
  }

  if (checkoutState.currentStep === 2) {
    checkoutState.payment.cardNumber = (container.querySelector("#checkoutCardNumber") || {}).value || "";
    checkoutState.payment.cardName = (container.querySelector("#checkoutCardName") || {}).value || "";
    checkoutState.payment.cardExpiry = (container.querySelector("#checkoutCardExpiry") || {}).value || "";
    checkoutState.payment.cardCVV = (container.querySelector("#checkoutCardCVV") || {}).value || "";
  }
}

// ==========================================================================
// 6. Utilitários
// ==========================================================================
function generateBarcodeLines() {
  let lines = "";
  const widths = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 3, 1];
  let x = 5;
  widths.forEach((w, idx) => {
    if (idx % 2 === 0) {
      lines += `<rect x="${x}" y="2" width="${w}" height="36" fill="#000"/>`;
    }
    x += w + 1;
  });
  return lines;
}
