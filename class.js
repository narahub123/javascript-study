// 생성자 함수
const User = function (name, age) {
  this.name = name;
  this.age = age;
  //   this.showName = function () {
  //     console.log(this.name);
  //   };
};

// class와 동일하게 만들기
User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

console.log(mike); // User {name: 'Mike', age: 30, showName: ƒ}
console.log(mike.showName()); // Mike

const mike2 = User("Mike", 30);
console.log(mike2); // undefine

for (const p in mike) {
  console.log(p);
}
// name
// age
// showName

// 클래스
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // User2의 prototype에 저장됨
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);
console.log(tom); // User2 {name: 'Tom', age: 19}
console.log(tom.showName()); // Tom

for (const p in tom) {
  console.log(p);
}
// name
// age

// const tom2 = User2("Tom", 19); // typeError

// 상속
// extends
// class Car {
//   constructor(color) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("drive..");
//   }
//   stop() {
//     console.log("STOP");
//   }
// }

// class Bmw extends Car {
//   park() {
//     console.log("PARK");
//   }
// }

// const z5 = new Bmw("blue");

// console.log(z5); // Bmw {color: 'blue', wheels: 4}

// console.log(z5.drive()); // drive..

// method overriding
// class Car {
//   constructor(color) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("drive..");
//   }
//   stop() {
//     console.log("STOP");
//   }
// }

// class Bmw extends Car {
//   park() {
//     console.log("PARK");
//   }
//   stop() {
//     super.stop();
//     console.log("off");
//   }
// }

// const z5 = new Bmw("blue");

// console.log(z5.stop());
// // STOP
// // off

// constructor overriding
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP");
  }
}

class Bmw extends Car {
  constructor(color) {
    // super();
    super(color);
    this.navigation = 1;
  } // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  park() {
    console.log("PARK");
  }
  stop() {
    super.stop();
    console.log("off");
  }
}

const z5 = new Bmw("blue");

console.log(z5);
// Bmw {color: undefined, wheels: 4, navigation: 1}
// Bmw {color: 'blue', wheels: 4, navigation: 1}
