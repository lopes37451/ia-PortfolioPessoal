# Funcionalidades e Critérios de Aceite

Este documento mapeia todas as funcionalidades do portfólio de **Ellen Lopes**, organizadas por nível de prioridade (P1 a P4), com seus respectivos critérios de aceitação e status de entrega.

---

## 1. Matriz de Priorização

| ID | Funcionalidade | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **FN-01** | Cabeçalho Fixo com Navegação e ScrollSpy | P1 (Crítica) | Concluído |
| **FN-02** | Menu Hambúrguer Móvel Acessível (<768px) | P1 (Crítica) | Concluído |
| **FN-03** | Alternador de Tema Claro/Escuro com Persistência | P1 (Crítica) | Concluído |
| **FN-04** | Seção Hero com Identidade Autoral e Ação Rápida | P1 (Crítica) | Concluído |
| **FN-05** | Seção Sobre com Perfil Real e Tecnologias | P1 (Crítica) | Concluído |
| **FN-06** | Galeria de Projetos com Card do E-commerce Infantil e GitHub | P1 (Crítica) | Concluído |
| **FN-07** | Seção de Contato com Validação e Alternativa Mailto | P1 (Crítica) | Concluído |
| **FN-08** | Currículo Imprimível e Pronto para Salvar em PDF | P1 (Crítica) | Concluído |
| **FN-09** | Documento A4 de Referências Visuais | P2 (Alta) | Concluído |
| **FN-10** | Acessibilidade Total (WCAG AA, Teclado, Skip Link, Reduced Motion) | P2 (Alta) | Concluído |
| **FN-11** | Animações Sutis ao Rolar (IntersectionObserver) | P2 (Alta) | Concluído |
| **FN-12** | Instruções de Deploy na Vercel e GitHub (README.md) | P3 (Média) | Concluído |
| **FN-13** | Seção "Além do Código" (Cards Justin Bieber e Corinthians) | P2 (Alta) | Concluído |

---

## 2. Detalhamento e Critérios de Aceitação

### FN-01: Cabeçalho Fixo com Navegação e ScrollSpy
- **Descrição:** Barra de navegação fixada no topo com efeito de desfoque de fundo (glassmorphism), logotipo textual com indicador de status e links para as seções Início, Sobre, Projetos e Contato.
- **Critérios de Aceite:**
  - O cabeçalho permanece visível durante a rolagem.
  - Ao rolar para uma seção correspondente, o item do menu recebe uma classe ativa (`active`) com destaque visual sutil.
  - O clique em qualquer link do menu executa uma rolagem suave até a seção de destino.
  - O link de salto ("Pular para o conteúdo principal") aparece ao teclar `Tab` no início da página.

### FN-02: Menu Hambúrguer Móvel Acessível (<768px)
- **Descrição:** Gaveta de navegação deslizante para dispositivos móveis, acionada por botão hambúrguer.
- **Critérios de Aceite:**
  - O botão possui `aria-expanded="false"` inicialmente e muda para `true` quando aberto.
  - Possui `aria-label="Abrir menu de navegação"` e muda dinamicamente para `"Fechar menu"`.
  - Ao clicar em um link do menu aberto, a gaveta se fecha automaticamente e a página rola para a seção.
  - O menu pode ser fechado pressionando a tecla `Escape`.
  - O foco do teclado é adequadamente controlado.

### FN-03: Alternador de Tema Claro/Escuro com Persistência
- **Descrição:** Botão acessível que permite alternar entre o tema escuro padrão (`#0B0B10`) e o tema claro (`#F7F7FC`).
- **Critérios de Aceite:**
  - Respeita a preferência do sistema operacional (`prefers-color-scheme`) na primeira visita.
  - Salva a escolha do usuário no `localStorage` sob a chave `ellen_portfolio_theme`.
  - Ao recarregar a página, o tema selecionado permanece ativo sem piscar (flash of unstyled theme).
  - O ícone do botão muda de Sol (para o modo escuro) para Lua (para o modo claro), com `aria-label` descritivo do próximo estado.

### FN-04: Seção Hero com Identidade Autoral e Ação Rápida
- **Descrição:** Abertura visual impactante com o nome de Ellen Lopes, identificação acadêmica e frase-chave.
- **Critérios de Aceite:**
  - Título principal `<h1>` com o nome Ellen Lopes em tipografia marcante (`Space Grotesk`).
  - Frase de abertura: *"Estudante do curso Técnico em Informática. Transformando ideias em experiências digitais."*
  - Composição gráfica abstrata vetorial em SVG integrada, sem fotos pessoais ou de banco de imagens.
  - Botões para "Explorar Projetos" (`#projetos`) e "Entrar em Contato" (`#contato`).

