// 난수 생성하기

// 0이상 1미만의 난수 생성
const getRandom = () => {
  return console.log(Math.random());
};

getRandom();

// 두 값 사이의 난수 생성하기
const getRandomArbitary = (min, max) => {
  return console.log(Math.random() * (max - min) + min);
};

getRandomArbitary(1, 3);

// 두 값 사이의 정수 난수 생성하기
// min 이상 max 미만
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return console.log(
    Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  );
};

getRandomInt(1, 3);

// min 이상 max 이하
const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return console.log(
    Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  );
};

getRandomIntInclusive(1, 3);

// 1자리 난수 생성
const getRandomOneDigit = () => {
  const rand = Math.floor(Math.random() * 10);

  return rand;
};

const getRandomNDigit = (digit) => {
  if (digit < 1) return "1 이상의 정수를 입력해주세요.";

  let final = "";
  for (let i = 0; i < digit; i++) {
    const rand = Math.floor(Math.random() * 10);

    final += rand;
  }

  return final;
};

console.log(getRandomNDigit(0));

console.log(Math.random().toString(36));

const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  "\\",
  "|",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "`",
  "~",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const passwordElems = [
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "'",
    '"',
    "\\",
    "|",
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "`",
    "~",
  ],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
];

const createPassword = (digit) => {
  if (digit < 1) return "1이상의 정수를 입력하세요.";
  let password = "";
  for (let i = 0; i < digit; i++) {
    const pickArrNum = Math.floor(Math.random() * 4); // 4개의 배열 중 하나 선택
    const pickedArr = passwordElems[pickArrNum]; // 선택한 배열
    const length = pickedArr.length; // 선택한 배열 길이
    const pickElemNum = Math.floor(Math.random() * length); // 선택한 배열에서 하나의 요소 선택
    const pickedElem = pickedArr[pickElemNum]; // 선택한 요소

    password += pickedElem; // 선택한 요소를 비밀번호에 추가하기
  }

  return password;
};

console.log(createPassword(20));

const createPassword2 = (digit) => {
  if (digit < 1) return console.log("1이상의 자연수를 입력해주세요.");
  let password = "";
  // 비밀번호를 구성할 요소들의 문자열
  const elems =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=[]{},<.>/?`~0123456789";

  for (let i = 0; i < digit; i++) {
    const rand = Math.floor(Math.random() * (elems.length - 1));
    const elem = elems[rand];
    password += elem;
  }

  return password;
};

console.log(createPassword2(13));
