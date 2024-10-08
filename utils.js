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

// 한글 초중성 분리하기
const CHO_HANGUL = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const JOONG_HANGUL = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];
const JONG_HANGUL = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

// 국어 영문 표기법에 따른 변경
const CHO_ENG = [
  "g", // ㄱ
  "kk", // ㄲ
  "n", // ㄴ
  "d", // ㄷ
  "tt", // ㄸ
  "r", // ㄹ
  "m", // ㅁ
  "b", // ㅂ
  "pp", // ㅃ
  "s", // ㅅ
  "ss", // ㅆ
  "", // ㅇ (로마자 표기에서 초성으로 사용되지 않음)
  "j", // ㅈ
  "jj", // ㅉ
  "ch", // ㅊ
  "k", // ㅋ
  "t", // ㅌ
  "p", // ㅍ
  "h", // ㅎ
];

const JOONG_ENG = [
  "a", // ㅏ
  "ae", // ㅐ
  "ya", // ㅑ
  "yae", // ㅒ
  "eo", // ㅓ
  "e", // ㅔ
  "ye", // ㅕ
  "ye", // ㅖ
  "o", // ㅗ
  "wa", // ㅘ
  "wae", // ㅙ
  "oe", // ㅚ
  "yo", // ㅛ
  "u", // ㅜ
  "weo", // ㅝ
  "we", // ㅞ
  "wi", // ㅟ
  "yu", // ㅠ
  "eu", // ㅡ
  "ui", // ㅢ
  "i", // ㅣ
];

const JONG_ENG = [
  "", // 없음 (받침이 없는 경우)
  "k", // ㄱ
  "k", // ㄲ
  "k", // ㄳ
  "n", // ㄴ
  "n", // ㄵ
  "n", // ㄶ
  "t", // ㄷ
  "l", // ㄹ
  "k", // ㄺ
  "m", // ㄻ
  "l", // ㄼ
  "l", // ㄽ
  "l", // ㄾ
  "l", // ㄿ
  "l", // ㅀ
  "m", // ㅁ
  "p", // ㅂ
  "p", // ㅄ
  "t", // ㅅ
  "t", // ㅆ
  "ng", // ㅇ (받침이 없는 경우)
  "t", // ㅈ
  "t", // ㅊ
  "k", // ㅋ
  "t", // ㅌ
  "p", // ㅍ
  "t", // ㅎ
];

// 한글 유니코드 패턴
// 21개의 중성과 28개의 종성이 모두 바껴야 초성이 바뀜
const CHO_PERIOD = Math.floor("까".charCodeAt(0) - "가".charCodeAt(0)); // 588(28 * 21)
console.log("초성 간격", CHO_PERIOD);

// 28개의 종성이 바뀌어야 중성이 바뀜
const JOONG_PERIOD = Math.floor("개".charCodeAt(0) - "가".charCodeAt(0)); // 28
console.log("중성 간격", JOONG_PERIOD);

// 한글 검증하기
const HANGUL_START_CHARCODE = "가".charCodeAt(0);
console.log(HANGUL_START_CHARCODE); // 44032

const HANGUL_END_CHARCODE = "힣".charCodeAt(0);
console.log(HANGUL_END_CHARCODE); // 55203

// 조합된 글자인지 체크(가 ~ 힣 사이)
const isHangul = (charCode) => {
  return HANGUL_START_CHARCODE <= charCode && charCode <= HANGUL_END_CHARCODE;
};

console.log("한글 여부 확인하기", isHangul("갈".charCodeAt(0)));

// 글자 분리하기
const divideHangul = (letter) => {
  // 하나의 음절의 유니코드 확인
  const letterCode = letter.charCodeAt(0);

  // 한글 여부 확인
  if (!isHangul(letterCode)) {
    return letter;
  }

  // 유니코드에서의 순서 확인
  const charCode = letterCode - HANGUL_START_CHARCODE;
  console.log("해당 음절의 한글 유니코드 내의 위치:", charCode);

  // 초성 순서
  const choIndex = Math.floor(charCode / CHO_PERIOD);
  console.log("초성 순서:", choIndex);
  // 초성 나머지 내에서 중성과 종성이 바뀜
  console.log("초성 나머지:", charCode % CHO_PERIOD);

  // 중성 순서
  // 초성이 고정되어 있는 상태에서 중성의 위치 찾기
  // 중성의 간격마다 새로운 중성이 나타남
  const joongIndex = Math.floor((charCode % CHO_PERIOD) / JOONG_PERIOD);
  console.log("중성 순서:", joongIndex);
  // 중성 나머지 내에서 종성이 바뀜
  console.log("중성 나머지:", charCode % JOONG_PERIOD);

  // 종성 순서
  const jongIndex = charCode % JOONG_PERIOD;
  console.log("종성 순서:", jongIndex);

  return {
    cho: CHO_HANGUL[choIndex],
    joong: JOONG_HANGUL[joongIndex],
    jong: JONG_HANGUL[jongIndex],
  };
};

const diviededHangul = divideHangul("예");
console.log(divideHangul("예"));

const romanizeHangul = (dividedHangul) => {
  const choIndex = CHO_HANGUL.indexOf(dividedHangul.cho);
  const joongIndex = JOONG_HANGUL.indexOf(dividedHangul.joong);
  const jongIndex = JONG_HANGUL.indexOf(dividedHangul.jong);

  console.log("초성, 중성, 종성 인덱스", choIndex, joongIndex, jongIndex);

  let engLetter = "";

  engLetter += CHO_ENG[choIndex];
  engLetter += JOONG_ENG[joongIndex];
  engLetter += JONG_ENG[jongIndex];

  console.log("로마자 음절", engLetter);

  return engLetter;
};

const romanizeKorWord = (word) => {
  let engWord = "";

  word.split("").map((letter) => {
    const dividedletter = divideHangul(letter);

    const romanizedLetter = romanizeHangul(dividedletter);

    engWord += romanizedLetter;
  });

  return engWord;
};

const romanizedWord = romanizeKorWord("예쁘다");

console.log(romanizedWord);
