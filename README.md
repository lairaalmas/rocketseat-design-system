# Ignite Lab Design System

## Projeto desenvolvido durante o curso da Rocketseat de Criação de Design System

### Tecnologias:

- React
- [Vite](https://vitejs.dev/guide/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Clsx](https://www.npmjs.com/package/clsx)
- [Radix](https://www.radix-ui.com/docs/)
- [Phosphor-react](https://www.npmjs.com/package/phosphor-react)
- [Storybook Deployer](https://www.npmjs.com/package/@storybook/storybook-deployer?activeTab=readme)

### Instalaç

- npm create vite@latest
  - npm i
  - npm run dev
- npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
  - (instalar extensões "tailwind" e "postcss" no vscode)
- npx sb init --builder @storybook/builder-vite --use-npm
  - npm run storybook
  - npm run build-storybook
- npm install --save clsx
- npm install @radix-ui/react-slot
  - npm install @radix-ui/react-checkbox
- npm i phosphor-react
- npm i @storybook/storybook-deployer --save-dev
  - npm run deploy-storybook
