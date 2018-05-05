'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
 var a=number_a;
 var b=number_b;
  var r=[];
if(a<b){
  for(var i=a;i<=b;i++){
    r.push(i);
  }
  return r;
}
if(a>b){
  for(var j=a;j>=b;j--){
  r.push(j);
  }
return r;
}
if(a=b){
 r.push(a);
 return r;
}
}
module.exports = get_integer_interval;

