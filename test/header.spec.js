import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';

import Header from '../lib/components/Header';

describe('Header', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.type(), 'header');
  });

  it('should render an <h1> of Shoot the Breeze!', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).to.equal('Shoot the Breeze!');
  });

  it('should render an <h2> that displays welcome user.email', () => {
    const fakeEmail = 'seandrews11@gmail.com';
    const wrapper = shallow(<Header email={fakeEmail}/>);
    expect(wrapper.find('h2').text()).to.equal('Welcome seandrews11@gmail.com');
  });
});
