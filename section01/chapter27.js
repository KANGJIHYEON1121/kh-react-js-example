// Spread 연산자
let arr1 = [1, 2, 3];
let arr2 = [5, ...arr1];
console.log(arr2);

// 2. Spread 연산자(객체)
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    a: obj1.a,
    b: obj1.b,
    c: 3,
    d: 4,
};

let obj3 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

// 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
arr1 = [1, 2, 3];
function funcB(one, ...arguments) {
    console.log(one);
    console.log(arguments);
}

funcB(...arr1);

// 깊은복사 내용 비교
let o1 = { name: "홍길동" };
let o2 = { ...o1 };
let o3 = o1;

console.log(o1 === o2);    // false
console.log(o1 === o3);    // true
console.log(`타입: ${typeof JSON.stringify(o1)}, ${JSON.stringify(o1)}`)     // 문자열로 반환
console.log(JSON.stringify(o1) === JSON.stringify(o2));    //true