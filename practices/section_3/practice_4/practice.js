function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var collection=collection_a ;
  for (var i = 0; i < collection.length;) {
    let count = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    result.push({
      key: collection[i],
      count: count
    })
    i += count;
  }
  var n = result.length;
  var c = result[n - 1].key;
  c = c.split('-');
  result[n - 1].key = c[0];
  result[n - 1].count = parseInt(c[1]);
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (result[i].key === object_b.value[j]) {
        result[i].count = result[i].count - Math.floor(result[i].count / 3);
      }
    }
  }
  return result;

}

module.exports = create_updated_collection;
