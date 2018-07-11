'use strict';

var Columnas = require('../columnas');

describe('Columnas View', function() {

  beforeEach(function() {
    this.columnas = new Columnas();
  });

  it('Should run a few assertions', function() {
    expect(this.columnas);
  });

});
