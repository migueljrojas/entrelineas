'use strict';

var MasLeido = require('../mas-leido');

describe('MasLeido View', function() {

  beforeEach(function() {
    this.masLeido = new MasLeido();
  });

  it('Should run a few assertions', function() {
    expect(this.masLeido);
  });

});
