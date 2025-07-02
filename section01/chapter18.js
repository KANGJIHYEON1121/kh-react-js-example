// 익명 객체
const person = {
    name: "김동진",
    age: 25,
    tall: 175,
    weight: 70,
    gender: "남성",
    email: "kimdj@example.com",
    phone: "010-1234-5678",
    address: "서울특별시 강남구",
    job: "개발자",
    company: "KH정보기술",
    married: false,
    hasPet: true,
    petName: "초코",
    bloodType: "O",
    hobby: "등산",
    favoriteFood: "삼겹살",
    language: "한국어",
    university: "서울대학교",
    major: "컴퓨터공학",
    graduationYear: 2022,
    drivingLicense: true,
    militaryService: "완료"
};
console.log(person["hobby"]);

let keyArr = Object.keys(person);
let valuesArr = Object.values(person);
console.log(keyArr);
console.log(valuesArr);

for (let i = 0; i < keyArr.length; i++) {
    console.log(`${keyArr[i]} : ${person[keyArr[i]]}`);
}

