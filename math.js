// toString()
// 10진수 -> 2진수/16진수(문자열)
// let num = 10;

// num.toString(); // '10'
// num.toString(2); // '1010'

// let num2 = 255;

// num2.toString(16); // 'ff'

// Math
Math.PI; // 3.141592653589793

// Math.ceil() : 올림
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1); // 6
Math.ceil(num2); // 6

// Math.floor() : 내림

Math.floor(num1); // 5
Math.floor(num2); // 5

// Math.round() : 반올림
Math.round(num1); // 5
Math.round(num2); // 6

// 소수점 자리수
let userRate = 30.1234;

// 요구사항 : 소수점 둘째자리까지 표현(셋째 자리에서 반올림)
Math.round(userRate * 100) / 100; // 30.12

// toFixed() : 문자열을 반환함에 주의
userRate.toFixed(2); // 30.12
userRate.toFixed(0); // 30
userRate.toFixed(6); // 30.123400

// isNaN() : NaN이 NaN인지 판단할 수 있는 유일한 방법임
let x = Number("x");
x == NaN; // false
x === NaN; // false
NaN == NaN; // false

isNaN(x); // true
isNaN(3); // false

// parseInt() 문자열을 숫자로 바꿔줌
let margin = "10px";

parseInt(margin); // 10
Number(margin); // NaN

let redColor = "f3";
parseInt(redColor); // NaN
parseInt(redColor, 16); // 243
parseInt("11", 2); // 3

// parseFloat() : 부동 소수점 반환
let padding = "18.5%";

parseInt(padding); // 18

parseFloat(padding); // 18.5

// Math.random() : 랜덤
// Math.max() : 최대값
// Math.min() : 최소값
// Math.abs() : 절대값
// Math.pow(n, m) : 제곱
// Math.sqrt() : 제곱근
