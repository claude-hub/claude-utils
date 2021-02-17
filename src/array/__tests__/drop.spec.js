const {
  drop,
  dropRight
} = require('../drop');

const array = [1, 2, 3, 4, 5, 6, 7];

describe("drop 测试", () => {
  it("drop, 功能测试", () => {
    expect(drop(array, 1)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("drop, arr为[]", () => {
    expect(drop([], 12)).toEqual([]);
  });

  it("drop, 不传count，默认为1", () => {
    expect(drop(array)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("drop, count > arr.length", () => {
    expect(drop(array, 20)).toEqual([]);
  });
});

describe("dropRight 测试", () => {
  it("dropRight, 功能测试", () => {
    expect(dropRight(array, 2)).toEqual([1, 2, 3, 4, 5]);
  });

  it("dropRight, arr为[]", () => {
    expect(dropRight([], 12)).toEqual([]);
  });

  it("dropRight, 不传count，默认为1", () => {
    expect(dropRight(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("dropRight, count > arr.length", () => {
    expect(dropRight(array, 20)).toEqual([]);
  });
});
