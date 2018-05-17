function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var r = [];
  var collection = [];
  for (var i in object_b.value) {
    collection.push(object_b.value[i]);
  }
  return r = collection_a.filter(function (value, index, array) {
    if (collection.includes(value) === true) {
      return value;
    }
  })
}

module.exports = collect_same_elements;