### FN-05: Seção Sobre com Perfil Real e Tecnologias
- **Descrição:** Apresentação da trajetória de estudante e das tecnologias de estudo.
- **Critérios de Aceite:**
  - Informações verídicas: 18 anos, estudante do ensino médio integrado ao Técnico de Informática, paixão por design de interfaces.
  - Apresentação de HTML, CSS, Python e JavaScript em cartões ou badges informativas.
  - Não inventa níveis percentuais arbitrários de maestria ("90%", "Expert", etc.) ou certificados fictícios.

### FN-06: Galeria de Projetos com Card do E-commerce Infantil e GitHub
- **Descrição:** Vitrine editorial de trabalhos e repositórios.
- **Critérios de Aceite:**
  - Card de destaque para o **E-commerce de Roupas Infantis**:
    - Descrição estrita: projeto de desenvolvimento de uma loja virtual infantil, com interface visual para catálogo e módulo administrativo de cadastro de produtos.
    - Status claramente identificado como "Em desenvolvimento" (sem links falsos de demo).
    - Representação visual vetorial ou wireframe esquemático autoral do projeto.
  - Card dedicado ao **GitHub**:
    - Link oficial verificado: `https://github.com/lopes37451?tab=repositories`.
    - Abre em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.
  - Card de estudos acadêmicos e conceituais de interfaces web.

### FN-07: Seção de Contato com Validação e Alternativa Mailto
- **Descrição:** Canal direto de comunicação com e-mail visível e formulário assistido.
- **Critérios de Aceite:**
  - Exibe o e-mail oficial: `ellenlopesdesouza899@gmail.com` com link `mailto:`.
  - Exibe o link do GitHub de Ellen Lopes.
  - Formulário com campos: Nome, E-mail e Mensagem.
  - Validação em JavaScript para campos obrigatórios e formato de e-mail válido.
  - Mensagens de erro acessíveis via `aria-live`.
  - Transparência explícita: aviso em texto de que o site é estático e que o formulário não possui backend.
  - Ao enviar com dados válidos, ativa um link `mailto:` montado dinamicamente com os campos preenchidos e codificados via `encodeURIComponent`.

### FN-08: Currículo Imprimível e Pronto para Salvar em PDF
- **Descrição:** Página independente (`curriculum.html`) diagramada para tela e para impressão A4.
- **Critérios de Aceite:**
  - Contém dados 100% autênticos de Ellen Lopes (estudante de informática, design de interfaces, projetos, contato).
  - Inclui botão "Imprimir ou Salvar como PDF" via `window.print()`.
  - Estilos específicos de `@media print` para ocultar botões de navegação e garantir encaixe perfeito em folha A4.
  - Link de retorno para o portfólio.

### FN-09: Documento A4 de Referências Visuais
- **Descrição:** Documento `referencias-visuais.html` formatado exatamente para 1 página A4.
- **Critérios de Aceite:**
  - Apresenta as 4 referências reais verificadas (Dennis Snellenberg, Brittany Chiang, Zhenya Rynzhuk, Rauno Freiberg) com URLs e justificativas.
  - Amostras de cores com códigos hexadecimais da paleta.
  - Conclusão demonstrando o impacto prático de cada referência no projeto final de Ellen.
  - Botão de impressão direta configurado com CSS de página única.

### FN-10: Acessibilidade Total (WCAG AA)
- **Critérios de Aceite:**
  - Contraste superior a 4.5:1 em todos os blocos de texto.
  - Anéis de foco visíveis em `:focus-visible`.
  - Conformidade com `@media (prefers-reduced-motion: reduce)`.
  - Zero erros de sintaxe e navegação fluida exclusivamente por teclado.

### FN-11: Animações Sutis ao Rolar
- **Critérios de Aceite:**
  - Utiliza `IntersectionObserver` em JavaScript puro para acionar classes CSS de animação suave (`fade-in-up`).
  - Sem uso de bibliotecas pesadas de animação (AOS, GSAP, etc.).
  - Desativadas automaticamente sob preferência de movimento reduzido.

### FN-12: Instruções de Deploy na Vercel e GitHub (README.md)
- **Critérios de Aceite:**
  - Explicação clara em português de como executar localmente.
  - Passo a passo para criar repositório e subir no GitHub.
  - Passo a passo para importar na Vercel e publicar sem complicações.

### FN-13: Seção "Além do Código" (Personalidade: Justin Bieber & Corinthians)
- **Descrição:** Seção posicionada antes do Contato, apresentando os gostos e a personalidade de Ellen Lopes em dois cards estilizados e equilibrados.
- **Critérios de Aceite:**
  - Card 1 — **Justin Bieber:** Representação autêntica da paixão pelo cantor, frase afetuosa, grafismo sonoro/musical em SVG e badge divertida, em harmonia com o tema editorial.
  - Card 2 — **Corinthians:** Homenagem autoral ao time do coração, com linhas e elementos de campo/futebol em SVG, tipografia de impacto e elegância estética sem infringir marcas registradas.
  - Mantém o protagonismo dos projetos e do design, sem transformar o site em uma página de fã.
  - Totalmente responsivo e compatível com os temas claro e escuro.
