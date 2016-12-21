import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import MessageInput from '../lib/components/message-input';

describe('MessageInput', () => {
  it('handleChange is called on change', () => {
    const onInputChange = sinon.spy();
    const wrapper = shallow(
    <MessageInput handleChange={ onInputChange } />);
    expect(onInputChange.calledOnce).to.equal(false);
    wrapper.find('input').simulate('change');
    expect(onInputChange.calledOnce).to.equal(true);
  });
});
