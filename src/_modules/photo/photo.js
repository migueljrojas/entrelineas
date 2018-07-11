'use strict';

// Constructor
var Photo = function() {
  this.name = 'photo';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Photo;
