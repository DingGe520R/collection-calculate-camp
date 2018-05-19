'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  let result = collection.sort((a, b) => a - b)
  let sortArray = []

  for (let i = 0; i < result.length;) {
    if (result.length - i === 2){
      sortArray[i] = result[result.length - 2]
      sortArray[i + 1] = result[result.length - 1]
      i += 2
    } else if (result.length - i === 1){
      sortArray[i] = result[result.length - 1]
      i += 1
    }else {
      let arraySplice = result.slice(i, i + 3);
      sortArray[i] = arraySplice[1]
      sortArray[i + 1] = arraySplice[2]
      sortArray[i + 2] = arraySplice[0]
      i += 3
    }
    
  }

  return sortArray;
}
module.exports = rank_by_two_large_one_small;
