/**
 * map
 * @param {*} callback 
 */
Array.prototype.myMap = function (callback) {
  const result = [];
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    result.push(callback(item, index));
  }
  return result;
}

/**
 * reduce
 * @param {*} callback callback接受4个参数, result上一次的结果, current当前值, index当前下标, array源数组
 * @param {*} initValue 初始值
 */
Array.prototype.myReduce = function (callback, initValue) {
  let result = initValue;
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, item, index, array)
  }
  return result;
}

/**
 * filter
 * @param {*} callback 
 */
Array.prototype.myFilter = function (callback) {
  const arr = [];
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (callback(item, index)) {
      arr.push(item);
    }
  }
  return arr;
}

/**
 * find
 * @param {*} callback 
 */
Array.prototype.myFind = function (callback) {
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(callback(item, index)) {
      return item;
    }
  }
  return undefined;
}

/**
 * findIndex
 * @param {*} callback 
 */
Array.prototype.myFindIndex = function (callback) {
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(callback(item, index)) {
      return index;
    }
  }
  return -1;
}

/**
 * every
 * @param {*} callback 
 */
Array.prototype.myEvery = function (callback) {
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(!callback(item, index)) {
      return false;
    }
  }
  return true;
}

/**
 * some
 * @param {*} callback 
 */
Array.prototype.mySome = function (callback) {
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(callback(item, index)) {
      return true;
    }
  }
  return false;
}

/**
 * contact
 * @param  {...any} args 
 */
Array.prototype.myContact = function (...args) {
  const array = this;
  const arr = [...array]
  args.forEach(value => {
    if (Array.isArray(value)) {
      arr.push(...value)
    } else {
      arr.push(value)
    }
  })
  return arr;
}


/**
 * slice()数组切片, 原数组的浅拷贝(包括 begin，不包括end)。原始数组不会被改变。
 * @param {*} begin 开始下标
 * @param {*} end 结束下标
 */
Array.prototype.mySlice = function (begin, end) {
  const array = this;
  // 如果当前数组是[], 直接返回[]
  if (array.length === 0) {
    return [];
  }

  // 如果begin超过最大下标, 直接返回[]
  begin = begin || 0
  if (begin >= array.length) {
    return [];
  }

  // 如果end不大于begin, 直接返回[]
  end = end || array.length
  if (end > array.length) {
    end = array.length
  }
  if (end <= begin) {
    return [];
  }

  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中
  const arr = []
  for (let index = begin; index < end; index++) {
    arr.push(array[index])
  }

  return arr;
}