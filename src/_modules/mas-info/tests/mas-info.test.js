'use strict';

var MasInfo = require('../mas-info');

describe('MasInfo View', function() {

  beforeEach(function() {
    this.masInfo = new MasInfo();
  });

  it('Should run a few assertions', function() {
    expect(this.masInfo);
  });

});
