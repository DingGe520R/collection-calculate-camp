'use strict';
var map_to_three_multiples = function(collections){
  var r=collections.map(function(value,index,collections){
    return (value*3);
 })
 return r;
};

module.exports = map_to_three_multiples;
