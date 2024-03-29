# Ignite Lab Design System

Projeto desenvolvido durante o curso da Rocketseat de Criação de Design System

## Tecnologias:

- React
- Typescript
- [Vite](https://vitejs.dev/guide/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Clsx](https://www.npmjs.com/package/clsx)
- [Radix](https://www.radix-ui.com/docs/)
- [Phosphor-react](https://www.npmjs.com/package/phosphor-react)
- [Storybook Deployer](https://www.npmjs.com/package/@storybook/storybook-deployer?activeTab=readme)
- [Storybook a11y](https://www.google.com/search?channel=fs&client=ubuntu&q=storybook+addon+a11y)
- [Storybook interactions](https://storybook.js.org/docs/react/essentials/interactions)

- Outros:
  - Site [transform tools](https://transform.tools/) - converte svg em componente

## Instalação:

### Vite

- `npm create vite@latest`

  - `npm i`

  - `npm run dev`

### Tailwind

- `npm install -D tailwindcss postcss autoprefixer`

  - `npx tailwindcss init -p`

  - (instalar extensões "tailwind" e "postcss" no vscode)

### Storybook

- `npx sb init --builder @storybook/builder-vite --use-npm`

  - `npm run storybook`

  - `npm run build-storybook`

### Clsx

- `npm install --save clsx`

### Radix

- `npm install @radix-ui/react-slot`

  - `npm install @radix-ui/react-checkbox`

### Phosphor

- `npm i phosphor-react`

### Storybook auxiliares:

- Deployer

  - `npm i @storybook/storybook-deployer --save-dev`

    - `npm run deploy-storybook`

- A11y

  - `npm i @storybook/addon-a11y`

- Test

  - `npm i @storybook/testing-library @storybook/jest @storybook/addon-interactions @storybook/test-runner -D`

**P.s.:** o build não tava funcionando direito (não tava criando a branch gh-pages). Mas foi possivel criar a branch rodando direto pelo terminal usando "npm run build-storybook" e "npm run deploy-storybook" e associar a branch ao github pages do repositorio atual em settings/pages para acessar o storybook pelo [github pages](https://lairaalmas.github.io/ignite-lab-design-system/). Mesmo assim por um tempo não funcionou. 🥲
