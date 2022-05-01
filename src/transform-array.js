const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  const newArr = [];
  let discardFlag = 0;

  arr.forEach((el, i) => {
    if (discardFlag) {
      discardFlag = 0;
    } else {
      switch (el) {
        case DISCARD_NEXT:
          if (i === arr.length - 1) break;
          discardFlag = 1;
          break;

        case DISCARD_PREV:
          if (i === 0) break;
          if (arr[i - 2] === DISCARD_NEXT) break;
          newArr.pop();
          break;

        case DOUBLE_NEXT:
          if (i === arr.length - 1) break;
          newArr.push(arr[i + 1]);
          break;

        case DOUBLE_PREV:
          if (i === 0) break;
          if (arr[i - 2] === DISCARD_NEXT) break;
          newArr.push(arr[i - 1]);
          break;

        default:
          newArr.push(el);
          break;
      }
    }
  });

  return newArr;
}

module.exports = {
  transform,
};
