'use strict';

var Recomendados = require('../recomendados');

describe('Recomendados View', function() {

  beforeEach(function() {
    this.recomendados = new Recomendados();
  });

  it('Should run a few assertions', function() {
    expect(this.recomendados);
  });

});
