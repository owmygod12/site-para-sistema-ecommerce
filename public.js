/**
 * Nexa Commerce — public.js
 * Scripts compartilhados para as páginas públicas (landing, examples, features, pricing)
 * Sem dependências externas. Vanilla JS puro.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================================
     1. HEADER — Sticky + Mobile Drawer
     ========================================================================= */
  function initHeader() {
    const header = document.querySelector('.pub-header');
    const toggle = document.querySelector('.pub-menu-toggle');
    const drawer = document.querySelector('.pub-mobile-drawer');
    const drawerLinks = document.querySelectorAll('.pub-mobile-drawer a');

    if (!header) return;

    // Scroll: adiciona classe "scrolled"
    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Toggle drawer mobile
    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      // Fechar ao clicar em link
      drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
      });

      // Fechar com ESC
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDrawer();
      });
    }

    function openDrawer() {
      drawer.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // Marcar link ativo com base na página atual
    const currentPage = window.location.pathname.split('/').pop() || 'landing.html';
    const navLinks = document.querySelectorAll('.pub-nav-links a, .pub-mobile-drawer nav a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPage)) {
        link.classList.add('active');
      }
    });
  }

  /* =========================================================================
     2. SCROLL REVEAL (Intersection Observer)
     ========================================================================= */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      // Se o usuário prefere menos movimento, mostra tudo imediatamente
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
  }

  /* =========================================================================
     3. COUNTER ANIMADO (stats)
     ========================================================================= */
  function initCounters() {
    if (prefersReducedMotion) return;

    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const value = target * eased;

      // Formata o número
      let displayValue;
      if (target >= 1000) {
        displayValue = Math.round(value).toLocaleString('pt-BR');
      } else if (!Number.isInteger(target)) {
        displayValue = value.toFixed(1);
      } else {
        displayValue = Math.round(value);
      }

      el.textContent = prefix + displayValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* =========================================================================
     4. FAQ ACCORDION
     ========================================================================= */
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-q');
      if (!question) return;

      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        // Fecha todos
        faqItems.forEach(i => {
          i.classList.remove('open');
          const q = i.querySelector('.faq-q');
          if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Abre o atual
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* =========================================================================
     5. MODAL DE EXEMPLOS
     ========================================================================= */
  function initExamplesModal() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;

    const modalBg = modal.closest('.pub-modal-bg');
    const closeBtn = modal.querySelector('.modal-close');

    // Abre modal ao clicar num card
    document.querySelectorAll('[data-example]').forEach(trigger => {
      trigger.addEventListener('click', function () {
        const exampleId = this.dataset.example;
        populateModal(exampleId);
        openModal();
      });
    });

    // Fecha ao clicar no X
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Fecha ao clicar no fundo
    if (modalBg) {
      modalBg.addEventListener('click', function (e) {
        if (e.target === modalBg) closeModal();
      });
    }

    // Fecha com ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    function openModal() {
      if (modalBg) {
        modalBg.classList.add('open');
        modalBg.removeAttribute('aria-hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (modalBg) {
        modalBg.classList.remove('open');
        modalBg.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    const examplesData = {
      modavibe: {
        name: 'Modavibe',
        category: 'Moda & Vestuário',
        desc: 'Loja de moda contemporânea com curadoria de peças exclusivas. Layout minimalista com foco na fotografia dos produtos e experiência de compra fluida.',
        tags: ['Moda', 'Vestuário', 'Premium', 'Tema Claro'],
        accentColor: '#e11d48',
        bgColor: '#0f0a14',
        features: ['Checkout expresso', 'Tabela de medidas', 'Lista de desejos', 'Variantes de cor/tamanho']
      },
      glowskin: {
        name: 'GlowSkin',
        category: 'Cosméticos & Beleza',
        desc: 'Marca de cosméticos naturais com identidade visual suave e premium. Destaques para ingredientes, benefícios e rotina de skincare personalizada.',
        tags: ['Cosméticos', 'Beleza', 'Natural', 'Premium'],
        accentColor: '#ec4899',
        bgColor: '#1a0a14',
        features: ['Quiz de pele', 'Rotinas personalizadas', 'Avaliações com fotos', 'Assinatura mensal']
      },
      techzone: {
        name: 'TechZone',
        category: 'Eletrônicos & Tecnologia',
        desc: 'Plataforma de eletrônicos e gadgets com foco em comparativos, especificações técnicas e suporte especializado para o consumidor exigente.',
        tags: ['Eletrônicos', 'Tech', 'Gadgets', 'Comparativo'],
        accentColor: '#2563eb',
        bgColor: '#040e1a',
        features: ['Comparador de produtos', 'Especificações técnicas', 'Suporte chat', 'Parcelamento']
      },
      casaverde: {
        name: 'CasaVerde',
        category: 'Decoração & Casa',
        desc: 'Loja de decoração sustentável com produtos artesanais e naturais. Visual orgânico, foco em storytelling dos produtos e dos artesãos por trás de cada peça.',
        tags: ['Decoração', 'Sustentável', 'Artesanal', 'Natural'],
        accentColor: '#059669',
        bgColor: '#050f0a',
        features: ['História dos artesãos', 'Produtos sustentáveis', 'Embalagem eco', 'Consultoria de decoração']
      },
      artesabor: {
        name: 'ArteSabor',
        category: 'Alimentos Artesanais',
        desc: 'Marketplace de alimentos artesanais regionais com foco em produtores locais, receitas originais e experiência gastronômica autêntica.',
        tags: ['Alimentos', 'Artesanal', 'Regional', 'Gastronomia'],
        accentColor: '#d97706',
        bgColor: '#130a00',
        features: ['Produtores locais', 'Cesta personalizada', 'Receitas incluídas', 'Entrega refrigerada']
      },
      digitalpro: {
        name: 'DigitalPro',
        category: 'Produtos Digitais',
        desc: 'Plataforma de venda de cursos, templates, ebooks e recursos digitais para profissionais criativos e empreendedores do mundo digital.',
        tags: ['Digital', 'Cursos', 'Templates', 'Infoprodutos'],
        accentColor: '#7c3aed',
        bgColor: '#0a0614',
        features: ['Download automático', 'Licenças múltiplas', 'Acesso vitalício', 'Atualizações grátis']
      }
    };

    function populateModal(id) {
      const data = examplesData[id];
      if (!data) return;

      const previewZone = modal.querySelector('.modal-preview-zone');
      const titleEl = modal.querySelector('.modal-store-title');
      const descEl = modal.querySelector('.modal-store-desc');
      const tagsEl = modal.querySelector('.modal-tags');
      const ctaEl = modal.querySelector('.modal-cta-link');

      if (previewZone) {
        previewZone.style.background = `linear-gradient(135deg, ${data.accentColor}22, ${data.bgColor})`;
        previewZone.style.backgroundColor = data.bgColor;

        // Mini store preview
        previewZone.innerHTML = `
          <button class="modal-close" aria-label="Fechar">&times;</button>
          <div style="width:100%;height:100%;display:flex;flex-direction:column;padding:20px;gap:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:18px;font-weight:900;color:#fff;">${data.name}</span>
              <span style="font-size:11px;font-weight:600;background:${data.accentColor}33;color:${data.accentColor};padding:4px 12px;border-radius:99px;border:1px solid ${data.accentColor}55;">${data.category}</span>
            </div>
            <div style="flex:1;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(255,255,255,0.08);display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:16px;">
              ${[1,2,3].map((_, i) => `<div style="background:${data.accentColor}${i===0?'55':'33'};border-radius:8px;height:100%;min-height:120px;display:flex;align-items:flex-end;padding:8px;"><span style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.8);">R$ ${(49+i*30).toFixed(2)}</span></div>`).join('')}
            </div>
            <div style="display:flex;gap:8px;">
              <div style="flex:1;background:${data.accentColor};border-radius:8px;padding:10px 16px;text-align:center;font-size:12px;font-weight:800;color:#fff;">Comprar agora</div>
              <div style="background:rgba(255,255,255,0.08);border-radius:8px;padding:10px 16px;font-size:12px;font-weight:600;color:rgba(255,255,255,0.6);">Ver mais</div>
            </div>
          </div>
        `;

        // Re-attach close
        const newClose = previewZone.querySelector('.modal-close');
        if (newClose) newClose.addEventListener('click', closeModal);
      }

      if (titleEl) titleEl.textContent = data.name;
      if (descEl) descEl.textContent = data.desc;

      if (tagsEl) {
        tagsEl.innerHTML = data.tags.map(tag =>
          `<span class="modal-tag">${tag}</span>`
        ).join('');
      }

      if (ctaEl) ctaEl.href = `pricing.html?ref=${id}`;
    }
  }

  /* =========================================================================
     6. PLANO DE ASSINATURA — seleciona e redireciona
     ========================================================================= */
  function initPricingButtons() {
    const pricingBtns = document.querySelectorAll('[data-plan]');
    if (!pricingBtns.length) return;

    pricingBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const plan = this.dataset.plan;

        // Feedback visual
        const originalText = this.textContent;
        this.textContent = 'Redirecionando...';
        this.disabled = true;
        this.style.opacity = '0.8';

        // Salva plano selecionado
        try {
          sessionStorage.setItem('nexa_selected_plan', plan);
        } catch (e) {}

        // Redireciona após breve delay
        setTimeout(() => {
          window.location.href = `login.html?plan=${encodeURIComponent(plan)}&action=register`;
        }, 600);
      });
    });
  }

  /* =========================================================================
     7. PLAN QUERY PARAM — mostra plano selecionado na login page
     ========================================================================= */
  function readPlanFromURL() {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get('plan');

    if (plan) {
      // Tenta preencher campo de plano se existir
      const planEl = document.getElementById('selectedPlanDisplay');
      if (planEl) {
        planEl.textContent = plan;
        planEl.closest('[data-plan-info]')?.removeAttribute('hidden');
      }

      // Vai direto para tela de registro
      const goToRegister = document.getElementById('goToRegister');
      if (goToRegister) {
        goToRegister.click();
      }
    }
  }

  /* =========================================================================
     8. SMOOTH SCROLL para âncoras internas
     ========================================================================= */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        }
      });
    });
  }

  /* =========================================================================
     9. PARALLAX leve no hero (apenas desktop)
     ========================================================================= */
  function initHeroParallax() {
    if (prefersReducedMotion) return;
    if (window.innerWidth < 1024) return;

    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.06}px)`;
      }
    }, { passive: true });
  }

  /* =========================================================================
     INIT
     ========================================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initScrollReveal();
    initCounters();
    initFAQ();
    initExamplesModal();
    initPricingButtons();
    readPlanFromURL();
    initSmoothScroll();
    initHeroParallax();
  });

})();
