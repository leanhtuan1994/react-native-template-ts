import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';

describe('NavBar', () => {
  it('navbar match to snapshoot', () => {
    const nav = shallow(<NavBar />);
    expect(nav).toMatchSnapshot();
  });
});
