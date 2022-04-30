const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const EARS = '^^';

function isCat(value) {
  return value === EARS;
}

function countCats(cats) {
  const catsInBackyard = cats.reduce((acc, catsRow) => {
    const catsInRow = catsRow.reduce((acc, cat) => {
      return isCat(cat) ? acc + 1 : acc;
    }, 0);

    return acc + catsInRow;
  }, 0);

  return catsInBackyard;
}

module.exports = {
  countCats,
};
