# Portfólio Pessoal — Ellen Lopes

> Portfólio autoral, responsivo e de alta acessibilidade desenvolvido para **Ellen Lopes**, estudante do ensino médio integrado ao curso **Técnico de Informática**, com paixão por **Design de Interfaces (UI Design)** e desenvolvimento web.

Construído exclusivamente com **HTML5 semântico, CSS3 moderno e JavaScript puro (Vanilla ES6+)**, sem frameworks ou bibliotecas externas (zero dependências, sem React, Vue, Tailwind ou Bootstrap).

---

## 🌟 Destaques do Projeto

- **Identidade Visual Autoral:** Direção de arte editorial e tecnológica inspirada no Awwwards e SiteInspire, com títulos expressivos em *Space Grotesk*, tipografia de leitura em *Inter* e composições gráficas vetoriais em SVG (sem uso de fotos de banco simulando a autora).
- **Modo Escuro e Claro:** Alternador de tema acessível com persistência em `localStorage` e detecção automática da preferência do sistema operacional (`prefers-color-scheme`).
- **Navegação & ScrollSpy:** Cabeçalho fixo com efeito glassmorphism e indicação em tempo real da seção ativa na rolagem.
- **Menu Móvel Acessível:** Gaveta responsiva deslizante com botão hambúrguer (`aria-expanded`, suporte a fechamento por `Escape` e trava de rolagem).
- **Galeria Editorial de Projetos:**
  - **Destaque:** *E-commerce de Roupas Infantis* — Projeto acadêmico focado na interface de catálogo e telas administrativas de cadastro de produtos (sinalizado honestamente como *Em desenvolvimento*).
  - **GitHub Oficial:** Acesso verificado aos repositórios de código escolar (`https://github.com/lopes37451?tab=repositories`).
  - **Estudos Conceituais:** Fundamentos de interfaces, CSS Grid e algoritmos em Python.
- **Formulário com Fallback Funcional:** Validação de campos e geração instantânea de link `mailto:` pré-formatado, com transparência total sobre a ausência de servidor backend.
- **Currículo Imprimível (`curriculum.html`):** Diagramado especialmente para tela e folha A4 física ou exportação em PDF via `window.print()`.
- **Painel de Referências Visuais (`referencias-visuais.html`):** Documento síntese de 1 página A4 com as 4 referências reais verificadas da Awwwards/SiteInspire, paleta de cores e conclusão.
- **Acessibilidade WCAG 2.1 AA:** Contraste superior a 4.5:1, foco visível (`:focus-visible`), link de salto (Skip Link) e respeito rigoroso a `prefers-reduced-motion`.

---

## 📁 Estrutura de Arquivos

```text
IA-LOPES/
├── AGENTS.md                  # Regras de engenharia, governança e acessibilidade para agentes
├── identidade.md              # Manual de identidade visual, cores e tipografia
├── referencias.md             # Análise detalhada das 4 referências reais verificadas
├── funcionalidades.md         # Matriz de prioridades e critérios de aceitação
├── index.html                 # Página principal do portfólio
├── style.css                  # Folha de estilo completa, tokens de design e responsividade
├── script.js                  # Lógica modular Vanilla JS (tema, menu, scrollspy, validação)
├── curriculum.html            # Currículo autêntico formatado para impressão A4 / PDF
├── referencias-visuais.html   # Painel de referências em 1 página A4 para impressão / PDF
├── README.md                  # Instruções de execução e publicação (este arquivo)
└── assets/                    # Recursos visuais autorais
    ├── favicon.svg            # Favicon vetorial com monograma EL
    ├── hero-graphic.svg       # Ilustração vetorial abstrata do Hero
    ├── ecommerce-preview.svg   # Esquema visual do projeto de e-commerce infantil
    └── code-studies.svg       # Ilustração de estudos de código e fundamentos
```

---

## 🚀 Como Executar Localmente

Como o projeto é 100% estático (HTML, CSS e JS puros), você não precisa instalar pacotes com npm ou ferramentas de build.

### Opção 1: Servidor Local com Python (Recomendado)
Se tiver o Python instalado em sua máquina:
```bash
# Navegue até a pasta do projeto
cd c:\Users\Aluno\Documents\IA-LOPES

# Inicie o servidor HTTP local na porta 8000
python -m http.server 8000
```
Em seguida, abra seu navegador em: **`http://localhost:8000`**

### Opção 2: Abrir diretamente no Navegador
Você pode clicar duas vezes sobre o arquivo `index.html` em seu gerenciador de arquivos (Windows Explorer) para abri-lo diretamente no Google Chrome, Edge ou Firefox.

---

## 🌐 Como Publicar (Deploy na Vercel e GitHub)

O projeto foi preparado especificamente para hospedagem estática gratuita de alta performance na **Vercel**, conectada ao **GitHub**.

### Passo 1: Criar o Repositório no GitHub
1. Acesse sua conta no GitHub: [https://github.com/new](https://github.com/new).
2. Crie um novo repositório (por exemplo: `portfolio-ellen-lopes`).
3. Mantenha-o como **Público** e não adicione README inicial (já temos um).

### Passo 2: Fazer Commit e Push dos Arquivos
No terminal da sua máquina (PowerShell ou Git Bash), dentro da pasta `c:\Users\Aluno\Documents\IA-LOPES`:
```bash
# Inicializar o repositório git local
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: portfolio autoral completo de Ellen Lopes"

# Definir a branch principal
git branch -M main

# Conectar ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/lopes37451/portfolio-ellen-lopes.git

# Enviar os arquivos para o GitHub
git push -u origin main
```

### Passo 3: Publicar Gratuitamente na Vercel
1. Acesse a [Vercel](https://vercel.com/) e faça login com sua conta do GitHub.
2. Clique no botão **"Add New..."** e selecione **"Project"**.
3. Na lista de repositórios do seu GitHub, localize `portfolio-ellen-lopes` e clique em **"Import"**.
4. Nas configurações do projeto:
   - **Framework Preset:** Deixe como **"Other"** (site estático).
   - **Build Command:** Deixe vazio (não há compilação).
   - **Output Directory:** Deixe `./` (diretório raiz).
5. Clique em **"Deploy"**.
6. Em menos de 30 segundos seu site estará publicado com certificado SSL (HTTPS) gratuito!

---

## 📄 Impressão do Currículo e das Referências em PDF

Tanto o arquivo `curriculum.html` quanto o `referencias-visuais.html` possuem folhas de estilo nativas otimizadas para folha A4 (`@media print`):
1. Abra `curriculum.html` ou `referencias-visuais.html` no navegador.
2. Clique no botão **"Imprimir ou Salvar em PDF"** no topo da tela (ou pressione `Ctrl + P`).
3. No diálogo de impressão:
   - **Destino:** Escolha *"Salvar como PDF"*.
   - **Páginas:** Tudo.
   - **Layout:** Retrato.
   - **Mais definições:** Marque a opção *"Gráficos de segundo plano"* (para preservar cores e badges).
4. Clique em **Salvar** para gerar seu arquivo PDF limpo e profissional.

---

## 📋 Governança de Dados
Conforme estabelecido em `AGENTS.md`, este portfólio não inclui informações profissionais inventadas, métricas artificiais ou perfis em redes sociais não informadas (como LinkedIn). Todas as informações refletem o estágio real de estudos de Ellen Lopes no curso Técnico em Informática.
