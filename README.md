# ![Spire of Babel](logo.png)

> A one stop solution for working with ES2015 and React.

[![Build Status](https://travis-ci.org/neogeek/spire-of-babel.svg?branch=master)](https://travis-ci.org/neogeek/spire-of-babel)
[![codecov](https://img.shields.io/codecov/c/github/neogeek/spire-of-babel/master.svg)](https://codecov.io/gh/neogeek/spire-of-babel)
[![Dependency Status](https://david-dm.org/neogeek/spire-of-babel.svg)](https://david-dm.org/neogeek/spire-of-babel)
[![Known Vulnerabilities](https://snyk.io/test/npm/spire-of-babel/badge.svg)](https://snyk.io/test/npm/spire-of-babel)
[![bitHound Overall Score](https://www.bithound.io/github/neogeek/spire-of-babel/badges/score.svg)](https://www.bithound.io/github/neogeek/spire-of-babel)
[![NPM Version](http://img.shields.io/npm/v/spire-of-babel.svg?style=flat)](https://www.npmjs.org/package/spire-of-babel)
[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/neogeek/spire-of-babel)

Spire of Babel is a zero-config tool takes the guess-work out of setting up a project written in ES2015 and React. In addition to converting ES2015 with [Babel](https://babeljs.io/), Spire of Babel also comes with a [bundler](https://github.com/babel/babelify) for using both `require('')` and `import` styled module loaders, minification, linting with [ESLint](http://eslint.org/), and auto-generated sourcemaps.

## Installation

```bash
$ npm install spire-of-babel -g
```

## Usage

```
Usage: spire-of-babel <path> [options]

Options:

 -h, --help         Display this help message.
 -v, --version      Display the current installed version.
 -b, --bundle       Use browserify bundler.
 -d, --dir          Directory to run linter on.
 -l, --lint         Lint files before transpiling.
 -m, --minify       Minify output.
 -o, --output       Path to save transformed file to. Defaults to stdout.
 -s, --sourcemap    Generate sourcemap.
 -w, --watch        File path to watch for changes. Example: ./test/**/*.jsx
```

### CLI

```bash
$ spire-of-babel es6.js > es5.js
```

```bash
$ spire-of-babel app.js --bundle --minify > app.min.js
```

```bash
$ spire-of-babel ./react-project/app.jsx --bundle --minify --watch './react-project/**/*.jsx' --output ./react-project/app.min.js
```

### [Babel Plugins](https://babeljs.io/docs/plugins/) via `.babelrc`

Spire of Babel works in the same way that Babel would in that it will use a `.babelrc` file located within your project for additional configuration.

To add plugins not [already included](package.json) in Spire of Babel, add them to a `.babelrc` file located in the root of your project.

**.babelrc**

```json
{
  "plugins": ["transform-async-generator-functions"]
}
```

See <https://babeljs.io/docs/plugins/transform-async-generator-functions/> for more information about the above example.

### API

```javascript
const spire = require('spire-of-babel');

spire.transformFile('react.jsx', {
    bundle: true,
    minify: true,
    sourcemap: true
}).then(function (result) {

    process.stdout.write(result.code);

}).catch(function (err) {

    process.stderr.write(`${err}\n`);

});
```

## Documentation

View full documentation [here](https://doxdox.org/neogeek/spire-of-babel).

## Talk

[![](http://i.imgur.com/2ST0FoI.png)](https://speakerdeck.com/neogeek/intro-to-es2015)
