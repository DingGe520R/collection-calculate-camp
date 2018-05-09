'use strict';

function choose_no_repeat_number(collection) {

  var result = [];

  result = collection.filter(function (value,index,array){

  return index == array.indexOf(value);
  })
  return result;
}

module.exports = choose_no_repeat_number;
