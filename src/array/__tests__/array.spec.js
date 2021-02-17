require('../array');

const array = [1, 2, 3, 4, 5];

describe("myMap 测试", () => {
  it("myMap, 第一个参数值测试", () => {
    expect(array.myMap((item) => item * 10)).toEqual([10, 20, 30, 40, 50]);
  });
  it("myMap, 第二个参数下标测试", () => {
    expect(array.myMap((_, index) => index)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("myReduce 测试", () => {
  it("myReduce, 功能测试", () => {
    const res = array.myReduce((res, value) => {
      return res + value;
    }, 0);
    expect(res).toBe(15);
  });
  it("myReduce, 第二个参数初始值测试", () => {
    const res = array.myReduce((res, value) => {
      return res + value;
    }, 10);
    expect(res).toBe(25);
  });
});

describe("myFilter 测试", () => {
  it("myFilter, 第一个参数值测试", () => {
    const res = array.myFilter(item => item % 2 === 1);
    expect(res).toEqual([1, 3, 5]);
  });
  it("myFilter, 第二个参数下标测试", () => {
    // 下标对2取余，对应的arr值就是arr[1] => 2
    const res = array.myFilter((_, index) => index % 2 === 1);
    expect(res).toEqual([2, 4]);
  });
});

describe("myFind 测试", () => {
  it("myFind, 功能测试测试", () => {
    const res = array.myFind(item => item === 1);
    expect(res).toBe(1);
  });

  it("myFind, not fond", () => {
    const res = array.myFind(item => item === 9);
    expect(res).toBe(undefined);
  });
});

describe("myFindIndex 测试", () => {
  it("myFindIndex, 功能测试测试", () => {
    const index = array.myFindIndex(item => item === 4);
    expect(index).toBe(3);
  });

  it("myFindIndex, not fond", () => {
    const index = array.myFindIndex(item => item === 9);
    expect(index).toBe(-1);
  });
});

describe("myEvery 测试", () => {
  it("myEvery, 返回true", () => {
    const res = array.myEvery(item => item > 0);
    expect(res).toBe(true);
  });

  it("myEvery, 返回false", () => {
    const res = array.myEvery(item => item > 2);
    expect(res).toBe(false);
  });
});

describe("mySome 测试", () => {
  it("mySome, 有一个满足条件，返回true", () => {
    const res = array.mySome(item => item > 3);
    expect(res).toBe(true);
  });

  it("mySome, 所有都不满足条件，返回false", () => {
    const res = array.mySome(item => item > 100);
    expect(res).toBe(false);
  });
});

describe("myContact 测试", () => {
  it("myContact, 功能测试", () => {
    const res = array.myContact(1, 2, 3, [4]);
    expect(res).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4]);
  });
});

describe("mySlice 测试", () => {
  it("mySlice, 功能测试", () => {
    const res = array.mySlice(1);
    expect(res).toEqual([2, 3, 4, 5]);
  });

  it("mySlice, 数组为空, 直接返回[]", () => {
    const res = [].mySlice(1);
    expect(res).toEqual([]);
  });

  it("mySlice, begin超过最大下标，直接返回[]", () => {
    const res = array.mySlice(10);
    expect(res).toEqual([]);
  });

  it("mySlice, begin大于了end，返回[]", () => {
    const res = array.mySlice(4, 2);
    expect(res).toEqual([]);
  });


  it("mySlice, end大于了数组长度，直接取数组长度", () => {
    const res = array.mySlice(1, 10);
    expect(res).toEqual([2, 3, 4, 5]);
  });

  it("mySlice, 不传参begin, 默认从0开始", () => {
    const res = array.mySlice();
    expect(res).toEqual([1, 2, 3, 4, 5]);
  });
});
