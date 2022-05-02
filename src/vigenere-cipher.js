const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(direction = true) {
    this._direct = direction;
  }

  _encrypt(message, messageKey) {
    message = message.toUpperCase();
    messageKey = messageKey.toUpperCase();
    let encryptedMessage = '';
    let k = 0;

    for (let i = 0; i < message.length; i++) {
      if (a.indexOf(message[i]) === -1) {
        encryptedMessage += message[i];
        continue;
      }

      if (k === messageKey.length) k = 0;

      const encryptedPos = (a.indexOf(message[i]) + a.indexOf(messageKey[k])) % a.length;
      encryptedMessage += a.slice(encryptedPos, encryptedPos + 1);

      ++k;
    }

    return encryptedMessage;
  }

  _decrypt(encryptedMessage, messageKey) {
    messageKey = messageKey.toUpperCase();
    let message = '';
    let k = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (a.indexOf(encryptedMessage[i]) === -1) {
        message += encryptedMessage[i];
        continue;
      }

      if (k === messageKey.length) k = 0;

      const messagePos = (a.indexOf(encryptedMessage[i]) - a.indexOf(messageKey[k])) % a.length;
      if (messagePos === -1) {
        message += a.slice(messagePos, a.length);
      } else {
        message += a.slice(messagePos, messagePos + 1);
      }

      ++k;
    }

    return message;
  }

  encrypt(message, messageKey) {
    if (!(message && messageKey)) throw new Error('Incorrect arguments!');

    const encryptedMessage = this._direct
      ? this._encrypt(message, messageKey)
      : this._encrypt(message, messageKey).split('').reverse().join('');

    return encryptedMessage;
  }

  decrypt(encryptedMessage, messageKey) {
    if (!(encryptedMessage && messageKey)) throw new Error('Incorrect arguments!');

    const decryptedMessage = this._direct
      ? this._decrypt(encryptedMessage, messageKey)
      : this._decrypt(encryptedMessage, messageKey).split('').reverse().join('');

    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
