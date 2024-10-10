const handleImageInput = (event, quality) => {
  const file = event.target.files[0]; // 사용자가 선택한 파일을 가져옴

  const reader = new FileReader(); // FileReader 객체 생성

  reader.onloadend = () => {
    const image = new Image(); // 이미지 객체 생성
    image.src = reader.result; // FileReader의 결과를 이미지의 src로 설정

    image.onload = (e) => {
      const canvas = document.createElement("canvas"); // canvas 요소 생성
      const ctx = canvas.getContext("2d"); // 2D 컨텍스트 생성

      // canvas의 너비와 높이를 이미지 크기와 동일하게 설정
      canvas.width = e.target.width;
      canvas.height = e.target.height;

      // canvas에 이미지 그리기
      ctx.drawImage(e.target, 0, 0);

      // JPEG 형식으로 지정한 품질(quality)로 이미지를 압축
      const compressedImage = canvas.toDataURL("image/jpeg", quality);

      // 압축된 이미지를 콘솔에 출력
      console.log(compressedImage);
    };

    // 미리보기 이미지를 설정
    document.getElementById("image").src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file); // 파일을 base64 데이터 URL로 읽음
  }
};

const str2 = "안녕하세요";
// const encodeStr2 = window.btoa(str2); // InvalidcharacterError

const str = "The quick brown fox jumps over the lazy dog.";
const encodeStr = window.btoa(str);
// console.log(encodeStr); // VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
const decodeStr = window.atob(encodeStr);
// console.log(decodeStr); // The quick brown fox jumps over the lazy dog.

// 유니코드 => base64
const uni = "🙂";
// const encodeUni = window.btoa(uni); // InvalidCharacterError
const data = encodeURIComponent(uni);
const encodeUni = window.btoa(data);
// console.log(encodeUni); // JUYwJTlGJTk5JTgy
const decodeData = window.atob(encodeUni);
// console.log(decodeData); // %F0%9F%99%82
const decodeUni = decodeURIComponent(decodeData);
// console.log(decodeUni); // 🙂
