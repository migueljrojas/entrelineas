'use strict';

var Share = require('../share');

describe('Share View', function() {

  beforeEach(function() {
    this.share = new Share();
  });

  it('Should run a few assertions', function() {
    expect(this.share);
  });

});
