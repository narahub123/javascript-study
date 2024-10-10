const str = "We will, we will rock you.";

const re = str.match(/we/gi);

console.log(re);

const str2 = "JavaScript";
const re2 = str2.match(/html/);
console.log(re2);

const str3 = "I love JavaScript";
const re3 = /love/.test(str3);
console.log(re3);

const input1 = "11:11";
const input2 = "11:111";

const reg = /\d\d:\d\d/;

const result = reg.test(input1);
const result2 = reg.test(input2);

console.log(result); // true
console.log(result2); // true

const reg2 = /^\d\d:\d\d$/;
const result3 = reg2.test(input1);
const result4 = reg2.test(input2);

console.log(result3); // true
console.log(result4); // false

let str4 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(str4.match(/^\d/)); // ['1', index: 0, input: '1st place: Winnie\n2nd place: Piglet\n3rd place: Eeyore', groups: undefined]
console.log(str4.match(/^\d/m)); // ['1', index: 0, input: '1st place: Winnie\n2nd place: Piglet\n3rd place: Eeyore', groups: undefined]
console.log(str4.match(/^\d/g)); // ['1']
console.log(str4.match(/^\d/gm)); // ['1', '2', '3']

let str5 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str5.match(/\d$/)); // ['3', index: 28, input: 'Winnie: 1\nPiglet: 2\nEeyore: 3', groups: undefined]
console.log(str5.match(/\d$/m)); // ['1', index: 8, input: 'Winnie: 1\nPiglet: 2\nEeyore: 3', groups: undefined]
console.log(str5.match(/\d$/g)); // ['3']
console.log(str5.match(/\d$/gm)); // ['1', '2', '3']

console.log(str5.match(/\d\n/gm)); // ['1\n', '2\n']

// 그룹화 : ()
const res1 = "kokoko".match(/ko+/);
console.log(res1); // ['ko', index: 0, input: 'kokoko', groups: undefined]
const res2 = "kooookoooo".match(/ko+/);
console.log(res2); // ['koooo', index: 0, input: 'kooookoooo', groups: undefined]

const res3 = "kokoko".match(/(ko)+/);
console.log(res3); // ['kokoko', 'ko', index: 0, input: 'kokoko', groups: undefined]
const res4 = "kooookoooo".match(/(ko)+/);
console.log(res4); // ['ko', 'ko', index: 0, input: 'kooookoooo', groups: undefined]

// 캡처하지 않는 그룹화 : (?:)
const res5 = "kokoko".match(/(?:ko)+/);
console.log(res5); // ['kokoko', index: 0, input: 'kokoko', groups: undefined]

// 전방탐색 (?=)
// 패턴과 일치하지만 값으로 리턴하지 않는 정규식 패턴
const http1 = "http://www.forta.com";
const http2 = "https://mail.forta.com";
const http3 = "ftp://ftp.forta.com";

const regExp1 = /.+(?=:)/;

console.log(http1.match(regExp1)); // ['http', index: 0, input: 'http://www.forta.com', groups: undefined]
console.log(http2.match(regExp1)); // ['https', index: 0, input: 'https://mail.forta.com', groups: undefined]
console.log(http3.match(regExp1)); // ['ftp', index: 0, input: 'ftp://ftp.forta.com', groups: undefined]

const regExp2 = /.+(:)/;

console.log(http1.match(regExp2)); // ['http:', index: 0, input: 'http://www.forta.com', groups: undefined]
console.log(http2.match(regExp2)); // ['https:', index: 0, input: 'https://mail.forta.com', groups: undefined]
console.log(http3.match(regExp2)); // ['ftp:', index: 0, input: 'ftp://ftp.forta.com', groups: undefined]

// 후방탐색 (?<=)
// 텍스트를 반환하기 전에 뒤쪽을 탐색하는 것
const p1 = `ABC01: $23.45`;
const p2 = `HGG42: $5.31`;
const p3 = `CFMX1: $899.00`;
const p4 = `XTC99: $69.96`;

const regExp3 = /(?<=\$)[0-9.]+/;

console.log(p1.match(regExp3)); // ['23.45', index: 8, input: 'ABC01: $23.45', groups: undefined
console.log(p2.match(regExp3)); // ['5.31', index: 8, input: 'HGG42: $5.31', groups: undefined]
console.log(p3.match(regExp3)); // ['899.00', index: 8, input: 'CFMX1: $899.00', groups: undefined]
console.log(p4.match(regExp3)); // ['69.96', index: 8, input: 'XTC99: $69.96', groups: undefined]

const regExp4 = /(?:\$)[0-9.]+/;

console.log(p1.match(regExp4)); // ['$23.45', index: 7, input: 'ABC01: $23.45', groups: undefined
console.log(p2.match(regExp4)); // ['$5.31', index: 7, input: 'HGG42: $5.31', groups: undefined]
console.log(p3.match(regExp4)); // ['$899.00', index: 7, input: 'CFMX1: $899.00', groups: undefined]
console.log(p4.match(regExp4)); // ['$69.96', index: 7, input: 'XTC99: $69.96', groups: undefined]

// 역참조 (backreference)
const regex = /(\b\w+\b)\s+\1/;
// (\b\w+\b): 첫 번째 캡처 그룹
// \s+: 단어 사이에 하나 이상의 공백 문자가 있어야 함
// \1: 첫 번째 캡처 그룹에서 찾은 단어를 다시 참조 즉 첫 번째 단어와 동일한 단어가 공백 뒤에 또 나와야 한다는 의미
const str11 = "hello hello";
const str12 = "hello world";

console.log(regex.test(str11)); // true (두 번 연속해서 "hello"가 나옴)
console.log(regex.test(str12)); // false ("hello"와 "world"는 서로 다름)
