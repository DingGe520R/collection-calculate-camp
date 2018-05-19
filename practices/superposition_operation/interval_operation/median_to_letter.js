'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  var ary = collection;
  var lowMiddle = Math.floor((ary.length - 1) / 2);   // Math.floor（）向下取整
  var highMiddle = Math.ceil((ary.length - 1) / 2);   //Math.ceil  ()  向上取整
  var shu = Number(ary[lowMiddle]) + Number(ary[highMiddle]) / 2;
  shu = Math.ceil(shu);
  var r = String.fromCharCode(97).concat(String.fromCharCode((shu / 5) + 96));
  return r;
}

module.exports = median_to_letter;
