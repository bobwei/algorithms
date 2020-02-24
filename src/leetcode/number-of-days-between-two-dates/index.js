/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  const t1 = new Date(date1).getTime();
  const t2 = new Date(date2).getTime();
  return Math.abs(t2 - t1) / (24 * 60 * 60 * 1000);
};
