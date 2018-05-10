'use strict';
var map_to_four_multiples_add_one = function(collection){
  var r=collection.map(function(value,index,collection){
    return (value*4)+1;
 })
 return r;
};

module.exports = map_to_four_multiples_add_one;
