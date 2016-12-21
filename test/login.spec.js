import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
require('locus');
import Login from '../lib/components/login';

describe('Login', () => {

  it.skip('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Login authorize={onButtonClick}/>
    );
    // eval(locus)
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });


});
