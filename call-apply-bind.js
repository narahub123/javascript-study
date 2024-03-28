// call, apply, bind
// 함수 호출 방식과 관계 없이 this를 지정 가능

// call
// 모든 함수에서 사용 가능
// this를 특정 값으로 지정 가능

let mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName(); // this가 윈도우를 가리킴 window.name

showThisName.call(mike); // Mike
showThisName.call(tom); // Tom

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

update.call(mike, 1999, "singer"); // call(param1, param2,...) param1 : this params2,... : 함수의 매개변수
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}

update.call(tom, 2002, "teacher");
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'teacher'}

// apply
// - 함수 매개변수를 처리하는 방법을 제외하면 call과 완전 같음
// - call 일반적인 함수와 마찬가지로 매개변수를 직접 받음
// - apply 매개변수를 배열로 받음

update.apply([mike, 1999, "singer"]); //
console.log(mike); // {name: 'Mike', birthYear: 1999, occupation: 'singer'}

update.apply([tom, 2002, "teacher"]);
console.log(tom); // {name: 'Tom', birthYear: 2002, occupation: 'teacher'}

// const maxNum = Math.max(3, 10, 1, 6, 4);
// const minNum = Math.min(3, 10, 1, 6, 4);

const nums = [3, 10, 1, 6, 4];

// rest
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);

const maxNum = Math.max.apply(null, nums);
// const maxNum = Math.max.apply(null, [3, 10, 1, 6, 4]);

// const maxNum = Math.max.call(null, ...nums);
// const maxNum = Math.max.call(null, 3, 10, 1, 6, 4);

console.log(minNum); // 1
console.log(maxNum); // 10

// bind
// - this 값을 영구히 바꿀 수 있음
mike = {
  name: "Mike",
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike);

updateMike(1980, "police");
console.log(mike); // {name: 'Mike', birthYear: 1980, occupation: 'police'}

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName(); // hello, Mike

let fn = user.showName;

fn(); // hello,
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);

boundFn(); // hello, Mike
