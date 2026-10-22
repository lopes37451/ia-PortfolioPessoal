# Referências Visuais Verificadas

Este documento cataloga a análise detalhada de 4 referências reais e verificáveis do universo de web design e desenvolvimento front-end (pesquisadas e validadas a partir do Awwwards e SiteInspire). Nenhuma referência ou métrica foi inventada.

---

## 1. Referência 1: Dennis Snellenberg (Door Dennis — Referência Principal)
- **Autor:** Dennis Snellenberg
- **URL Verificada:** [https://www.doordennis.nl/](https://www.doordennis.nl/) (e espelho internacional [https://dennissnellenberg.com/](https://dennissnellenberg.com/))
- **Reconhecimento:** Awwwards Site of the Year nominee, Site of the Day (SOTD), Developer Award e membro do Júri Internacional Awwwards.
- **Observações Reais:**
  - Layout minimalista focado em tipografia editorial refinada, grandes títulos de impacto assimétricos e cabeçalho de navegação suspenso com efeito magnético sutil.
  - Cartões de projeto e seções com divisões assimétricas, revelando títulos, categorias e toques pessoais de forma progressiva e equilibrada.
  - Alternância limpa de seções com espaçamento generoso, respiro visual e sensação de estúdio de alta gama.
- **O que aproveitar:**
  - A hierarquia tipográfica dominante (títulos expressivos e escala de contraste alta).
  - O uso de botões com cantos arredondados e transições de hover suaves para ações de contato e exploração.
  - A estruturação editorial da lista de projetos com metadados claros (ano, categoria, status).
- **O que NÃO aproveitar:**
  - O cursor magnético customizado complexo via JavaScript/Canvas, que pode comprometer a acessibilidade e dificultar o uso por leitores de tela ou usuários com mobilidade reduzida.
  - Efeitos de distorção de imagens WebGL que aumentam o tempo de carregamento e dependem de bibliotecas 3D pesadas.
- **Como adaptar para Ellen Lopes:**
  - Recriar a escala tipográfica marcante usando a fonte `Space Grotesk` com CSS puro.
  - Aplicar microinterações leves com CSS transitions nativas (`transform: translateY(-2px)` e sombra suave), mantendo o cursor padrão do sistema operacional.

---

## 2. Referência 2: Brittany Chiang
- **Autor:** Brittany Chiang
- **URL Verificada:** [https://brittanychiang.com/](https://brittanychiang.com/)
- **Reconhecimento:** Considerada na comunidade de desenvolvimento front-end e no Awwwards/Reddit como o modelo de referência em portfólios minimalistas focados em acessibilidade e performance.
- **Observações Reais:**
  - Layout dividido em duas colunas no desktop (navegação fixa com biografia e links sociais à esquerda; conteúdo com rolagem independente à direita).
  - Indicação visual de seção ativa no menu à medida que o scroll avança (ScrollSpy limpo com traço indicador).
  - Tema escuro de alto contraste (fundo azul-ardósia escuro com texto claro e acento verde-azulado/ciano).
  - Destaque em cartões de projetos com links externos claros e tags de tecnologias utilizadas.
- **O que aproveitar:**
  - A excelente lógica de acessibilidade: links de salto (Skip to Content), foco por teclado perfeitamente visível e contraste impecável.
  - A indicação clara da seção ativa na barra de navegação sincronizada com a rolagem do usuário.
  - A apresentação concisa de projetos com tags de tecnologias (badges).
- **O que NÃO aproveitar:**
  - O layout de duas colunas com rolagem lateral bloqueada pode ser limitante para um portfólio que também precisa valorizar peças de design e composições gráficas.
  - O tom estritamente de engenharia de software tradicional, com pouca expressividade de arte visual ou identidade de design.
- **Como adaptar para Ellen Lopes:**
  - Manter uma navegação linear de página única (single-page) com menu superior fixo com efeito glassmorphism e scrollspy ativo.
  - Incorporar as badges de tecnologias (HTML, CSS, Python, JS) com a paleta autoral (violeta e azul) e estética de estúdio de design.

---

## 3. Referência 3: Zhenya Rynzhuk
- **Autor:** Zhenya Rynzhuk
- **URL Verificada:** [https://zhenyary.com/](https://zhenyary.com/)
- **Reconhecimento:** Diretora de Arte, cofundadora do Synchronized Studio, vencedora de múltiplos prêmios Site of the Day (SOTD), Mobile Excellence e Jurada do Awwwards.
- **Observações Reais:**
  - Forte linguagem editorial inspirada em revistas de design impresso: linhas finas de grid visíveis, números de referência grandes (01, 02, 03), tipografia sofisticada e equilíbrio assimétrico.
  - Composição gráfica precisa com detalhes abstratos que guiam o olhar do usuário pelo conteúdo sem poluição visual.
- **O que aproveitar:**
  - O uso de linhas divisórias elegantes (`border-color` com baixa opacidade) e marcadores numéricos de seções (ex.: `01. Início`, `02. Sobre`, `03. Projetos`).
  - A distribuição do espaço em branco para valorizar as informações essenciais.
  - A combinação de minimalismo estrutural com sofisticação gráfica.
- **O que NÃO aproveitar:**
  - Animações pesadas de tela de carregamento (preloader longo) e dependências de scripts proprietários.
  - Imagens de moda ou ensaios fotográficos conceituais que não condizem com a realidade de uma estudante do ensino técnico.
- **Como adaptar para Ellen Lopes:**
  - Desenvolver ilustrações e grafismos vetoriais SVG autorais baseados em grades geométricas, coordenadas de design e réguas visuais.
  - Utilizar a numeração editorial nas seções do site para dar ritmo à leitura do portfólio.

---

## 4. Referência 4: Rauno Freiberg
- **Autor:** Rauno Freiberg
- **URL Verificada:** [https://rauno.me/](https://rauno.me/)
- **Reconhecimento:** Staff Design Engineer na Vercel; autor de reflexões influentes sobre microinterações e acabamento de interface ("Craft").
- **Observações Reais:**
  - Atenção meticulosa aos detalhes táteis de interface: tempos de transição ultrarrápidos (<100ms), suporte exemplar a teclado e transições perfeitas entre modo escuro e claro.
  - Uso exemplar de superfícies elevadas com bordas sutis e sombras difusas para criar profundidade sem sobrecarregar a tela.
- **O que aproveitar:**
  - A mecânica do alternador de tema claro/escuro com persistência imediata e ícones SVG harmoniosos.
  - O cuidado com o feedback de clique e estados `:focus-visible` e `:active` nos botões e inputs de formulário.
  - O respeito estrito às configurações do usuário, como `prefers-reduced-motion` e `prefers-color-scheme`.
- **O que NÃO aproveitar:**
  - A metáfora de desktop/janelas flutuantes simulando um sistema operacional, que geraria complexidade desnecessária para a apresentação de projetos acadêmicos.
- **Como adaptar para Ellen Lopes:**
  - Implementar o alternador de temas via `data-theme` em CSS com armazenamento em `localStorage`.
  - Aplicar transições táteis nos botões e campos de formulário, transmitindo uma sensação de refinamento profissional e solidez técnica.

---

## 5. Matriz de Síntese

| Elemento de Design | Dennis Snellenberg | Brittany Chiang | Zhenya Rynzhuk | Rauno Freiberg | **Aplicação no Portfólio de Ellen Lopes** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tipografia** | Brutalista / Expressiva | Sans-serif limpa | Editorial refinada | Técnica minimalista | **Space Grotesk** (títulos) + **Inter** (corpo) |
| **Navegação** | Header suspenso | Sidebar fixa | Menu editorial | Dock / Barra minimalista | **Header fixo com glassmorphism e scrollspy** |
| **Paleta** | Preto e Branco | Slate e Ciano | Preto, Branco, Cinza | Tons neutros profundos | **#0B0B10 / #151521 com acentos #8B5CF6 e #38BDF8** |
| **Gráficos** | WebGL / 3D | Sem ilustrações | Fotografias conceituais | Componentes táteis | **Composições geométricas e abstratas em SVG** |
| **Acessibilidade** | Regular | Excepcional (A+) | Regular | Excepcional (A+) | **Conformidade WCAG AA com navegação total por teclado** |
