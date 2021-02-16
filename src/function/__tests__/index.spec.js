require('../index');

const obj = {
  c: 3
};

window.c = 10;

function add(a, b) {
  return a + b + this.c;
}

function f() {
  return this;
}

function g() {
  return [...arguments];
}

describe("myCall 测试", () => {
  it("myCall 的第一个参数为 null 时， this 应为 window", () => {
    expect(f.myCall(null)).toBe(window);
  });

  it("myCall 的第一个参数为 undefined 时， this 应为 window", () => {
    expect(f.myCall(undefined)).toBe(window);
  });

  it("myCall 的第一个参数为 空 时， this 应为 window", () => {
    expect(f.myCall()).toBe(window);
  });

  it("myCall 的第一个参数为 obj 时， this 应为 obj", () => {
    expect(add.myCall(obj, 1, 2)).toBe(6);
  });

  it("myCall 的第一个参数为 null 时， this 应为 window", () => {
    expect(add.myCall(null, 1, 2)).toBe(13);
  });
});

describe("myApply 测试", () => {
  it("myApply 的第一个参数为 null 时， this 应为 window", () => {
    expect(f.myApply(null)).toBe(window);
  });

  it("myApply 的第一个参数为 undefined 时， this 应为 window", () => {
    expect(f.myApply(undefined)).toBe(window);
  });

  it("myApply 的第一个参数为 空 时， this 应为 window", () => {
    expect(f.myApply()).toBe(window);
  });

  it("myApply 的第一个参数为 obj 时， this 应为 obj", () => {
    expect(add.myApply(obj, [1, 2])).toBe(6);
  });

  it("myApply 的第一个参数为 null 时， this 应为 window", () => {
    expect(add.myApply(null, [1, 2])).toBe(13);
  });
});

describe("myBind 测试", () => {
  it("bind 的第一个参数为 null 时，this 应为 window", () => {
      const f1 = f.myBind(null);
      expect(f1()).toBe(window);
  });

  it("myBind 的第一个参数为 undefined 时，this 应为 window", () => {
      const f1 = f.myBind(undefined);
      expect(f1()).toBe(window);
  });

  it("myBind 的第一个参数为 空 时，this 应为 window", () => {
      const f1 = f.myBind();
      expect(f1()).toBe(window);
  });

  it("myBind 的第一个参数为 obj 时，直接执行新函数，this 应为 obj", () => {
      const f1 = f.myBind(obj);
      expect(f1()).toEqual(obj);
  });

  it("myBind 的第一个参数为 obj 时，new 新函数， this 应为 实例", () => {
      const f1 = f.myBind(obj);
      const instance1 = new f1();
      expect(instance1).not.toEqual(obj);
      expect(new f1()).toEqual(instance1);
  });

  it("myBind this 后面的参数为 1,2,3 时，直接执行新函数，返回值为 [1,2,3]", () => {
      const g1 = g.myBind(obj, 1, 2, 3);
      expect(g1()).toEqual([1,2,3]);
  });

  it("myBind this 后面的参数为 1,2,3 时，新函数的参数为 4, 5 时，返回值为 [1,2,3,4,5]", () => {
      const g1 = g.myBind(obj, 1, 2, 3);
      expect(g1(4,5)).toEqual([1,2,3,4,5]);
  });

  it("myBind this 后面的参数为 1,2,3 时，new 新函数，返回值为 [1,2,3]", () => {
      const g1 = g.myBind(obj, 1, 2, 3);
      const instance1 = new g1();
      expect(instance1).toEqual([1,2,3]);
  });

  it("myBind this 后面的参数为 1,2,3 时，new 新函数时的参数为 4, 5 时，返回值为 [1,2,3,4,5]", () => {
      const g1 = g.myBind(obj, 1, 2, 3);
      const instance1 = new g1(4,5);
      expect(instance1).toEqual([1,2,3,4,5]);
  });
});