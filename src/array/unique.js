// 去重

/**
 * 利用ES6语法
 * @param {*} array 
 */
function unique(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}

/**
 * forEach()和indexOf(), 双重遍历
 * @param {*} array 
 */
function unique1(array) {
  const arr = [];
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  });
  return arr;
}

/**
 * 利用object hasOwnProperty，一层遍历
 * @param {*} array 
 */
function unique2(array) {
  const arr = []
  const obj = {}
  array.forEach(item => {
    // if (!obj.hasOwnProperty(item)) {
    if(!obj[item]) {
      obj[item] = true
      arr.push(item)
    }
  })
  return arr
}

module.exports = {
  unique,
  unique1,
  unique2
}
