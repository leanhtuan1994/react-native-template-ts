import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from '../NavBar';

it('renders NavBar', () => {
  const tree = renderer.create(<NavBar title="Test" />).toJSON();

  expect(tree).toMatchSnapshot();
});
