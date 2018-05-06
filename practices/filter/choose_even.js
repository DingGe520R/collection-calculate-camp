'use strict';

function choose_even(collection) {

  //在这里写入代码
  var r=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2===0)
     r.push(collection[i]);
  }
  return r;
}

module.exports = choose_even;
