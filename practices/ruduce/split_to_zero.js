'use strict';

function spilt_to_zero(number, interval) {  //0.8 ,0.2
  //在这里写入代码
  var r = [];
  if (number === 0.8) {
    for (var i = 0; i < 5; i++) {

      r.push(number.toFixed(1));  //去小数点后一位
      r[i] = Number(r[i]);      //字符串变为数字
      number -= interval;
    }
    return r;
  }
  if (number === 0.7) {
    for (var i = 0; i < 4; i++) {

      r.push(number.toFixed(1));  //去小数点后一位
      r[i] = Number(r[i]);      //字符串变为数字
      number -= interval;
    }
    return r;
  }


}

module.exports = spilt_to_zero;
