'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var r=[];
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[j]===collection_b[i]){
        r.push(collection_a[j]);
      }
    }
  }
  return r;
}

module.exports = get_intersection;
