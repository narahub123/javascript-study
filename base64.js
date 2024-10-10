const handleImageInput = (event) => {
  const image = event.target.files[0];
  console.log("image 정보", image);

  const reader = new FileReader();
  console.log("reader 정보", reader);

  // 2. loading(읽기) 완료 후 base64로 인코딩된 data url을 이미지 태그의 src 속성에 적용
  reader.onloadend = () => {
    console.log("reader 결과", reader.result);

    document.getElementById("image").src = reader.result;
  };

  // 1. 선택되 이미지 파일을 readAsDataURL()을 통해서 base64로 인코딩된 data url 형태로 읽음
  if (image) {
    reader.readAsDataURL(image);
  }
};

const str2 = "안녕하세요";
// const encodeStr2 = window.btoa(str2); // InvalidcharacterError

const str = "The quick brown fox jumps over the lazy dog.";
const encodeStr = window.btoa(str);
console.log(encodeStr); // VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
const decodeStr = window.atob(encodeStr);
console.log(decodeStr); // The quick brown fox jumps over the lazy dog.

// 유니코드 => base64
const uni = "🙂";
// const encodeUni = window.btoa(uni); // InvalidCharacterError
const data = encodeURIComponent(uni);
const encodeUni = window.btoa(data);
console.log(encodeUni); // JUYwJTlGJTk5JTgy
const decodeData = window.atob(encodeUni);
console.log(decodeData); // %F0%9F%99%82
const decodeUni = decodeURIComponent(decodeData);
console.log(decodeUni); // 🙂
