'use strict';

var Breadcrumb = require('../breadcrumb');

describe('Breadcrumb View', function() {

  beforeEach(function() {
    this.breadcrumb = new Breadcrumb();
  });

  it('Should run a few assertions', function() {
    expect(this.breadcrumb);
  });

});
