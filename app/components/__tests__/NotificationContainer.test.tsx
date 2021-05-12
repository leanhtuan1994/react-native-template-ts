import React from 'react';
import { shallow } from 'enzyme';

import NotificationContainer from '../NotificationContainer';

describe('NotificationContainer', () => {
  it('notification match to snapshoot', () => {
    const notification = shallow(<NotificationContainer />);
    expect(notification).toMatchSnapshot();
  });
});
