---
title: Getting Started
menu: info
route: get-started
---

# Installation

To use Pivotal UI in a Node.js project, first install the latest version of Node LTS. [See here for instructions.](https://docs.npmjs.com/getting-started/installing-node)

Then, install the `pivotal-ui` Node module:

```bash
# if using yarn:
yarn add pivotal-ui

# if using npm:
npm install --save pivotal-ui
```

# Usage with Create React App

To get started using Pivotal UI with Create React App (CRA), follow these steps:

1. Install the latest version of Node LTS. [See here for instructions.](https://docs.npmjs.com/getting-started/installing-node)

2. Create a new CRA project with this command:

```bash
npx create-react-app some-directory
```

At this point, you'll be able to start up the default CRA app locally:

```bash
cd some-directory
yarn start
```

For more information on Create React App, see the [CRA readme](https://github.com/facebook/create-react-app).

3. Install the `pivotal-ui` node module:

```bash
yarn add pivotal-ui
```

4. Open `src/App.js` and replace the contents with:

```jsx harmony
::nonInteractive
import React, {Component} from 'react';
import {DefaultButton} from 'pivotal-ui/react/buttons';

export default class App extends Component {
  render() {
    return <DefaultButton>Click Me</DefaultButton>;
  }
}
```

## Sass

Please refer to the [create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

# Using CSS only

For non-React projects, Pivotal UI's styles can be included in two different ways.

## With Webpack

For projects that are using Webpack and the [css-loader](https://github.com/webpack-contrib/css-loader), the CSS for each component can be imported directly into JavaScript files like this:

```jsx harmony
::nonInteractive
import 'pivotal-ui/css/alerts';
```

See the documentation of individual components for how to import each one.

## With a link tag

For projects that are not using Webpack, our compiled CSS is made available via a CDN:

`http://d2bsvk2etkq8vr.cloudfront.net/pui-css/pui-components-<VERSION>.css`

For example, CSS for version 16.0.0 is available at http://d2bsvk2etkq8vr.cloudfront.net/pui-css/pui-components-16.0.0.css

These files can be included with a `<link>` tag in an HTML file like this:

```html
::nonInteractive
<link rel="stylesheet" href="http://d2bsvk2etkq8vr.cloudfront.net/pui-css/pui-components-16.0.0.css">
```

# Unit testing with Jasmine

- Install pui-react-tools, `yarn add --dev pui-react-tools`

- Install gulp@next (Make sure its version is ^4.0.0), `yarn add --dev gulp@next`

- Install babel-core and babel-polyfill, `yarn add --dev babel-core babel-polyfill`

- Install puppeteer, `yarn add --dev puppeteer`

- Install jquery, `yarn add --dev jquery`

- Install spy-on-render, `yarn add --dev spy-on-render`

- Install jasmine_dom_matchers, `yarn add --dev jasmine_dom_matchers`

- Create a `.babelrc` file in your project root

```jsx harmony
::nonInteractive
{
  "presets": [["es2015", {"loose": true}], "react"]
}
```

- Create gulpfile.babel.js to install the jasmine task with a webpack config

```jsx harmony
::nonInteractive
import {Jasmine} from 'pui-react-tools';
import 'babel-polyfill';

Jasmine.install({
  webpack: {
    test: () => {
      return {
        devtool: 'cheap-module-source-map',
        module: {
          rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['react']}},
            {test: /css$/, loader: 'css-loader'},
            {test: /svg$/, loader: 'file-loader'}
          ]
        },
        output: {filename: '[name].js'},
        watch: true
      }
    }
  },
  appGlobs: ['src/*.test.js'],
  headlessServerOptions: {
    includeStackTrace: true,
    random: false,
    isVerbose: false,
    port: 8888,
    driver: 'chrome'
  },
  headlessSpecRunnerOptions: {profile: true},
});
```

- Create a `spec_helper.js` that imports necessary dependencies and sets up tests

```jsx harmony
::nonInteractive
import $ from 'jquery';
import 'jasmine_dom_matchers';
import ReactDOM from 'react-dom';
import 'spy-on-render';

Object.assign(global, {
  $,
  jQuery: $,
  ReactDOM
});

beforeEach(() => {
  $('body').find('#root').remove().end().append('<main id="root"/>');
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(root);
});
```

- Import `spec_helper.js` in your test file. Render into root and assert against jquery selectors.

```jsx harmony
::nonInteractive
import React from 'react';
import App from './App';
import 'path/to/spec_helper';

describe('app', () => {
  beforeEach(() => {
    spyOnRender(App).and.callThrough();
    ReactDOM.render(<App/>, root);
  });

  it('renders without crashing', () => {
    expect('.App').toExist();
    expect(App).toHaveBeenRenderedWithProps({});
  });
});
```

- Run `gulp jasmine` and go to localhost:8888

# Linting

- Install pui-react-tools, `yarn add --dev pui-react-tools`

- Install gulp@next (Make sure its version is ^4.0.0), `yarn add --dev gulp@next`

- Create a `.babelrc` file in your project root

```jsx harmony
::nonInteractive
{
  "presets": [["es2015", {"loose": true}], "react"]
}
```

- Create gulpfile.babel.js to install the link task

```jsx harmony
::nonInteractive
import {Jasmine} from 'pui-react-tools';
Lint.install({globs: ['src/**/*.js']});
```

- Create an .eslintrc file, see the [pivotal-ui example](https://github.com/pivotal-cf/pivotal-ui/blob/master/.eslintrc)