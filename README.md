# ![Spire of Babel](logo.png)

> A one stop solution for working with ES2015 and React.

[![Build Status](https://travis-ci.org/neogeek/spire-of-babel.svg?branch=master)](https://travis-ci.org/neogeek/spire-of-babel)
[![Dependency Status](https://david-dm.org/neogeek/spire-of-babel.svg)](https://david-dm.org/neogeek/spire-of-babel)
[![bitHound Overall Score](https://www.bithound.io/github/neogeek/spire-of-babel/badges/score.svg)](https://www.bithound.io/github/neogeek/spire-of-babel)
[![NPM Version](http://img.shields.io/npm/v/spire-of-babel.svg?style=flat)](https://www.npmjs.org/package/spire-of-babel)

## Installation

```bash
$ npm install spire-of-babel -g
```

## Usage

```
Usage: spire-of-babel <path> [options]

Options:

 -h, --help            Display this help message.
 -v, --version         Display the current installed version.
 -b, --bundle          Use browserify bundler.
 -d, --dir             Directory to run linter on.
 -o, --output          Path to save transformed file to. Defaults to stdout.
 -w, --watch           File path to watch for changes. Example: ./test/**/*.jsx
 -l, --lint            Lint files before transpiling.
 -s, --sourcemap       Generate sourcemap.
```

### CLI

```bash
$ spire-of-babel app.js > app.min.js
```

```bash
$ spire-of-babel app.js --bundle > app.min.js
```

```bash
$ spire-of-babel ./react-project/app.jsx --bundle --watch ./react-project/**/*.jsx --output ./react-project/app.min.js
```

### API

```javascript
const spire = require('spire-of-babel');

spire.transformFile('react.jsx', {
    bundle: true,
    sourcemap: true
}).then(function (result) {

    process.stdout.write(result.code);

}).catch(function (err) {

    process.stderr.write(`${err}\n`);

});
```

## Documentation

View full documentation [here](DOCUMENTATION.md).

## Talk

[![](http://i.imgur.com/uiHG5zf.png)](https://speakerdeck.com/neogeek/es2015)
