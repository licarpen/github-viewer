import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import Search from './Search';

describe('Search component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Provider store={store} ><Search /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
