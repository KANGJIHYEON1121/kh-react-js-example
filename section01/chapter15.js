// 상수 객체(const : 상수 수정이 안됨, 선언할때 값을 지정)
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.type = 10;
animal.age = 20;
delete animal.age;
// animal = {};    // 상수 내부에 다른 객체를 지정 X
console.log(animal);

// 메서드
//값이 함수인 프로퍼티를 말함
const person = {
    name: "홍길동",

    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
    //익명함수 가능
    sayHi2: function () {
        console.log("안녕2!");
    },
    //화살표함수 가능
    sayHi3: () => {
        console.log("안녕3!");
    },
    //메서드 선언방식
    sayHi4() {
        console.log("안녕4!");
    },
};

person.sayHi3();