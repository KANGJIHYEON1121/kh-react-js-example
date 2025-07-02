// 함수 호이스팅
add(10, 20);

// 함수 선언문 : 함수 호이스팅
function add(num1, num2) {
    console.log(num1 + num2);
}

// add2();  // 호이스팅 X

// 함수 표현식 : 호이스팅 X 
let add2 = function (num1, num2) {
    console.log(num1 + num2);
}

add2(10, 20);

let sub = (num1, num2) => console.log(num1 + num2);

sub(10, 30);
// add3(); // 호출 X
console.log(sub);

// 콜백함수의 활용
let sub1 = (num1, num2) => console.log(num1 + num2);
let sub2 = (num1, num2) => console.log(num1 * num2);
let sub3 = (func, num1, num2) => {
    console.log(num1 / num2);
    func(num1, num2);
}

// 함수 호출
sub3(sub2, 10, 2);
sub3(sub1, 30, 20);

// 응용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

function repeat2(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        let result = callback(idx, idx);
        console.log(`result = ${result}`);
    }
}

let add = (a, b) => a + b;
let mul = (a, b) => a * b;
let mi = (a, b) => a - b;
let zz = (a, b) => a / b;

repeat2(5, add);
// repeat2(5, mul);
// repeat2(5, mi);
// repeat2(5, zz);


// repeat(5, (idx) => {
//     console.log(idx);
// });
// repeat(5, (idx) => {
//     console.log(idx * 2);
// });
// repeat(5, (idx) => {
//     console.log(idx * 3);
// });