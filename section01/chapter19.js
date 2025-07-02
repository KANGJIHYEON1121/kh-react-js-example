// 배열 내장 함수(forEach)
const arr = [1, 2, 3, 4];
const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// forEach 문
// arr.forEach((e, index, array) => {
//     console.log(e)
//     newArr.push(e);
//     // console.log(index);
//     // console.log(array);
// });

// console.log(newArr);

// map 매서드
const newArr2 = arr.map(numArr => numArr * 2);
console.log(newArr2)

// 배열 내장객체 찾기
let num = 3;
console.log(`${num} 값 유무 확인(includes) : ${arr.includes(num)}`);

// 배열 내장객체 indexof
console.log(`${num} 값 위치 확인(indexOf) : ${arr.indexOf(num)}`);

// 내장객체 findindex
console.log(`${num}의 findindex : ${arr.findIndex(e => e === num)}`);

// 배열내장객체 find
let arr5 = [
    { name: "구길동" },
    { name: "홍길동" },
];

console.log(arr5.find(e => e.name === "구길동"));


// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter(item => item.hobby === "테니스");
console.log(tennisPeople);

// 배열 내장객체 map
const names = arr1.map(e => e.name);
console.log(names);
