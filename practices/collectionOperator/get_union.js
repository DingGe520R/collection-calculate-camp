'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var r = [];
  for (var i = 0; i < collection_a.length; i++) {
    r.push(collection_a[i]);
  }
  for (var i = 0; i < collection_b.length; i++) {
    if (!collection_a.includes(collection_b[i])) {
      r.push(collection_b[i]);
    }
  }
  return r;

}

module.exports = get_union;

