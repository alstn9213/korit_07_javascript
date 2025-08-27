// document.write('자바스크립트 js파일에 위치<br>');

// var greeting = 'Hello World!';

// console.log('Hello, Javascript');
// console.log(greeting);

// let car; // 변수선언
// console.log(car);

// const person = {
//   firstName: 'Jone',
//   lastName: 'Doe',
//   age: 20,
//   eyeColor: 'blue'
// };
// // 객체의 출력
// console.log(person);

// //  객체의 property 수정방법 #1
// person.firstName = '일'; // java에서의 field 수정법 유사
// person.lastName = '김'; // access modifier 배우기 이전
// console.log(person);

// //  객체의 property 수정방법 #2
// person['eyeColor'] = '검은색'; // java에서의 map 수정방법과 유사
// console.log(person);

// let x = '안녕';
// let y = 30;

// // typeof 사용법
// console.log(typeof x); // string
// console.log(typeof y); // number

// console.log(typeof {x:1, y:2}); // object
// console.log(typeof [1,2,3]); // object

//  비교 연산자 부분
let a = 3;
let b = '3';

console.log(a == b); // true
console.log(a === b); // false

let point = 92;
let grade = (point >= 90) ? 'A' : (point >= 80) ? 'B' : 'C';
console.log(grade);