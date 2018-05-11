'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var c = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > c) {
      c = collection[i];
    }
  }
  return c;
  
  
  
}

module.exports = collect_max_number;
