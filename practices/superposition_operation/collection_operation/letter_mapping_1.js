'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var r=[];
  for( var i in collection){
    if(collection[i]%2==0){
      r.push(String.fromCharCode(collection[i]+96));
    }
  }
  return r;
}

module.exports = even_to_letter;
