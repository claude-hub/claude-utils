const {
  flatten,
  flatten1,
} = require('../flatten');

const array = [1, [2, [3, 4], 5], [6, 7], 8];

describe("flatten 测试", () => {
  it("flatten, 功能测试", () => {
    expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("flatten1, 功能测试", () => {
    expect(flatten1(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
