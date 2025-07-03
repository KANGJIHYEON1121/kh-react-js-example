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