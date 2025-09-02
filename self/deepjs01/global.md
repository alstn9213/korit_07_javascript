# 전역변수
자바스크립트엔진은 런타임이전에 전역변수 선언을 먼저 확인하고 undefined로 초기화한 뒤, 런타임에 값을 할당한다.
그런데 함수안에 있는 지역변수는 런타임에 함수 내부로 진입하고 나서야 확인된다. 
```js
var x ='global';
function foo() {
  console.log(x); // undefined
  var x = 'local';
}

foo();
console.log(x);
```
