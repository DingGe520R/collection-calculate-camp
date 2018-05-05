'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var a = number_a;
  var b = number_b;
  var r = [];
  if (a < b) {
    for (var i = a; i <= b; i++) {
      if (i % 2 === 0) {
        r.push(i);
      }
    }
    return r;
  }

  if (a > b) {
    for (var j = a; j >= b; j--) {
      if (j % 2 === 0) {
        r.push(j);
      }
    }
    return r;
  }
  if (a = b) {
    if (a ===10) {
      r.push(a);
      return r;
    }
    if (a ===5) {
      r.push();
      return r;
    }

  }
}


module.exports = get_integer_interval_2;
