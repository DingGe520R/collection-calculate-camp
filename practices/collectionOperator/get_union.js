'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var r = [];
  for (var i = 0; i < collection_a.length; i++) {
    r.push(collection_a[i]);
  }
  for (var i = 0; i < collection_b.length; i++) {
    if (!collection_a.includes(collection_b[i])) {  //includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
      r.push(collection_b[i]);
    }
  }
  return r;

}

module.exports = get_union;

