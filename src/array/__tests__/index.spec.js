require('../index');

const array = [1, 2, 3, 4, 5];

describe("myMap 测试", () => {
  it("myMap, 第一个参数值测试", () => {
    expect(array.myMap((item) => item * 10)).toEqual([10, 20, 30, 40, 50]);
  });
});
