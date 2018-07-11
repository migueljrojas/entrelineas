'use strict';

var Tapa = require('../tapa');

describe('Tapa View', function() {

  beforeEach(function() {
    this.tapa = new Tapa();
  });

  it('Should run a few assertions', function() {
    expect(this.tapa);
  });

});
