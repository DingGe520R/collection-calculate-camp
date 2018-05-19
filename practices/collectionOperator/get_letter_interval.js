'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var r = [];
  var n = 96;
  var k = 0;
  if(number_a<number_b){
  for (var i = number_a; i <= number_b; i++) {
    k = String.fromCharCode(n+i);
    r.push(k);
   
  }
  return r;
}
if(number_a>number_b){
  for (var i = number_a; i >= number_b; i--) {
    k = String.fromCharCode(n+i);
    r.push(k);
    
  }
  return r;
}
  if (number_a== number_b) {
    for (var i = number_a; i >= number_b; i--) {
      k = String.fromCharCode(n + i);
      r.push(k);

    }
    return r;
  }
}

module.exports = get_letter_interval;
