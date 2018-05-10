'use strict';

function double_to_one(collection) {

  var arr1 = (collection + '').split(',');            //将数组转字符串后再以逗号分隔转为数组
  var arr2 = arr1.map(function (value, index, arr) { //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
     return Number(value);
  });

  var r = arr2.filter(function (value, index, arr2) {
    return index == arr2.indexOf(value);
  });
  return r;
}


module.exports = double_to_one;
