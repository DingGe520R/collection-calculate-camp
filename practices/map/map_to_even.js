'use strict';
function map_to_even(collection){
 var r=collection.map(function(value,index,collection){
    return value*2;
 })
 return r;
}
module.exports = map_to_even;
