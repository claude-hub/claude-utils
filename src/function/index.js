// https://github.com/mqyqingfeng/Blog/issues/11

Function.prototype.myCall = function (context) {
  // 当传入的对象undefined 或者null的时候 this指向全局对象
  // context = context || window;
  if (context === undefined || context === null) {
    context = globalThis; // ES11新增, globalThis指向全局对象
  }

  context.__fn = this; // this 即 f.myCall 的 f
  const args = [...arguments].slice(1);
  const result = context.__fn(...args);
  delete context.__fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (context === undefined || context === null) {
    context = globalThis; // ES11新增, globalThis指向全局对象
  }
  context.__fn = this;
  let result;
  // 处理参数和 call 有区别, apply的第二个参数是一个数组。
  if (arguments[1]) {
    result = context.__fn(...arguments[1])
  } else {
    result = context.__fn()
  }
  return result;
};

Function.prototype.myBind = function(context) {
  const _this = this; // this 即 f.myBind 的 f
  const args = [...arguments].slice(1);
  return function F() {
      if (this instanceof F) {
          return new _this(...args, ...arguments);
      }
      return _this.myApply(context, args.concat(...arguments));
  }
};
