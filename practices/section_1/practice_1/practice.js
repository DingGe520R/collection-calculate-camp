function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var r=[];
 return r = collection_a.filter(function (value,index,array){
    if (collection_b.includes(value) === true) {
          return value;
        }
    })
  }
module.exports = collect_same_elements;
