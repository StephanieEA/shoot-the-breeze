import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';

import UserDisplay from '../lib/components/user-display';

describe('UserDisplay', () => {

  it('renders as a <aside>', () => {
    const wrapper = shallow(<UserDisplay />)
    assert.equal(wrapper.type(), 'aside');
  });

  it('should render a users name', () => {
// figure out what display looks like
// create a fake display to pass
const user = [{user: 'kenia'}]
// pass display prop to user display
const wrapper = shallow(<UserDisplay display={user}/>);
// using enzyme ask wrapper if it has name
expect(wrapper.text()).to.equal('kenia');
  });

  it('should render a users name once', () => {
// figure out what display looks like
// create a fake display to pass
const user = [{user: 'kenia'}, {user: 'kenia'},]
// pass display prop to user display
const wrapper = shallow(<UserDisplay display={user}/>);
// using enzyme ask wrapper if it has name
expect(wrapper.text()).to.equal('kenia');
  });


});
