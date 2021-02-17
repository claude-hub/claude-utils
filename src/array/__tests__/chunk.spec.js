const {
  chunk
} = require('../chunk');

const array = [1, 2, 3, 4, 5, 6, 7];

describe("chunk 测试", () => {
  it("chunk, 功能测试", () => {
    expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("chunk, 空数组", () => {
    expect(chunk([], 3)).toEqual([]);
  });

  it("chunk, 不传size", () => {
    expect(chunk(array)).toEqual([[1], [2], [3], [4], [5], [6], [7]]);
  });

  it("chunk, size === length", () => {
    expect(chunk(array, 7)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
  });
});
