const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
const seasons = [
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  'winter',
];

function getSeason(date) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  if (date.toString() === 'Invalid Date') throw new Error('Invalid date!');
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (!(Object.getOwnPropertyNames(date).length === 0)) throw new Error('Invalid date!');

  return seasons[date.getMonth()];
}

module.exports = {
  getSeason,
};
