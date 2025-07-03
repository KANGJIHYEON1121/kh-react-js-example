// 3.1 객체 순회, Object.keys 사용
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
};

// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

// 3.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
    console.log(value);
}

// 4 for in
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}


// 향상된 for문으로 객체의 키값을 가져오는 방법
let personArray = [{
    name: "홍길동",
    age: 27,
    hobby: "테니스",
},
{
    name: "홍길동",
    age: 27,
    hobby: "테니스",
}];

// for( : ), for ( of (배열)), for ( in (객체, 배열))
for (let person of personArray) {
    console.log(person);
}
for (let data in person) {
    console.log(`${data} = ${person[data]}`);
}