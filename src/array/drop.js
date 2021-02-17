/**
 * 得到数组过滤掉左边count个后剩余元素组成的数组
 * 不改变当前数组, count默认是1
 * @param {*} array 
 * @param {*} count 
 */
function drop(array, count = 1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index >= count)
}

/**
 * 得到当前数组过滤掉右边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * @param {*} array 
 * @param {*} count 
 */
function dropRight(array, count = 1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index < array.length - count)
}

module.exports = {
  drop,
  dropRight
}