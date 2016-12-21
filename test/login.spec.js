import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
require('locus');
import Login from '../lib/components/login';

describe('Login', () => {
  it.skip('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Login authorize={onButtonClick}/>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
