// 다른 개발자가 만들어 놓은 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내가 작업
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName](); // Mike

// 사용자가 접속하면 보는 메시지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
// His name is Mike.
// His age is 30.
