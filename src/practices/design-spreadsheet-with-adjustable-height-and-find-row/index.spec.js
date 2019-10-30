import Spreadsheet from './index';

test('Spreadsheet', () => {
  const spreadsheet = new Spreadsheet();
  /*
    Each element in the array represents height of row i
    Initial data = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    When height is 16, the row should be index of 3
  */
  expect(spreadsheet.getRow(16)).toEqual(3);
  expect(spreadsheet.getRow(21)).toEqual(4);

  /*
    Update to [10, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    So when height is 16, the row should be index of 2
  */
  spreadsheet.update(0, 10);
  expect(spreadsheet.getRow(16)).toEqual(2);
});
