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
