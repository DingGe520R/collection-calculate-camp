'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var ary = collection.split('->').sort(function (a, b) {   //将str1以指定的"->”为分界，分割成一个数组，结果是一个数组
    return a - b;                                          //sort() 将数组进行升序操作
  });

  var lowMiddle = Math.floor((ary.length - 1) / 2);
  var highMiddle = Math.ceil((ary.length - 1) / 2);
  return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
}

module.exports = compute_chain_median;
