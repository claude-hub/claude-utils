/**
 * 获取arr1中，不包含arr2的数组(不改变原数组)
 * @param {*} arr1 
 * @param {*} arr2 
 */
function difference(arr1, arr2) {
  if (arr1.length === 0) {
    return []
  } else if (arr2.length === 0) {
    return arr1.slice();
  }
  return arr1.filter(item => arr2.indexOf(item) === -1)
}

module.exports = {
  difference
}