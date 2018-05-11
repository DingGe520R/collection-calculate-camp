'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var r = collection.reverse();
  for (var i = 0; i < r.length; i++) {
    if (r[i] % 2 === 0) {
      return r[i];
    }
  }
}

module.exports = find_last_even;
