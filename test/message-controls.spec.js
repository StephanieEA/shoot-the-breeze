import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';
import MessageControls from '../lib/components/message-controls';

describe('MessageControls', () => {
  it('add messages is called on click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
        <MessageControls addMessage={onButtonClick} />);
    expect(onButtonClick.calledOnce).to.equal(false);
    wrapper.find('.submitBtn').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it.skip('button is disabled when theres no draftMessage', () => {
    const wrapper = shallow(
        <MessageControls disabled={true}/>);
    const inst = wrapper.instance();
    expect(inst.props.disabled).to.equal(true);
  });

  it.skip('button is enabled when there is a draftMessage', () => {
    const fakeDraft = '';
    const wrapper = shallow(
          <MessageControls draftMessage={fakeDraft} />);
    expect(wrapper.find('.submitBtn').props.disabled).to.equal(true);
  });
});
