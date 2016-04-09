var fs = require('fs');
var assert = require('assert');

var lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

var spire = require(lib + '/spire-of-babel');

describe('transformFile with babel', function () {

    it('const', function (done) {

        spire.transformFile('./test/fixture/const.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/const.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('function_default_attribute', function (done) {

        spire.transformFile('./test/fixture/function_default_attribute.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/function_default_attribute.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('let', function (done) {

        spire.transformFile('./test/fixture/let.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/let.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

});
