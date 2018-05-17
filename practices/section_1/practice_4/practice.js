function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var r = [];
  var collection = [];
  for (var i in object_b.value) {
    collection.push(object_b.value[i]);
  }

  var collection1 = [];
  for (var i in collection_a) {
    collection1.push(collection_a[i].key);
  }

  return r = collection1.filter(function (value, index, array) {
    if (collection.includes(value) === true) {
      return value;
    }
  })
}

module.exports = collect_same_elements;
