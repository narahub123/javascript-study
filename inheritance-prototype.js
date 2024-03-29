// proto type
// 예제 1
const user = {
  name: "Mike",
};

console.log(user.name);

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // false

console.log(user);
// __proto__ : Object => proto type
// 객체 안에 property가 있으면 그것을 쓰고
// 없으면 proto 타입을 씀

// 예제 2
const car = {
  wheel: 4,
  drive() {
    console.log("drive..");
  },
};
const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw); // {color: 'red', navigation: 1}
console.log(bmw.color); // red
console.log(bmw.wheel); // 4
console.log(benz); // {color: 'black'}
console.log(audi); // {color: 'blue'}

// 상속은 계속 이어질 수 있음
const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw;

console.log(x5); // {color: 'white', name: 'x5'}
console.log(x5.name); // x5
console.log(bmw.color); // red

for (p in x5) {
  console.log(p);
}
// color
// name;
// navigation;
// wheel;
// drive;
console.log(Object.keys(x5)); // ['color', 'name']
console.log(Object.values(x5)); // ['white', 'x5']

for (p in x5) {
  if (x5.hasOwnProperty(p)) console.log("o", p);
  else console.log("x", p);
}
// o color
// o name
// x navigation
// x wheel
// x drive

// 생성자 함수
// const Car = {
//   wheel: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

const Bmw = function (color) {
  this.color = color;
};

// const x6 = new Bmw("red");
// const z4 = new Bmw("blue");

// x6.__proto__ = car;
// z4.__proto__ = car;

// Bmw.prototype.wheel = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive..");
// };

// console.log(x6); // Bmw {color: 'red'}
// console.log(x6.wheel); // 4
// console.log(x6.drive()); // drive..

// // instanceof
// console.log(z4 instanceof Bmw); // true
// console.log(z4.constructor === Bmw); // true

Bmw.prototype = {
  //   constructor: Bmw,
  wheel: 4,
  drive() {
    console.log("drive..");
  },
  navigation: 1,
  stop() {
    console.log("STOP");
  },
};

const x6 = new Bmw("red");
const z4 = new Bmw("blue");
console.log(z4.constructor === Bmw); // false

// js는 명확한 constructor를 보장하지 않음 