const assert = require('chai').assert;
const chai = require('chai');
const DisplayMessages = require('../lib/components/display-messages.js');
require('../lib/components/Application.js');


describe('DisplayMessages', function () {
  it('should have a method called render', function () {
    const displayMessages = new DisplayMessages();
    assert.isFunction(displayMessages.render);
  });
});
