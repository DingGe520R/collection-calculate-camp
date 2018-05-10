'use strict';
var number_map_to_word = function(collection){
  var c=[]
  var r=collection.map(function(value,index,collection){
     return  String.fromCharCode(value+96);
 })
 return r;
};

module.exports = number_map_to_word;
