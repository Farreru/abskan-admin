## How to install

### Assumptions

- You can open a shell/terminal/command prompt
- You have `git` instaslled and can run `git` in the shell
- You have `nodejs` installed and can run `node`, `npm` in the shell

Install [`yarn`](https://yarnpkg.com/)

```sh
npm i -g yarn
```

Clone this repository

```sh
git clone https://github.com/themesberg/flowbite-react-admin-dashboard.git
cd flowbite-react-admin-dashboard
```

Install dependencies for this project

```sh
yarn install
```

## How to develop locally

Once run, this command will display a link to the local server.

```sh
yarn dev
```

## How to build for production

Your code won't build if you have TypeScript errors. Otherwise, the command will report how large the output files are, which should go to `dist` folder.

We use [vite](https://vitejs.dev) to build and its default behavior is to emit an `index.html`, `app.js`, and `app.css`.

```sh
yarn build
```
