'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var r=[];
  for (var i of collection) {
    if(i%2!=0){
    r.push( i * 3 + 2);
    
    }
  }
  return r;
}

module.exports = hybrid_operation_to_uneven;

