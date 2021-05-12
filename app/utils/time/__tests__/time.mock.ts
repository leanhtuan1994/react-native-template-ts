import { convertMinutesToHoursAnMinutes } from '../time';

it('time utils', () => {
  expect(convertMinutesToHoursAnMinutes(90)).toEqual({ hours: 1, minutes: 30 });
});
