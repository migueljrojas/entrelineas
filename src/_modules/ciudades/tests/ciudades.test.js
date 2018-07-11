'use strict';

var Ciudades = require('../ciudades');

describe('Ciudades View', function() {

  beforeEach(function() {
    this.ciudades = new Ciudades();
  });

  it('Should run a few assertions', function() {
    expect(this.ciudades);
  });

});
