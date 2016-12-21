const assert = require('chai').assert;
const chai = require('chai');
const UserDisplay = require('../lib/components/user-display.js');
require('../lib/components/Application.js');


describe('UserDisplay', function () {
  it('should have a method called render', function () {
    const userdisplay = new UserDisplay();
    assert.isFunction(userdisplay.render);
  });
});
