'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var r=[];
  var n=96;
for(var i=0;i<number_b.length;i++){
    n+=1;
    r.push(n);
}
return String.fromCharCode(r);
}

module.exports = get_letter_interval;
