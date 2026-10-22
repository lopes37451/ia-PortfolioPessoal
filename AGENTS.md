# AGENTS.md — Diretrizes de Desenvolvimento e Governança

Este documento estabelece as regras de engenharia, acessibilidade, organização de código e governança para o desenvolvimento e manutenção contínua do portfólio pessoal de **Ellen Lopes**.

---

## 1. Princípios Gerais e Filosofia

1. **Autenticidade e Fidedignidade:**
   - Nunca inventar experiências profissionais, empresas, cargos, qualificações técnicas inexistentes, números arbitrários ou depoimentos falsos.
   - Todos os projetos acadêmicos e estudos devem ser explicitamente identificados como tais (ex: "Projeto Acadêmico / Estudo de Interface").
   - Quando faltar uma informação, utilizar placeholders claramente sinalizados e editáveis pelo usuário.
   - Jamais criar perfis ou links para redes sociais que não foram informadas (ex.: LinkedIn não deve ser gerado).

2. **Direção de Tecnologia (Vanilla First):**
   - Utilizar estritamente **HTML5 semântico**, **CSS3 puro** (com Custom Properties) e **JavaScript moderno puro (Vanilla ES6+)**.
   - Proibido o uso de bibliotecas de componentes ou frameworks pesados (React, Vue, Angular, Svelte, Tailwind, Bootstrap, jQuery, etc.).
   - Zero dependências de build obrigatórias (Webpack, Vite, Gulp, PostCSS). O projeto deve ser capaz de ser executado diretamente em qualquer servidor estático ou aberto no navegador.

3. **Autoria Visual e Direção de Arte:**
   - Não utilizar fotos pessoais fictícias ou imagens genéricas de banco de dados (Unsplash, Pexels) simulando fotos de Ellen.
   - Priorizar construções visuais autorais: formas geométricas SVG, padrões de grade (grid overlays), gradientes dinâmicos e tipografia expressiva.

---

## 2. Padrões de Acessibilidade (WCAG 2.1 AA)

Todo código HTML, CSS e JavaScript gerado deve seguir os seguintes critérios inegociáveis:

1. **Semântica Estrutural:**
   - Hierarquia correta de títulos: apenas um `<h1>` por página, seguido ordenadamente por `<h2>`, `<h3>` sem saltos de nível.
   - Elementos de marco (`landmarks`): `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Uso de `<button>` para ações na página e `<a>` exclusivamente para navegação entre páginas ou âncoras.
   - Skip Link ("Pular para o conteúdo principal") visível logo no início do `<body>` ao receber foco por teclado.

2. **Navegação por Teclado e Foco:**
   - Todos os elementos interativos (botões, links, campos de formulário, alternador de tema) devem ser alcançáveis e operáveis via `Tab`, `Shift+Tab`, `Enter` e `Space`.
   - Estilo de foco visível e contrastante (`:focus-visible`), com anel de foco bem definido (`outline: 2px solid var(--accent-purple)` e `outline-offset: 3px`). Proibido remover o outline com `outline: none` sem alternativa visível.
   - Modais ou menus suspensos móveis devem suportar fechamento imediato pela tecla `Escape`.

3. **Contraste de Cores:**
   - Razão de contraste mínima de 4.5:1 para texto normal e 3:1 para texto grande/títulos em ambos os temas (Dark e Light).
   - O uso de acentos (#8B5CF6 e #38BDF8) deve sempre respeitar o fundo onde estão aplicados.

4. **Movimento Reduzido (`prefers-reduced-motion`):**
   - Qualquer animação CSS (scroll, flutuações, revelações) ou transição JavaScript deve ser desativada ou reduzida a transições instantâneas quando o usuário configurar `prefers-reduced-motion: reduce`.

5. **Formulários e Feedback:**
   - Todos os inputs devem ter `<label>` associados via atributo `for`/`id`.
   - Mensagens de validação e erro devem possuir `aria-live="polite"` ou `role="alert"` para leitores de tela.
   - Indicar claramente que o formulário estático não envia dados diretamente para um servidor sem backend e fornecer alternativa funcional via link `mailto:`.

---

## 3. Padrões de Arquitetura de Código

### 3.1 CSS (`style.css`)
- **Organização por Tokens:** Definir todas as cores, tipografias, espaçamentos, raios de borda e sombras no bloco `:root` e sobrescrever no seletor `[data-theme="light"]`.
- **Nomenclatura Consistente:** Adotar convenção orientada a componentes com prefixos claros (ex: `.hero-content`, `.project-card`, `.btn-primary`).
- **Layout Moderno:** Uso prioritário de CSS Grid e Flexbox com unidades flexíveis (`rem`, `ch`, `%`, `vw`, `vh`).
- **Zero Scroll Horizontal Acidental:** Evitar larguras fixas em pixels que excedam a viewport; usar `max-width: 100%` e `box-sizing: border-box`.

### 3.2 JavaScript (`script.js`)
- Código modular organizado em funções autoexplicativas com escopo fechado (`initTheme`, `initMobileMenu`, `initScrollSpy`, `initContactForm`, `initScrollAnimations`).
- Tratamento defensivo de eventos e verificação prévia de existência de elementos no DOM antes de adicionar listeners.
- Armazenamento de preferências do usuário exclusivamente via `localStorage` com leitura segura.

---

## 4. Estratégia de Deploy e Compatibilidade

1. **Deploy Estático na Vercel:**
   - Estrutura de arquivos compatível com a plataforma Vercel em modo "Other/Static Site" (sem necessidade de script de build ou `package.json`).
   - Todos os caminhos de assets e links devem ser relativos (`./assets/...`, `curriculum.html`) para evitar erros 404 em diferentes domínios.

2. **Repositório GitHub:**
   - Instruções detalhadas no `README.md` para versionamento limpo com `git`.
