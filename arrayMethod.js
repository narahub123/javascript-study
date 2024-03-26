// array.splice(n, m) : 배열의 특정 요소를 지움
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr); // [1, 4, 5]

// array.splice(n, m, x) : 특정 요소를 지우고 추가

arr = [1, 2, 3, 4, 5];

arr.splice(1, 3, 100, 200);
console.log(arr); // [1, 100, 200, 5]

arr = ["나는", "철수", "입니다"];

arr.splice(1, 0, "대한민국", "소방관");

console.log(arr); //['나는', '대한민국', '소방관', '철수', '입니다']

// array.splice() : 삭제된 요소 반환

arr = [1, 2, 3, 4, 5];

let result = arr.splice(1, 2);

console.log(arr); // [1, 4, 5]
console.log(result); // [2, 3]

// arr.slice(n, m) :n부터 m까지 반환
arr = [1, 2, 3, 4, 5];
result = arr.slice(1, 4);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(result); //  [2, 3, 4]

let arr2 = arr.slice();
console.log(arr2); // [1, 2, 3, 4, 5]

// arr.concat(arr2, arr3 ..); : 합쳐서 새배열 반환
let arrA = [1, 2];
let arrB = arrA.concat([3, 4]);
console.log(arrB); // [1, 2, 3, 4]
let arrC = arrA.concat([3, 4], [5, 6]);
console.log(arrC); // [1, 2, 3, 4, 5, 6]
let arrD = arrA.concat([3, 4], 5, 6);
console.log(arrD); // [1, 2, 3, 4, 5, 6]

// arr.forEach(fn) : 배열 반복
let users = ["Mike", "Tom", "Jane"];

users.forEach((item, index, arr) => {});

users.forEach((name, index) => {
  console.log(name);
});
// Mike
// Tom
// Jane

users.forEach((name, index) => {
  console.log(`${index}. ${name}`);
});
// 0. Mike
// 1. Tom
// 2. Jane

// arr.indexOf / arr.lastIndexOf
arr = [1, 2, 3, 4, 5, 1, 2, 3];

let index = arr.indexOf(3); // 2

index = arr.indexOf(3, 3); // 7

arr.lastIndexOf(3); // 7

// arr.includes() : 포함하는지 확인

arr = [1, 2, 3];

arr.includes(2); // true

arr.includes(8); // false

// arr.find(fn) / arr.findIndex(fn)
// 첫번째 true 값만 반환하고 끝
// 만약 없으면 undefined를 반환
arr = [1, 2, 3, 4, 5];

result = arr.find((item) => {
  return item % 2 === 0;
});

console.log(result); // 2

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

result = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result); // {name: 'Tom', age: 10}

result = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result); // 2

// filter(fn) : 만족하는 모든 요소를 배열로 반환
arr = [1, 2, 3, 4, 5, 6];

result = arr.filter((item) => {
  return item % 2 === 0;
});

console.log(result); // [2, 4, 6]

// arr.reverse() : 역순으로 재정렬
arr = [1, 2, 3, 4, 5];

arr.reverse(); // [5, 4, 3, 2, 1]

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    isAdult: user.age > 19,
  });
});

console.log(newUserList);
// [
//   { name: "Mike", age: 30, isAdult: true },
//   { name: "Jane", age: 27, isAdult: true },
//   { name: "Tom", age: 10, isAdult: false },
// ];

newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);
// [
//   { name: "Mike", age: 30, id: 1, isAdult: true },
//   { name: "Jane", age: 27, id: 2, isAdult: true },
//   { name: "Tom", age: 10, id: 3, isAdult: false },
// ];

arr = ["안녕", "나는", "철수야"];

result = arr.join(); // 안녕,나는,철수야

result = arr.join(" "); // 안녕 나는 철수야

result = arr.join(""); // 안녕나는철수야

console.log(result);

// split
users = "Mike, Jane, Tom, Tony";
result = users.split(","); // ['Mike', ' Jane', ' Tom', ' Tony']

let str = "Hello, My name is Mike";

result = str.split(","); // ["Hello", " My name is Mike"];
result = str.split(""); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'M', 'i', 'k', 'e']

console.log(result);

// Array.isArray()
let user = {
  name: "Mike",
  age: 30,
};

userList = ["Mike", "Tom", "Jane"];

console.log(typeof user); // object
console.log(typeof userList); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true

// arr.sort()
// 배열 재정렬
// 배열 자체가 변경됨
// 인수로 정렬 로직을 담은 함수를 받음
arr = [1, 5, 4, 2, 3];

arr.sort(); // [1, 2, 3, 4, 5]

arr = ["a", "c", "d", "e", "b"];

arr.sort(); // ['a', 'b', 'c', 'd', 'e']

arr = [27, 8, 5, 13];

arr.sort(); // [13, 27, 5, 8]

arr = [27, 8, 5, 13];

function fn(a, b) {
  return a - b;
}

arr.sort(fn); //  [5, 8, 13, 27]

console.log(arr);

arr = [27, 8, 5, 13];

arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
// 8 27 [8, 27, 5, 13]
// 5 8  [5, 8, 27, 13]
// 13 5
// 13 8
// 13 27 [5, 8, 13, 27]
// lodash

// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 현재값) => {return 계산값}

// 배열의 모든 수 합치기
arr = [1, 2, 3, 4, 5];

// for, for of, forEach
result = 0;
arr.forEach((num) => {
  result += num;
});

console.log(result); // 15

// reduce
result = arr.reduce((prev, cur) => {
  console.log(prev);
  console.log(cur);
  return prev + cur;
}, 100);

console.log(result);
// 0
// 1
// 1
// 2
// 3
// 3
// 6
// 4
// 10
// 5
// 15

userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result); // ['Mike', 'Jane', 'Sue', 'Harry', 'Steve']

result = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result); //195

result = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result); //  ['Tom', 'Sue']
