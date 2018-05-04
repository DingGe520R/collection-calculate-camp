'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  
  for(var i=0 ; i<collection.length ; i++)
  {
   
    if( i ===collection.length-1 ){
      return collection[i];
    }
  }
  
}

module.exports = collect_last_element;
