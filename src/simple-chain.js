const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
let chain = [];

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      chain.push('( )');
    } else {
      chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (
      !(typeof position === 'number') ||
      !(position % 1 === 0) ||
      position > this.getLength() ||
      position <= 0
    ) {
      chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    chain.reverse();

    return this;
  },
  finishChain() {
    const _scopeChain = chain.join('~~');
    chain = [];

    return _scopeChain;
  },
};

module.exports = {
  chainMaker,
};
