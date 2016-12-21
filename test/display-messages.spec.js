import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import DisplayMessages from '../lib/components/display-messages';

describe('DisplayMessages', () => {
  it('destroy messages is called on click', () => {
    const onButtonClick = sinon.spy();
    const fakeMessages = [{ user: 'kenia', value: 'something' }];
    const wrapper = shallow(
    <DisplayMessages destroy={ onButtonClick } searched={ fakeMessages } />);
    expect(onButtonClick.calledOnce).to.equal(false);
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('formats messages correctly', () => {
    const fakeMessages = [{ user: 'kenia', value: 'something', timeStamp: 'December 21, 10:28 am' }];
    const wrapper = shallow(<DisplayMessages searched={ fakeMessages } />);
    expect(wrapper.find('.user').text()).to.equal('kenia');
    expect(wrapper.find('.value').text()).to.equal('something');
    expect(wrapper.find('.timeStamp').text()).to.equal('December 21, 10:28 am')
  });
});
