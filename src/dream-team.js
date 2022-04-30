const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;

  const teamNameArr = [];

  members.forEach((name) => {
    if (typeof name === 'string') teamNameArr.push(name.trim()[0].toUpperCase());
  });

  if (teamNameArr.length === 0) return false;

  const teamName = teamNameArr.sort().reduce((team, letter) => team + letter, '');

  return teamName;
}

module.exports = {
  createDreamTeam,
};
