const {
  unique,
  unique1,
  unique2
} = require('../unique');

const array = [1, 2, 3, 3, 4, 5, 4];

describe("unique 测试", () => {
  it("unique, 功能测试", () => {
    expect(unique(array)).toEqual([1,2,3,4,5]);
  });
  it("unique1, 功能测试", () => {
    expect(unique1(array)).toEqual([1,2,3,4,5]);
  });
  it("unique2, 功能测试", () => {
    expect(unique2(array)).toEqual([1,2,3,4,5]);
  });
});
