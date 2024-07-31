# Geynius [![CircleCI](https://dl.circleci.com/status-badge/img/gh/Geynius/frontend/tree/develop.svg?style=svg&circle-token=1ecb456acb311339ae4e881cea55f199ce47c6ed)](https://dl.circleci.com/status-badge/redirect/gh/Geynius/frontend/tree/develop)

Geynius is an online tool that allows users to create Professional Resume, Portfolio and cover letter within minutes.

### Libraries

- [Jest 29](https://jestjs.io/)
- [React 18](https://reactjs.org/)
- [tailwindcss 3](https://tailwindcss.com/)
  - [tailwindcss forms plugin](https://tailwindcss-forms.vercel.app/)
- [TypeScript 4.9.5](https://www.typescriptlang.org/)
- [vite 4](https://vitejs.dev/)

### Tools

- [commitlint 17](https://commitlint.js.org)
- [Conventional Commits 1](https://www.conventionalcommits.org)
- [editorconfig](https://editorconfig.org/)
- [eslint 8](https://eslint.org/)
- [husky 8](https://typicode.github.io/husky/#/)
- [Prettier 2](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)

## Getting started

1. clone the repo

```
git clone https://github.com/Geynius/frontend.git
```

2. Intall dependencies and associated libraries

```
cd frontend
yarn install
```

3. Run Test if you wish.

```
yarn test
```

4. Run the Start the App locally

```
yarn dev
```

## Instructions

1. Upon cloning, always create a new branch with the feature/bug name.
2. Create an issue and assign to yourself
3. Make sure to test before push to the repo
4. Write all reuseable components in the `components` folder
5. Write all main/major screens/pages in the `pages` folder
6. Make sure to run `yarn lint:fix` and `yarn format` to ensure code standard comformity
7. Push and create a PR into the `develop` branch
