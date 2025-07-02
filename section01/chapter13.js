// 객체생성(생성자 객체, 리터럴 객체)
let obj1 = new Object();
let obj2 = {};

console.log(obj1);
console.log(obj2);


let person = {
    name: "홍길동",
    age: 30,
    hobby: "축구",
    job: "Developer",
    extra: {}, //객체도 들어올수 있음
    extra2: function () { }, //함수도 들어올수 있다.
    "like cat": true, //한칸띄는 변수가 있으면 “”
};

person.name = 10;
console.log(person)
console.log(person.name);
console.log(person["name"]);

// 객체에 없는 키와 값을 넣으면 자동으로 추가
person.random = "abc";
console.log(person);

// 키 삭제
delete person.random;
console.log(person);

// 객체 존재 유무 확인
let result1 = "name" in person;
console.log(result1);