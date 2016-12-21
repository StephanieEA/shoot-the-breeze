const assert = require('chai').assert;
const chai = require('chai');
const Filter = require('../lib/components/filter.js');
require('../lib/components/Application.js');


describe('Filter', function () {
  it('should have a method called render', function () {
    const filter = new Filter();
    assert.isFunction(filter.render);
  });
});
