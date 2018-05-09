'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var h = {};
  var num = 0;
  for (var i = 0; i < collection.length; i++) {
    var a = collection[i];
    h[a] === undefined ? h[a] = 1 : (h[a]++);
  }

  return h;
}

module.exports = grouping_count;
