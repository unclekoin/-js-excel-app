# Webpack

```bash
$ git checkout -b webpack
```
```bash
$ git push -u origin webpack
```
### [Getting Started](https://webpack.js.org/guides/getting-started/)
```bash
$ npm init -y
$ npm install webpack webpack-cli --save-dev
```
### Plugins
```bash
$ npm install --save-dev html-webpack-plugin
$ npm install copy-webpack-plugin --save-dev
```
### [Loaders](https://webpack.js.org/loaders/#root)
```bash
$ npm install sass-loader sass --save-dev
$ npm install --save-dev mini-css-extract-plugin
$ npm install --save-dev css-loader
$ npm install --save-dev babel-loader @babel/core
```
Add to `package.json`: `"browserslist": "> 0.25%, not dead"`

```bash
$  npm install regenerator-runtime core-js
```
Add to `index.js`:
```js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```
Add to `webpack.config.js`:
```js
output: {
      path: path.resolve(__dirname, 'dist'),
      filename: filename('js'),
      clean: true,
    }
```
[read more...](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)

Add to `webpack.config.js`:
```js
devtool: isDev ? 'source-map' : false
```

### [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
[DevServer webpack](https://webpack.js.org/configuration/dev-server/#root)
```bash
$ npm install webpack-dev-server --save-dev
```
### [EslintWebpackPlugin](https://webpack.js.org/plugins/eslint-webpack-plugin/#root)
```bash
$ npm install eslint-webpack-plugin --save-dev
$ npm install eslint --save-dev
```
[@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)
```bash
$ npm install @babel/eslint-parser --save-dev
```
```bash
$ npm install @babel/plugin-proposal-class-properties --save-dev
```
Create `.eslintrc.js` and `babel.config.json`

[eslint-config-google](https://github.com/google/eslint-config-google)
```bash
$ npm install --save-dev eslint eslint-config-google
```

[ESLint rules](https://eslint.org/docs/2.0.0/rules/)

Fix ESLint error automatically:
```bash
$ npm install --g eslint
$ eslint webpack.config.js src # check
$ eslint --fix webpack.config.js src
```
