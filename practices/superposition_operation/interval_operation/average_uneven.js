'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var c=0;
  for (var i of collection) {
    if (i % 2 != 0) {
      c++;
      sum += i;
    }
  }
 var aver=sum/c;
 return aver;
}


module.exports = average_uneven;
