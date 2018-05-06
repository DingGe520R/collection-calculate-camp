'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var r = [];
  var n = 97;
  var k = 0;
  for (var i = number_a; i <= number_b; i++) {
    k = String.fromCharCode(n);
    r.push(k);
    n++;
  }
  return r;
}

module.exports = get_letter_interval;
