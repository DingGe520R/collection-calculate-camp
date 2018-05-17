function count_same_elements(collection) {
  //在这里写入代码
  var r = [];
  for (var i = 0; i < collection.length;) {
    let count = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    r.push({
      key: collection[i],
      count: count
    })
    i += count;
  }
  return r;
}

module.exports = count_same_elements;
