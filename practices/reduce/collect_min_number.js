'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var c = [];
  for (var i = 0; i < collection.length; i++) {
     c=collection[0];
    if (collection[i] < c) {
      c = collection[i];
    }
  }
  return c;
}

module.exports = collect_min_number;

