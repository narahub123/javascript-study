// 특정 인덱스에 삭제 없이 요소 추가
// var myFish = ["angel", "clown", "mandarin", "strugeon"];
// var removed = myFish.splice(2, 0, "drum");

// console.log(myFish); // (5) ['angel', 'clown', 'drum', 'mandarin', 'strugeon']
// console.log(removed); // [] : 삭제된 요소가 없음

// 특정 인덱스에 여러 요소 추가
// var myFish = ["angel", "clown", "mandarin", "strugeon"];
// var removed = myFish.splice(2, 0, "drum", "guitar");

// console.log(myFish); // (6) ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'strugeon']
// console.log(removed); // [] : 삭제된 요소가 없음

// 특정 인덱스에 한 개의 요소 삭제
// var myFish = ["angel", "clown", "mandarin", "strugeon"];
// var removed = myFish.splice(2, 1);

// console.log(myFish); // (3) ['angel', 'clown', 'strugeon']
// console.log(removed); // ['mandarin'] : 삭제된 요소

// 특정 인덱스에 한 개의 요소 삭제
// var myFish = ["angel", "clown", "mandarin", "strugeon"];
// var removed = myFish.splice(2, 1, "trumpet");

// console.log(myFish); // (4) ['angel', 'clown', 'trumpet', 'strugeon']
// console.log(removed); // ['mandarin'] : 삭제된 요소

// 특정 인덱스에 여러 요소 삭제하고 여러 요소 추가하기
// var myFish = ["angel", "clown", "mandarin", "strugeon"];
// var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// console.log(myFish); // (5)[("parrot", "anemone", "blue", "mandarin", "strugeon")];
// console.log(removed); // ['angel', 'clown'] : 삭제된 요소

// 동적 인덱스에서 여러 요소 삭제하기
// var myFish = ["parrot", "anemone", "blue", "mandarin", "strugeon"];
// var removed = myFish.splice(myFish.length - 3, 2);

// console.log(myFish); // (3) ['parrot', 'anemone', 'strugeon']
// console.log(removed); // ['blue', 'mandarin'] : 삭제된 요소

// 음수 인덱스에서 하나의 요소 삭제하기
// var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// var removed = myFish.splice(-2, 1);

// console.log(myFish); // (3) ['angel', 'clown', 'sturgeon']
// console.log(removed); // ['mandarin'] : 삭제된 요소

// 특정 인덱스 이후 요소 모두 삭제
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

console.log(myFish); // (2) ['angel', 'clown']
console.log(removed); // (2) ['mandarin', 'sturgeon'] : 삭제된 요소
