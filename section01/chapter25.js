// 기본 날짜
let date1 = new Date();
console.log(date1);

// 설정 날짜
let date2 = new Date(2025, 7 - 1, 2, 23, 59, 59);
console.log(date2);

// 타임스탬프
let date3 = new Date();
let timeValue = date3.getTime();
console.log(timeValue);

// 타입스탬프 => 날짜로 변경
let date4 = new Date(timeValue);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
// date1.setFullYear(2024);
// date1.setMonth(2 + 1);
// date1.setDate(30);
// date1.setHours(23);
// date1.setMinutes(59);
// date1.setSeconds(59);
// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
//시간은 제외하고 날짜만 출력하기
console.log(date1.toDateString());

//현지화된 문자에 맞게 출력하기
console.log(date1.toLocaleString());