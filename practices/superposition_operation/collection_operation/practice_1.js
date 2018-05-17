'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum=0;
  for (var i of collection) {
    i=i*3+2;
    sum+=i;
  }
  return sum;
}

module.exports = hybrid_operation;

