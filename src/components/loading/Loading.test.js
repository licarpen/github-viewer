import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
