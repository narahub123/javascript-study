// 인수 전달
function showName(name) {
  console.log(name);
}

showName("Mike"); // 'Mike'
showName("Mike", "Tom"); // 'Mike'
showName(); // undefined

// arguments
// - 함수로 넘어 온 모든 인수에 접근
// - 함수 내에서 이용 가능한 지역 변수
// - length / index
// - Array 형태의 객체
// - 배열의 내장 메서드 없음

function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName("Mike", "Tom"); // 'Mike' 'Tom'

function showName(...names) {
  console.log(names);
}

showName(); // []
showName("Mike"); // ['Mike']
showName("Mike", "Tom"); // ['Mike' 'Tom']

// 예제
// 전달 받은 모든 수를 더해야함

function add(...nums) {
  let result = 0;
  nums.forEach((num) => (result += num));

  console.log(result);
}

add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// 예제
// user 객체를 만들어 주는 생성자 함수

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user11 = new User("Mike", 30, "html", "css");
const user12 = new User("Tom", 20, "JS", "React");
const user13 = new User("Jane", 10, "English");

console.log(user11);
// User {name: 'Mike', age: 30, skills: Array(2)}
// age: 30
// name: "Mike"
// skills: (2) ['html', 'css']
console.log(user12);
// User {name: 'Tom', age: 20, skills: Array(2)}
console.log(user13);
// User {name: 'Jane', age: 10, skills: Array(1)}

// 전개구문 spread syntax 배열

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4, 5, 6]

// 복제
let arr = [1, 2, 3];
let arr3 = [...arr]; // [1, 2, 3]

let user = {
  name: "Mike",
  age: 30,
};
let user2 = { ...user };
console.log(user2);

user2.name = "Tom";

console.log(user.name); // Mike
console.log(user2.name); // Tom

// 예제
// arr1을 [4,5,6, 1,2,3]

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

arr1 = [...arr2, ...arr1]; //  [4, 5, 6, 1, 2, 3]

console.log(arr1);

user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user = Object.assign({}, user, info, { skills: [] });

// fe.forEach((item) => user.skills.push(item));
// lang.forEach((item) => user.skills.push(item));

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user); // {name: 'Mike', age: 30, skills: Array(4)}
