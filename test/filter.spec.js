import React from 'react';
import sinon from 'sinon';

import { shallow, mount, render } from 'enzyme';
import { expect, assert } from 'chai';

import Filter from '../lib/components/filter';

describe('Filter', () => {

  it('filter messages is called on click', () => {
      const onButtonClick = sinon.spy();
      const fakeMessages = [{user: 'kenia', value: 'something'}]
      const wrapper = shallow(
        <Filter filterMessages={onButtonClick} searched={fakeMessages} />
      );
      expect(onButtonClick.calledOnce).to.equal(false);
      wrapper.find('button').simulate('click');
      expect(onButtonClick.calledOnce).to.equal(true);
    });

    it('handleFilter is called on click', () => {
        const onInputChange = sinon.spy();
        const wrapper = shallow(
          <Filter handleFilter={onInputChange}  />
        );
        expect(onInputChange.calledOnce).to.equal(false);
        wrapper.find('input').simulate('change');
        expect(onInputChange.calledOnce).to.equal(true);
      });

});
