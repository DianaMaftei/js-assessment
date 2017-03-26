/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    var myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    var newParse = function(number) {
      if(number.startsWith('0')) {
        return 0;
      } else {
        return parseInt(num);
      }
    };
    return newParse(num);
  },

  identity: function(val1, val2) {
    return val1 === val2;
  }
};
