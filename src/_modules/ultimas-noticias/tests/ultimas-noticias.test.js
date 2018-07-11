'use strict';

var UltimasNoticias = require('../ultimas-noticias');

describe('UltimasNoticias View', function() {

  beforeEach(function() {
    this.ultimasNoticias = new UltimasNoticias();
  });

  it('Should run a few assertions', function() {
    expect(this.ultimasNoticias);
  });

});
