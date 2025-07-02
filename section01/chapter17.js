// 단락 평가 테스팅
let falseFunc = () => {
    console.log("false 함수");
    return false;
}

let trueFunc = () => {
    console.log("true 함수");
    return true;
}

console.log(trueFunc() && falseFunc());
console.log(trueFunc() || falseFunc());


function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}
printName(); // 출력: person의 값이 없음
printName({ name: "홍길동" }); //출력: 홍길동


