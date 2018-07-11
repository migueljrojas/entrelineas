'use strict';

var RelatedArticles = require('../related-articles');

describe('RelatedArticles View', function() {

  beforeEach(function() {
    this.relatedArticles = new RelatedArticles();
  });

  it('Should run a few assertions', function() {
    expect(this.relatedArticles);
  });

});
