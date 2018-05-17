function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
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
  return result;
}


module.exports = count_same_elements;
