import moviesOnFlight from './index';

test('moviesOnFlight', () => {
  expect(moviesOnFlight([90, 85, 75, 60, 120, 150, 125], 250)).toEqual([90, 125]);
});
