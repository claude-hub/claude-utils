/**
 * 
 * @param {*} callback 
 */
Array.prototype.myMap = function (callback) {
  const result = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result.push(callback(item, i));
  }
  return result;
}
