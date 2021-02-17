/**
 * 数组扁平化，利用ES6 some concat
 * @param {Array} array 
 */
function flatten(array) {
  let arr = [].concat(...array)
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}


/**
 * 数组扁平化，利用递归 reduce contact
 * @param {Array} array 
 */
function flatten1(array) {
  return array.reduce((pre, item) => {
    if (Array.isArray(item) && item.some(cItem => Array.isArray(cItem))) {
      return pre.concat(flatten1(item))
    } else {
      return pre.concat(item)
    }
  }, [])
}

module.exports = {
  flatten,
  flatten1
}
