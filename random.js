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
