// const obj = {};
// const parent = { x:1 };
// obj.__proto__;
// obj.__proto__=parent;
// console.log(obj.x);

// const person = {name:'Lee'};
// console.log(person.hasOwnProperty('__proto__')); // __proto__ 프로퍼티는 person의 프로퍼티가 아니라 Object.prototype의 프로퍼티다. 그러므로 결과값은 false 
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// console.log({}.__proto__ === Object.prototype);

// const obj = {};
// const parent2 = {x:1};
// Object.getPrototypeOf(obj);
// Object.setPrototypeOf(obj, parent2);
// console.log(obj.x);

// console.log((function () {}).hasOwnProperty('prototype'));
// console.log(({}).hasOwnProperty('prototype'));

// // 화살표함수는 생성자 함수로 호출할 수 없다. 생성자 함수로 호출할수없으니 prototype 프로퍼티를 소유하지않으며 프로토타입도 생성하지않는다.
// const Person = name => {
//   this.name = name;
// };

// console.log(Person.hasOwnProperty('prototype'));
// console.log(Person.prototype);
// const obj = {
//   foo() {}
// };

// console.log(obj.foo.hasOwnProperty('prototype'));
// console.log(obj.foo.prototype);
// // 생성자 함수로 호출할 의도가 없는 일반함수도 prototype 프로퍼티를 소유하지만 객체를 생성하지않는 일반함수의 prototype 프로퍼티는 의미가 없다.


// // 생성자 함수 Person2
// function Person2(name) {
//   this.name = name;
// }
// // 생성자 함수로 만든 인스턴스 me
// const me = new Person2('Lee');
// //  Person2.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
// console.log(Person.prototype===me.__proto__); // true

// 모든 프로토 타입은 constructor 프로퍼티를 갖는다.
// function Person3(name) {
//   this.name = name;
// }
// const me2 = new Person3('Lee');
// console.log(me2.constructor === Person3); // true

// const obj = new Object();
// console.log(obj.constructor === Object);
// const add = new Function('a', 'b', 'return a+b');
// console.log(add.constructor === Function);

// function Person(name) {
//   this.name = name;
// }
// const me = new Person('Lee');
// console.log(me.constructor === Person); // true

// const obj = {};
// const add = function(a, b) { return a+b;};
// const arr = [1,2,3];

// console.log(obj.constructor === Object); // true

// let obj = new Object();
// console.log(obj); // {}
// class Foo extends Object {}
// new Foo();  // Foo {}
// obj = new Object(123);
// console.log(obj); // Number {123}

// obj=new Object('123');
// console.log(obj); // String {"123"}

// console.log(Person.prototype);

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function() {
//   console.log(`Hi! My name is ${this.name}`);
// };

// const me = new Person('Lee');
// // console.log(me.sayHello);
// console.log(me.hasOwnProperty('name'));

// const Person = (function() {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype = {
//     sayHello() {
//       console.log(`Hi! My name is ${this.name}`);
//     }
//   };
//   return Person;
// }());

// const me = new Person('Lee');

// console.log(me.constructor === Person);
// console.log(me.constructor === Object);

// function repeat(n, f) {
//   for (var i=0; i<n; i++){
//     f(i);
//   }
// }

// var logAll = function(i) {
//   console.log(i);
// };

// repeat(5, logAll);

// var logOdds = function(i) {
//   if(i%2) console.log(i);
// };

// repeat(5, logOdds);



// repeat(5, function(i) {
//   if(i%2) console.log(i);
// });

// var logOdds = function(i) {
//   if(i%2) console.log(i);
// };

// repeat(5, logOdds);

