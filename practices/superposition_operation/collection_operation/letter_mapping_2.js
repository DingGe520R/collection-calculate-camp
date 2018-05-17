'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var r;
  var sum = 0, aver;
  for (var i of collection) {
    sum += i;
  }
  aver = Math.ceil(sum / collection.length);
  r = String.fromCharCode(aver + 96);

  return r;
}

module.exports = average_to_letter;

