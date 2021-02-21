const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

/**
 * 实现一个完美的符合Promise/A+规范的Promise
 * @param {*} callback 
 */
function myPromise(callback) {
  const that = this;
  that.status = PENDING; // 初始状态
  that.value = undefined; // 成功回调的原因
  that.reason = undefined; // 失败回调的原因

  function resolve(value) {
    // 保证状态的改变是不可逆的
    if (that.status === PENDING) {
      that.value = value;
      that.status = RESOLVED;
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.reason = reason;
      that.status = REJECTED;
    }
  }

  try {
    callback(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function(onFullFilled, onRejected) {
  const that = this;
  switch(that.status) {
    case RESOLVED: 
      onFullFilled(that.value);
      break;
    case REJECTED:
      onRejected(that.reason)
      break;
    default: return;
  }
}

module.exports = {
  myPromise
}