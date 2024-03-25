let desc = "안녕하세요";

// length 문자열의 길이
desc.length; // 6

// 특정 위치에 접근
desc[2]; // '하'

// toUpperCase() toLowerCase()

desc = "Hi guys. Nice to meet you.";

desc.toUpperCase(); // HI GUYS. NICE TO MEET YOU.

desc.toLowerCase(); // hi guys. nice to meet you.

// str.indexOf(text) : 첫번째 문자의 index 반환
desc.indexOf("to"); // 14
desc.indexOf("man"); // -1

if (desc.indexOf("Hi")) {
  console.log("Hi가 포함된 문장입니다.");
} // 아무것도 안보임

if (desc.indexOf("Hi") > -1) {
  console.log("Hi가 포함된 문장입니다.");
} // 아무것도 안보임

desc = "abcdefg";

// str.slice(n, m) n : 시작점 m : 없으면 문자열 끝까지 양수면 그 숫자까지 (포함하지 않음), 음수면 끝에서부터 셈
desc.slice(2); // "cdefg"
desc.slice(0, 5); // "abcde"
desc.slice(2, -2); // "cde"

// str.substring(n, m) n과 m 사이의 문자열 반환, n과 m을 바꿔도 동작함, 음수는 0으로 인식
desc.substring();
desc.substring(2, 5); // "cde"
desc.substring(5, 2); // "cde"

// str.substr(n, m); n부터 시작 m 개를 가져옴
desc.substr(2, 4); // "cdef"
desc.substr(-4, 2); // "de"

// str.trim() 앞 뒤 공백 제거
desc = "  conding        ";

desc.trim(); // 'coding'

// str.repeat(n) : n번 반복
let hello = "hello!";
hello.repeat(3); // 'hello!hello!hello!'

// 문자열 비교 : 아스키 숫자표
"a" < "c"; // true
"a".codePointAt(0); // 97
String.fromCodePoint(97); // 'a'

// 예제
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수형",
  "05. 배열",
];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}

console.log(newList); // ['들어가며', 'JS의 역사', '자료형', '함수형', '배열']

// 금칙어 : 콜라
// function hasCola(str) {
//   if (str.indexOf("콜라")) {
//     console.log("금칙어가 있습니다.");
//   } else {
//     console.log("통과");
//   }
// }

// hasCola("와 사이다가 짱이야!"); // 금칙어가 있습니다.
// hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
// hasCola("콜라"); // 통과

// function hasCola(str) {
//   if (str.indexOf("콜라") > -1) {
//     console.log("금칙어가 있습니다.");
//   } else {
//     console.log("통과");
//   }
// }

// hasCola("와 사이다가 짱이야!"); // 통과
// hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
// hasCola("콜라"); // 금칙어가 있습니다.

// includes 문자가 있으면 true, 없으면 false

function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야!"); // 통과
hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
hasCola("콜라"); // 금칙어가 있습니다.
