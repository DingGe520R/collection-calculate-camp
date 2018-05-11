'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var c=0;
  for(var i=0;i<collection_a.length;i++){
   
    if(collection_a[i]===collection_b[i]){
         c++;
    }

  }
  var r=true;
  if(c===collection_a.length){
    return r;
  }
  document.write(r);
}

module.exports = compare_collections;


