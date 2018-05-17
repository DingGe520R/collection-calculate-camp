'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var sum=0;
  for (var i of collection) {
    if (i % 2 != 0) {
      i=i * 3 + 5;
      sum+=i;

    }
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

