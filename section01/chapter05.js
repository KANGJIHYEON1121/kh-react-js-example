let num1 = 10;
let num2 = 3;

console.log(num1 / num2);

// number 타입 Infinity(양수 무한대)
// number 타입 -Infinity(음수 무한대)
// NaN(Not a Number)
let num3 = Infinity;
let num4 = -Infinity;
let num5 = NaN;
let num6 = 2 * "3abc";
let num7 = null;

console.log(typeof num3, num3);
console.log(typeof num4, num4);
console.log(typeof num5, num5);
console.log(num6);
console.log(num7);

// 형변환(강제형변환)
let str1 = "10";
let str2 = "30";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);
console.log(str1 + str2);

// 형변환 결과값이 NaN 나오는 경우
// Number, parseInt 차이점
let num8 = Number("20a");
let num9 = parseInt("20a");
let num10 = parseInt("a20");

console.log("Number", num8);
console.log("parseInt", num9);
console.log("parseInt", num10);

// null 병합 연산자
// a 변수에 절대 null, undefined 들어가면 안될 경우
let a;
let b = null;
a = b;

a = b ?? 0;
console.log(`a = ${a}`)