/**
 * 节流, 立即执行函数，在规定时间内，只会执行第一次。用于抢购等。
 * 第一次点击有效
 * @param {*} fn 将执行的函数
 * @param {*} time 节流规定的时间
 */
function throttle(fn, time) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      fn.apply(this, args);

      timer = setTimeout(() => {
        timer = null;
      }, time)
    }
  }
}

/**
 * 防抖， 等待指定时间后再执行，用于关键字搜索等。
 * 最后一次触发事件有效
 * @param {*} fn 将执行的函数
 * @param {*} time 指定防抖持续时间
 */
function debounce(fn, time) {
  let timer = null
  
  return (...args) => {
    // 重新执行并停止上次执行（若上次还未执行则会被清除）
    if(timer){
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      timer = null
      // this指向外层函数
      fn.apply(this, args)
    }, time)
  }
}

module.exports = {
  throttle,
  debounce
};
