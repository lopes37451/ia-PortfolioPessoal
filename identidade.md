# Manual de Identidade Visual e Direção de Arte

Este documento especifica a identidade visual, direção de arte, sistema de design tokens, tipografia e diretrizes de composição gráfica do portfólio de **Ellen Lopes**.

---

## 1. Perfil e Posicionamento

- **Nome:** Ellen Lopes
- **Idade:** 18 anos
- **Formação:** Estudante do Ensino Médio integrado ao curso Técnico em Informática.
- **Área de Maior Interesse:** Design de interfaces e criação visual para sites (UI Design, arquitetura da informação, desenvolvimento front-end estético e experiências digitais interativas).
- **Idiomas:** Português (nativo) e Inglês (nível intermediário).
- **Declaração de Posicionamento:** *"Estudante do ensino médio e do curso Técnico em Informática com paixão por design de interfaces. Focada em criar interfaces bonitas, criativas e funcionais, unindo criatividade e tecnologia."*
- **Objetivo do Portfólio:** Apresentar projetos escolares e acadêmicos, estudos de interface, repositórios de código e demonstrar criatividade e conhecimentos em tecnologia.
- **Dimensão Pessoal ("Além do Código"):**
  - **Justin Bieber:** Fã apaixonada pelo artista. Presença autêntica e divertida, com grafismo musical autoral em SVG (ondas sonoras e vinil geométrico) e mensagem afetuosa.
  - **Corinthians:** Corinthiana apaixonada. Composição gráfica elegante com linhas de campo/futebol em SVG, tipografia marcante e elegância visual sem poluição de marca comercial.

---

## 2. Direção de Arte

A direção de arte combina a precisão do **design editorial moderno** com a estética **tecnológica experimental**, tendo como principal inspiração o trabalho de Dennis Snellenberg ([https://www.doordennis.nl/](https://www.doordennis.nl/)). A identidade visual é caracterizada por:

1. **Tipografia Expressiva:** Títulos em caixa alta ou baixa com escala visual marcante, acompanhados de parágrafos legíveis e com ritmo vertical equilibrado.
2. **Composição Geométrica e Abstrata:**
   - Em vez de retratos pessoais ou fotografias de bancos de imagens, a identidade utiliza grafismos em SVG: grids sutis, círculos concêntricos, cruzes de referência ("retículas de corte"), divisores angulares e cartões assimétricos.
   - Metáforas visuais de design de interface: réguas, marcações de coordenadas, caixas de diálogo estilizadas e linhas de proporção áurea.
3. **Equilíbrio de Luz e Sombra:** Superfícies escuras profundas contrastadas com superfícies de elevação discretas e iluminação sutil por acentos em gradiente violeta/ciano.

---

## 3. Paleta de Cores e Tokens de Design

A paleta de cores foi desenvolvida para proporcionar imersão em modo escuro (Dark Mode padrão) e conforto visual e clareza em modo claro (Light Mode), mantendo conformidade com as diretrizes de contraste WCAG AA.

### 3.1 Tema Escuro (Dark Mode — Padrão)
| Token CSS | Valor Hex / HSL | Uso Principal |
| :--- | :--- | :--- |
| `--bg-base` | `#0B0B10` | Fundo principal da página |
| `--bg-surface` | `#151521` | Cartões, caixas de elevação, header |
| `--bg-surface-elevated` | `#1F1F30` | Hover de cartões, dropdowns |
| `--text-primary` | `#F5F3FF` | Títulos, textos de alto destaque |
| `--text-secondary` | `#B7B4C8` | Parágrafos, legendas, metadados |
| `--text-muted` | `#7C7894` | Divisores, textos de apoio terciários |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Linhas de grid, bordas de cartões |

### 3.2 Tema Claro (Light Mode)
| Token CSS | Valor Hex / HSL | Uso Principal |
| :--- | :--- | :--- |
| `--bg-base` | `#F7F7FC` | Fundo principal da página |
| `--bg-surface` | `#FFFFFF` | Cartões, superfícies de destaque |
| `--bg-surface-elevated` | `#EDEDF6` | Hover e áreas de suporte |
| `--text-primary` | `#191526` | Títulos e textos de alto contraste |
| `--text-secondary` | `#4E4A62` | Parágrafos e subtítulos |
| `--text-muted` | `#827E96` | Metadados e linhas de apoio |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | Bordas e divisores sutis |

### 3.3 Cores de Destaque (Acentos)
| Token CSS | Valor Hex | Finalidade |
| :--- | :--- | :--- |
| `--accent-purple` | `#8B5CF6` | Botões primários, gradientes de destaque, anel de foco |
| `--accent-purple-glow` | `rgba(139, 92, 246, 0.25)` | Efeitos de iluminação sutil |
| `--accent-blue` | `#38BDF8` | Links secundários, pontos de atenção, tags de código |
| `--accent-gradient` | `linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)` | Manchetes e bordas especiais |

---

## 4. Tipografia

A tipografia reflete o diálogo entre a geometria digital e a fluidez de leitura:

- **Fonte de Títulos:** `Space Grotesk`, sans-serif geométrica com personalidade marcante e toques de modernidade tecnológica.
- **Fonte de Texto Corrido:** `Inter`, sans-serif neutra com alta legibilidade em telas de qualquer densidade de pixels.
- **Fonte de Código e Metadados:** `JetBrains Mono` ou `Consolas`, monospace limpa para tags de tecnologia e marcadores de escopo.

```css
:root {
  --font-heading: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Consolas', monospace;
}
```

---

## 5. Tom de Voz

1. **Autêntico e Consciente:** Reconhece sua posição como estudante do ensino técnico com ambição e disciplina, sem simular senioridade fictícia.
2. **Focado em Design e Clareza:** Destaca o apreço pela organização visual, consistência, tipografia e acessibilidade.
3. **Direto e Convidativo:** Frases concisas, vocabulário técnico preciso em português, comunicação receptiva para contatos educacionais e profissionais.
