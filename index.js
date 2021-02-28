/**
 * 第 1 题：写一个 mySetInterVal(fn, a, b),
 * 每次间隔 a,a+b,a+2b,...,a+nb 的时间，
 * 然后写一个 myClear，停止上面的 mySetInterVal 
 * @param {*} fn 
 * @param {*} a 
 * @param {*} b 
 */
function mySetInterVal(fn, a, b) {
  let timer = null;
  let time = 0;
  const start = (timeout) => {
    timer = setTimeout(() => {
      if (time > -1) {
        fn();
        start(timeout + b);
        time++;
      }
    }, timeout)
  }
  start(a);
  const myClear = (timer) => {
    if (timer) {
      clearTimeout(timer)
      time = -1;
    }
  }
  return {
    timer,
    myClear
  };
}

// test
// const {
//   timer,
//   myClear
// } = mySetInterVal(() => {
//   console.log('run')
// }, 100, 200);
// setTimeout(() => myClear(timer), 1000);


/**
 * 第 2 题：合并二维有序数组成一维有序数组，归并排序的思路
 * @param {*} arr 
 */
function mergeSort(arr) {
  const len = arr.length
  // 处理边界情况
  if(len <= 1) {
      return arr[0]
  }   
  // 计算分割点
  const mid = Math.floor(len / 2)    
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = mergeSort(arr.slice(0, mid)) 
  // 递归分割右子数组，然后合并为有序数组
  const rightArr = mergeSort(arr.slice(mid,len))  
  // 合并左右两个有序数组
  arr = merge(leftArr, rightArr)  
  // 返回合并后的结果
  return arr
}

function mergeSort1(arr) {
  let lengthArr = arr.length;
  if (lengthArr === 0) {
    return [];
  }
  while (arr.length > 1) {
    let arrayItem1 = arr.shift();
    let arrayItem2 = arr.shift();
    let mergeArr = merge(arrayItem1, arrayItem2);
    arr.push(mergeArr);
  }
  return arr[0];
}
// 合并两个数组
function merge(arr1, arr2) {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}
let arr = [[1,7,9],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
console.log(mergeSort(arr));

// 最简单的方法
// [[1,2,4],[2,3,7],[3,5,7],[4,5,8]].flat().sort();


/**
 * 第 3 题：多种方式实现斐波那契数列
 * 1、1、2、3、5、8、13、21
 * @param {*} n 
 */
// 普通递归，这种方式会出现重复计算。卡死
function fibonacci(n) {
  if (n == 1 || n == 2) {
      return 1
  };
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(20))

// 改进递归 - 把前两位数字做成参数避免重复计算
function fibonacci1(n) {
  function fib(n, v1, v2) {
    if (n == 1)
      return v1;
    if (n == 2)
      return v2;
    else
      return fib(n - 1, v2, v1 + v2)
  }
  return fib(n, 1, 1)
}
console.log(fibonacci1(20))


/**
 * 第 4 题：字符串出现的不重复最长长度
 * 整体思路：
 * 用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可
 * 对于遇到重复字符如何收缩窗口大小？
 * 我们可以用 map 维护字符的索引，遇到相同的字符，把左边界移动过去即可
 * 挪动的过程中记录最大长度
 * @param {*} s 
 */
const lengthOfLongestSubstring = function (s) {
  let arr = [], max = 0
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i))
    max = Math.max(arr.length, max)
  }
  return max
};


const lengthOfLongestSubstring = function (s) {
  let map = new Map(), max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  return max
};

console.log(lengthOfLongestSubstring("loddktdji"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("adfafwefffdasdcx"))


/**
 * 深度优先
 * @param {*} node 
 */
function deepTraversal(node) {  
  const nodeList = [];  
  if (node) {  
      const stack = [];  
      stack.push(node);  
      while (stack.length != 0) {  
          const childrenItem = stack.pop();  
          nodeList.push(childrenItem);  
          const childrenList = childrenItem.children;  
          for (const i = childrenList.length - 1; i >= 0; i--)  
              stack.push(childrenList[i]);  
      }  
  }    
  return nodeList;  
}


function deepFirstSearch(node, nodeList) {
  if (node) {
    nodeList.push(node);
    const children = node.children;
    for (const i = 0; i < children.length; i++)
      //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
      deepFirstSearch(children[i], nodeList);
  }
  return nodeList;
}
