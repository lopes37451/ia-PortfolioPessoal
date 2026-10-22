/**
 * PORTFÓLIO AUTORAL — ELLEN LOPES
 * Script Modular Vanilla JavaScript (ES6+)
 * Sem dependências ou frameworks externos
 */

(function () {
  'use strict';

  // Chaves de armazenamento e configurações
  const THEME_STORAGE_KEY = 'ellen_portfolio_theme';
  const OFFICIAL_EMAIL = 'ellenlopesdesouza899@gmail.com';

  /* ==========================================================================
     1. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
     ========================================================================== */
  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const sunIcon = themeToggleBtn.querySelector('.icon-sun');
    const moonIcon = themeToggleBtn.querySelector('.icon-moon');

    // Determina o tema inicial: localStorage > preferência do sistema > escuro
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = storedTheme || (systemPrefersLight ? 'light' : 'dark');

    applyTheme(initialTheme);

    // Evento de clique para alternar
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    });

    // Observa mudanças nas preferências de sistema caso não haja preferência salva
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });

    function applyTheme(theme) {
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.setAttribute('aria-label', 'Alternar para o modo escuro');
        themeToggleBtn.setAttribute('title', 'Ativar modo escuro');
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
      } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.setAttribute('aria-label', 'Alternar para o modo claro');
        themeToggleBtn.setAttribute('title', 'Ativar modo claro');
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
      }
    }
  }

  /* ==========================================================================
     2. MENU HAMBÚRGUER MOBILE ACESSÍVEL
     ========================================================================== */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggleBtn || !drawer) return;

    const navLinks = drawer.querySelectorAll('.mobile-nav-link');

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Fechar menu de navegação');
      drawer.setAttribute('aria-hidden', 'false');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menu de navegação');
      drawer.setAttribute('aria-hidden', 'true');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function () {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fecha o menu ao clicar em qualquer link da gaveta
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Fecha ao pressionar tecla Escape e devolve foco ao botão
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  /* ==========================================================================
     3. SCROLLSPY & INDICAÇÃO DE SEÇÃO ATIVA
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-nav], .mobile-nav-link[data-nav]');
    if (!sections.length || !navLinks.length) return;

    function updateActiveSection() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const headerOffset = 120; // Margem de detecção abaixo do header fixo

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) {
            if (link.getAttribute('data-nav') === sectionId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
  }

  /* ==========================================================================
     4. ANIMAÇÕES AO ROLAR (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    // Respeito à preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries, observerInstance) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observerInstance.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.1
        }
      );

      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback para navegadores legados
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
    }
  }

  /* ==========================================================================
     5. VALIDAÇÃO DE FORMULÁRIO E ALTERNATIVA MAILTO DIRETA
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formAlert = document.getElementById('form-alert');

    // Validação de formato de e-mail por expressão regular padrão
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    }

    function clearErrors() {
      [nameError, emailError, messageError].forEach(function (el) {
        if (el) el.textContent = '';
      });
      [nameInput, emailInput, messageInput].forEach(function (input) {
        if (input) input.classList.remove('input-error');
      });
      if (formAlert) {
        formAlert.className = 'form-status-alert info';
        formAlert.textContent = '';
      }
    }

    // Validação inline ao perder foco (blur)
    nameInput.addEventListener('blur', function () {
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Por favor, informe seu nome.';
        nameInput.classList.add('input-error');
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('input-error');
      }
    });

    emailInput.addEventListener('blur', function () {
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Por favor, informe seu endereço de e-mail.';
        emailInput.classList.add('input-error');
      } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Informe um endereço de e-mail válido (ex: nome@dominio.com).';
        emailInput.classList.add('input-error');
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
      }
    });

    messageInput.addEventListener('blur', function () {
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Por favor, digite uma mensagem.';
        messageInput.classList.add('input-error');
      } else if (messageInput.value.trim().length < 8) {
        messageError.textContent = 'A mensagem deve conter pelo menos 8 caracteres.';
        messageInput.classList.add('input-error');
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('input-error');
      }
    });

    // Submissão do formulário
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      let hasErrors = false;
      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const messageVal = messageInput.value.trim();

      if (!nameVal) {
        nameError.textContent = 'Por favor, informe seu nome.';
        nameInput.classList.add('input-error');
        if (!hasErrors) nameInput.focus();
        hasErrors = true;
      }

      if (!emailVal) {
        emailError.textContent = 'Por favor, informe seu endereço de e-mail.';
        emailInput.classList.add('input-error');
        if (!hasErrors) emailInput.focus();
        hasErrors = true;
      } else if (!isValidEmail(emailVal)) {
        emailError.textContent = 'Informe um endereço de e-mail válido (ex: nome@dominio.com).';
        emailInput.classList.add('input-error');
        if (!hasErrors) emailInput.focus();
        hasErrors = true;
      }

      if (!messageVal) {
        messageError.textContent = 'Por favor, digite sua mensagem.';
        messageInput.classList.add('input-error');
        if (!hasErrors) messageInput.focus();
        hasErrors = true;
      } else if (messageVal.length < 8) {
        messageError.textContent = 'A mensagem deve conter pelo menos 8 caracteres.';
        messageInput.classList.add('input-error');
        if (!hasErrors) messageInput.focus();
        hasErrors = true;
      }

      if (hasErrors) return;

      // Monta URI mailto com os dados validados devidamente codificados
      const subject = encodeURIComponent(`Contato pelo Portfólio de Ellen Lopes — ${nameVal}`);
      const body = encodeURIComponent(
        `Olá, Ellen!\n\n` +
        `Meu nome é: ${nameVal}\n` +
        `Meu e-mail de contato é: ${emailVal}\n\n` +
        `Mensagem:\n${messageVal}\n\n` +
        `---\nMensagem enviada a partir do seu portfólio pessoal.`
      );

      const mailtoUrl = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;

      // Feedback transparente ao usuário
      if (formAlert) {
        formAlert.className = 'form-status-alert info visible';
        formAlert.innerHTML = `
          <strong>Abrindo seu aplicativo de e-mail...</strong><br>
          Os dados foram validados e inseridos na mensagem para envio direto para <strong>${OFFICIAL_EMAIL}</strong>.
          Caso seu aplicativo não abra automaticamente, você pode enviar diretamente para o e-mail acima.
        `;
      }

      // Dispara abertura do aplicativo de e-mail padrão do sistema
      window.location.href = mailtoUrl;
    });
  }

  /* ==========================================================================
     INICIALIZAÇÃO NO CARREGAMENTO DO DOM
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initContactForm();
  });

})();
