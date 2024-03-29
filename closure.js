// 변수, 호이스팅, 함수선언문 특징
// lexical environment(어휘적 환경)
let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);

// 1. lexical environment
// let으로 선언된 변수도 호이스팅됨
// one : 초기화 x  : 사용 불가
// addOne : function 바로 초기화됨 사용 가능

// 2. lexical environment
// let one
// one : undefined - 사용 가능
// addOne : function

// 3 - 1 . lexical environment : 전역 Lexical environment
// one = 1
// one : 1 - 사용 가능
// addOne : function

// 3 - 2. lexical environment : 내부 lexical environment - 외부 lexical environment에 대한 참조
// addOne(5)
// num : 5

// lexical environment
function makeAdder(x) {
  return function (y) {
    // y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5 - add3함수 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

// 1. 전역 lexical 환경
// makeAdder: function
// add3 : 초기화 x

// const add3 = makeAdder(3)
// 2-1. 전역 lexical 환경
// makeAdder: function
// add3 : function

// 2-2 makeAdder lexical 환경
// x : 3

// console.log(add3(2))
// 3 익명학수 Lexical 환경
// y: 2

// closure
// - 함수와 렉시컬 환경의 조합
// - 함수가 생성될 당시의 외부 변수를 기억
// - 생성된 이후에도 계속 접근 가능

function makeCounter() {
  let num = 0; // 은닉화

  // 내부 함수에서 외부함수의 변수에 접근
  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// color coding

{
  function outer() {
    function inner() {}
  }

  function human() {
    const name = "Sina";
    function sayHi() {
      console.log(`Hi I am ${name}`);
    }
    sayHi();
  }

  human(); // Hi I am Sina

  function human() {
    const name = "Sina";
    function sayHi() {
      console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel() {
      console.log(`${name} is feeling good!`);
    }
    sayHi();
    sayHowYouFeel();
  }

  human();
  // Hi I am Sina
  // Sina is feeling good!
  // two inner functions share name variables!!
  // they both can access to outer scope

  function human(n) {
    const name = n;
    function sayHi() {
      console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel() {
      console.log(`${name} is feeling good!`);
    }
    sayHi();
    sayHowYouFeel();
  }

  human("Sina");
  // Hi I am Sina
  // Sina is feeling good!

  function human(name) {
    function sayHi() {
      console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel() {
      console.log(`${name} is feeling good!`);
    }
    sayHi();
    sayHowYouFeel();
  }

  human("Sina");
  // Hi I am Sina
  // Sina is feeling good!

  let sina = human("Sina");
  // Hi I am Sina
  // Sina is feeling good!
  let qoli = human("Qoli");
  // Hi I am Qoli
  // Qoli is feeling good!

  const name = "Sina";
  function sayHi() {
    console.log(`Hi I am ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling good!`);
  }

  sayHi(); // Hi I am Sina
  sayHowYouFeel(); // Sina is feeling good!

  // factory function
  function human(n) {
    const name = n;
    function sayHi() {
      console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel() {
      console.log(`${name} is feeling good!`);
    }
    return {
      sayHi,
      sayHowYouFeel,
    };
  }

  sina = human("Sina");
  qoli = human("Qoli");

  // holding the value(name) even if the name no longer exists
  sina.sayHi(); // Hi I am Sina
  sina.sayHowYouFeel(); // Sina is feeling good!

  qoli.sayHi(); // Hi I am Qoli
  qoli.sayHowYouFeel(); // Qoli is feeling good!
} // human() example

// practical example from mdn
// document.getElementById("size-12").onclick = function () {
//   document.body.style.fontSize = `12px`;
// };

// document.getElementById("size-14").onclick = function () {
//   document.body.style.fontSize = `14px`;
// };

// document.getElementById("size-16").onclick = function () {
//   document.body.style.fontSize = `16px`;
// };

function clickHandler(size) {
  document.body.style.fontSize = `${size}px`;
}

// document.getElementById("size-12").onclick = clickHandler(12);
// document.getElementById("size-14").onclick = clickHandler(14);
// document.getElementById("size-16").onclick = clickHandler(16);

function clickHandler(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

document.getElementById("size-12").onclick = clickHandler(12);
