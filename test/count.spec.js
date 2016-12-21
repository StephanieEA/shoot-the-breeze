import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';

import Count from '../lib/components/count';

describe('Count', () => {

  it('renders as a <p>', () => {
    const wrapper = shallow(<Count />)
    assert.equal(wrapper.type(), 'p');
  });

  it('should not render anything on default', () => {
    const fakeDraft = '';
    const draftCount = fakeDraft.length;
    const wrapper = shallow(<Count
      count={draftCount}
      draft={fakeDraft}/>);
    expect(wrapper.text()).to.equal('0');
  });

  it('should render 5 if draftMessage is 5 letter word', () => {
    let fakeDraft = '';
    let draftCount = fakeDraft.length;
    let wrapper = shallow(<Count
      count={draftCount}
      draft={fakeDraft}/>);
    expect(wrapper.text()).to.equal('0');
    fakeDraft='kenia';
    draftCount = fakeDraft.length;
    wrapper = shallow(<Count
      count={draftCount}
      draft={fakeDraft}/>);
    expect(wrapper.text()).to.equal('5');
  });

});
