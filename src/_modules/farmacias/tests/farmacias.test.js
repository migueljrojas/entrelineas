'use strict';

var Farmacias = require('../farmacias');

describe('Farmacias View', function() {

  beforeEach(function() {
    this.farmacias = new Farmacias();
  });

  it('Should run a few assertions', function() {
    expect(this.farmacias);
  });

});
