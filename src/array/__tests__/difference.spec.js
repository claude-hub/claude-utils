const {
  difference
} = require('../difference');

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [3, 5, 7]

describe("difference 测试", () => {
  it("difference, 功能测试", () => {
    expect(difference(arr1, arr2)).toEqual([1, 2, 4, 6]);
  });

  it("difference, arr1为[]", () => {
    expect(difference([], arr2)).toEqual([]);
  });

  it("difference, arr2为[]", () => {
    expect(difference(arr1, [])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
