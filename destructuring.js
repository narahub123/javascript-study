// 배열 구조 분해

let [x, y] = [1, 2];

console.log(x); // 1
console.log(y); // 2

let users = ["Mike", "Tom", "Jane"];

let [user1, user2, user3] = users;

console.log(user1); // Mike
console.log(user2); // Tom
console.log(user3); // Jane

let str = "Mike-Tom-Jane";

let [user4, user5, user6] = str.split("-");
console.log(user4); // Mike
console.log(user5); // Tom
console.log(user6); // Jane

// 배열 구조 분해 : 기본값
let [a, b, c] = [1, 2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

let [d = 3, e = 4, f = 5] = [1, 2];

console.log(d); // 1
console.log(e); // 2
console.log(f); // 5

// 배열 구조 분해 : 일부 반환값 무시
let [user7, , user8] = ["Mike", "Tom", "Jane", "Tony"];

console.log(user7); // 'Mike'
console.log(user8); // 'Jane'

// 배열 구조 분해 : 바꿔치기
[a, b] = [b, c];

// 객체 구조 분해
let user = { name: "Mike", age: 30 };

// let { name, age } = user;
// let name = user.name
// let age = user.age
let { age, name } = user;
console.log(name); // Mike
console.log(age); // 30

// 객체 구조 분해 : 새로운 변수 이름으로 할당
let { name: userName, age: userAge } = user;

console.log(userName); // Mike
console.log(userAge); // 30

// 객체 구조 분해 : 기본값

let { name: username, age: userage, gender = "male" } = user;
console.log(username); // Mike
console.log(userage); // 30
console.log(gender); // male

// 인수 전달