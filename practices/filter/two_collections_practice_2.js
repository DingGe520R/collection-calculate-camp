'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var r=[];
   return r = collection_a.filter(function (value,index,array){
    if (collection_b.includes(value) ===false) {
      return value;
    }
})
}

module.exports = choose_no_common_elements;
