exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter(function(number) {
      return item !== number;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) > -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i =0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    return arr.filter(function (item) {
      var i = arr.indexOf(item);
      return arr.indexOf(item, i + 1) > -1;
    }).filter(function(item, j, array){
      return array.indexOf(item) === j;
    });
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
