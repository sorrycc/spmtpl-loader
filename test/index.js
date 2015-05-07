'use strict';

var loader = require('..');

describe('spmtpl-loader', function() {

  it('normal', function() {
    loader('<div>\n\r</div>').should.be.equal('module.exports = \'<div></div>\'');
    loader('<div>\'</div>').should.be.equal('module.exports = \'<div>\\\'</div>\'');
  });

});
