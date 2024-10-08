const email = "1234TesT*rEad1234ㄱㄴㄹㄷ@gmail.com"; //"as";
const socialId = "f4j2h6l9g1b8z3n7k5xq0t1w9p2v7s6";
const naverId = "yPvC-phDwrDOqn-s2hsLHqCszy0VJY_cSM6PJ2OnVkA";

// 이메일을 이용하는 경우
const createIdByEmail = (
  email,
  specialChars = "_", // 사용 가능한 특수문자
  repLetter = "p", // 허용되지 않는 문자를 대신할 문자
  min = 4, // 아이디 최소 길이
  add = "play", // min과 길이가 동일해야 함
  max = 30, // 아이디 최대 길이
  startWith = "a-z", // 어떤 문자로 시작해야 하는지 결정 기본은 영문으로 시작
  startLetter = "pg" // 조건에 맞지 않는 경우 추가되는 문자열
) => {
  if (!email) return "이메일을 입력해주세요.";

  // 로컬 추출
  let local = email.split("@")[0];

  // 소문자로 변경
  local = local.toLowerCase();

  // 영어, 숫자, 특정 특수문자 제외하고는 다른 문자로 치환
  const filterChar = new RegExp(`[^a-z0-9${specialChars}]`, "g");

  // 조건에 맞지 않는 글자를 대신해서 들어갈 문자
  local = local.replace(filterChar, repLetter);

  // 조건에 맞게 시작하게 만들기
  // 조건이 있는 경우에만
  if (startWith) {
    const checkStartWith = new RegExp(`[${startWith}]`);

    // 조건에 맞지 않는 경우
    if (!checkStartWith.test(local)) {
      local = startLetter + local;
    }
  }

  // 아이디 길이 확인
  const length = local.length;

  // 최소보다 작은 경우
  if (length < min) {
    // 최소에 만족할만큼 추가
    local += add.slice(0, length);
    // 최대보다 큰 경우
  } else if (length > max) {
    local = local.slice(0, max);
  }

  return local;
};

console.log(createIdByEmail(email));

// // 로컬 파트 추출
// let local = email.split("@")[0];

// console.log("로컬 파트:", local);

// // 추출한 로컬 파트의 유효성 검사
// // 1. 모든 영문자를 소문자로 변환
// local = local.toLowerCase();

// console.log("영문 대문자를 소문자로 변환:", local);

// // 2. 영어, 숫자, 특정 특수 문자 제외하고는 a로 치환
// const reg = /[^a-zA-Z0-9_]/g;

// local = local.replace(reg, "a");

// console.log("조건에 맞지 않는 문자를 a로 치환", local);

// // 3. 문자열은 영어 소문자로 시작해야 함
// // 문자열로 시작하지 않는 경우 문자 삽입
// const reg1 = /^[^a-z]/;
// local = local.replace(reg1, "pg");

// console.log("문자로 시작하지 않는 경우 문자 추가", local);

// // 4. 문자열 길이 제한
// // 최소보다 작은 경우 문자열 추가
// // 최대보다 큰 경우 문자열 삭제
// const checkLength = (str) => {
//   const length = local.length;
//   if (length < 4) {
//     // 문자열 추가
//     const add = "play";

//     local = local + add.slice(0, length);
//   }

//   if (length > 20) {
//     // 문자열 삭제
//     local = local.slice(0, 20);
//   }

//   return local;
// };

// local = checkLength(local);

// console.log("길이 확인 후", local);
