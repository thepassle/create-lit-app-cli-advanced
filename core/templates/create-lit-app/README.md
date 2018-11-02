## Create-lit-app

[![Built with create-lit-app](https://img.shields.io/badge/built%20with-create--lit--app-blue.svg)](https://github.com/thepassle/create-lit-app) 

## Quickstart

```sh
npm install --global create-lit-app-advanced
create-lit-app-advanced my-app

cd my-app
npm start
```

### npm start

Start `webpack-dev-server` on localhost `http://127.0.0.1:3000`:

```sh
npm run start
```

### npm test

Run tests:

```sh
npm run test
```

### npm build

Run the production build:

```sh
npm run build
node server.js
```

As easy as that! Your app is ready to be deployed.

## Folder Structure

After creation, your project should look like this:

```
create-lit-app-advanced/
  dist/
  node_modules/
  routes/
    api.js
  src/
    actions/
      count.js
    assets/
      favicon.ico
      github.svg
      logo.svg
    components/
      books-demo.js
      hello-world.js
      not-found.js
      redux-demo.js
    reducers/
      count.js
    lit-app-styles.css
    index.html
    lit-app.js
    store.js
  test/
    books-demo.html
    hello-world.html
    index.html
    redux-demo.html
  .babelrc
  .eslintignore
  package-lock.json
  package.json
  README.md
  server.js
  webpack.config.js
```