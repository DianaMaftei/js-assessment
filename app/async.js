exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
        if (value)
          resolve(value);
        else
          reject(value);
    });
  },

  manipulateRemoteData: function(url) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
          if (req.status == 200) {
            resolve (getNames(req.response));
          } else {
            reject(Error(req.statusText));
          }
        };

        req.onerror = function () {
          reject(Error('Network Error'));
        };

        req.send();

        var getNames = function (response) {
          var arr = JSON.parse(response).people;

          var people = [];

          for (var i = 0; i < arr.length; i++) {
            people.push(arr[i].name);
          }

          return people.sort();
        }

      })
  }
};
