import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import UserReposList from './UserReposList';

describe('UserReposList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Provider store={store} ><UserReposList /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
