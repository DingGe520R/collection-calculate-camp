'use strict';
var number_map_to_word_over_26 = function(collection){
  var c=[]
  var r=collection.map(function(value,index,collection){
     if(value<=26) {
     c= String.fromCharCode(value+96);
     }
     else{
      c=String.fromCharCode(97).concat(String.fromCharCode(value%26+96));
     }
     return c;
 })
 return r;
};

module.exports = number_map_to_word_over_26;
