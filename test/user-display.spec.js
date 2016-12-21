import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';

import UserDisplay from '../lib/components/user-display';

describe('UserDisplay', () => {
  it('renders as a <aside>', () => {
    const wrapper = shallow(<UserDisplay />);
    assert.equal(wrapper.type(), 'aside');
  });

  it('should render a users name', () => {
    const user = [{ user: 'kenia' }];
    const wrapper = shallow(<UserDisplay display={user}/>);
    expect(wrapper.text()).to.equal('kenia');
  });

  it('should render a users name once', () => {
    const user = [{ user: 'kenia' }, { user: 'kenia' }];
    const wrapper = shallow(<UserDisplay display={user}/>);
    expect(wrapper.text()).to.equal('kenia');
  });
});
