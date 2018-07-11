'use strict';

var Photo = require('../photo');

describe('Photo View', function() {

  beforeEach(function() {
    this.photo = new Photo();
  });

  it('Should run a few assertions', function() {
    expect(this.photo);
  });

});
