# Portal Dev: site

Site de documentação feito com [Docusaurus](https://docusaurus.io/) 3.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências (Node 22, veja `.nvmrc`) |
| `npm start` | Servidor local com hot reload em `http://localhost:3000/portal-dev/` |
| `npm run build` | Gera o site estático em `build/` (falha em links quebrados) |
| `npm run serve` | Serve o `build/` localmente, inclusive a busca |
| `npm run typecheck` | Verifica os tipos TypeScript |

> A busca local só funciona depois do `npm run build` (use `npm run serve`).

## Estrutura

```text
frontend/
├── docs/                    # conteúdo (uma pasta por categoria)
│   ├── intro.mdx
│   ├── guia-de-estilo.mdx   # referência de todos os componentes
│   └── <categoria>/
│       ├── _category_.json  # rótulo e posição na sidebar
│       ├── index.mdx        # página da categoria (lista os cards)
│       └── <topico>.mdx
├── templates/doc-template.mdx  # modelo para novas páginas
├── src/
│   ├── components/          # Badge, TechIcon, CategoryGrid
│   ├── css/custom.css       # tema (cores, alertas, código)
│   ├── pages/index.tsx      # home
│   └── theme/MDXComponents.tsx  # componentes globais nos .mdx
├── i18n/pt-BR/code.json     # traduções da busca
└── static/img/              # logos, favicons e social card
```

## Nova página

1. Copie `templates/doc-template.mdx` para `docs/<categoria>/<topico>.mdx`.
2. Ajuste `title`, `sidebar_position` e `description` no front matter.
3. Para uma subcategoria, crie uma pasta com `_category_.json` e `index.mdx`.

Os componentes `Tabs`, `TabItem`, `Badge`, `TechIcon`, `DocCardList` e `CategoryGrid` podem ser usados
sem import. Veja exemplos em `/docs/guia-de-estilo`.
