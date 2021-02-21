const {
  myPromise
} = require('../index');


describe("myPromise 测试", () => {
  it("myPromise, 成功回调", () => {
    let result = ''
    new myPromise((resolve)=> {
      resolve('成功回调')
    }).then(data => {
      result = data;
    })
    expect(result).toBe('成功回调');
  });

  it("myPromise, 失败回调", () => {
    let result = ''
    new myPromise((reject)=> {
      reject('失败回调')
    }).then(data => {
      result = data;
    })
    expect(result).toBe('失败回调');
  });


  it("myPromise, 报错模拟", () => {
    new myPromise('报错模拟').then(()=>{}, (e)=>{
      console.log(e)
    })
  });


  it("myPromise, 手动更改状态", () => {
    const result = new myPromise('报错模拟');
    // 手动更改状态
    result.status = 'aaa';
    result.then(()=>{},()=>{})
  });
});