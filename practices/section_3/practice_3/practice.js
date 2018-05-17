function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var h = {};
  for (let i of collection_a) {
    h[i] === undefined ? h[i] = 1 : h[i]++;
  }
  var c = [];
  for (let j in h) {
    c.push({
      key: j,
      count: h[j]
    })
  }
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (c[i].key === object_b.value[j]) {
        c[i].count = c[i].count - Math.floor(c[i].count / 3);
      }
    }
  }
  return c;

}

module.exports = create_updated_collection;
