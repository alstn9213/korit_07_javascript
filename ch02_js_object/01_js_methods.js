// 빈 객체 생성
let person = new Object();
// 멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.getFullName = function() {
  return this.firstName + " " + this.lastName;
}
/**
 * js는 함수를 변수에 저장할 수 있다.
 * 그래서 객체명.함수명()으로 호출할 테니까 method라고 할 수 있다.
 */
console.log(person.getFullName());
// 결과값 : John Doe

// String-indexOf()
let a = 'asfd';
let em = a.indexOf('a')
console.log(em);

// String-slice()
let str2 = "Apple, Banana, Kiwi";
let result2 = str2.slice(7, 12);
let result3 = str2.slice(7, 13);
console.log(result2); // Banan
console.log(result3); // Banana

/**
 * 한계값 바로 앞까지만 불러온다.
 * 즉, slice()의 두 번째 매개변수를 for문에서의 한계값 설정할 때 초과 미만을 사용하는 것과 유사하다.
 */

let result4 = str2.slice(7);
console.log(result4); //Banana, Kiwi
// 매개변수가 하나일 경우 그곳부터 끝까지 출력
/**
 * 맨 마지막 문자열의 index를 -1로 잡고 앞으로 올 때마다 -1씩 더해준다.
 */

let result5 = str2.slice(-12);
console.log(result5); //Banana, Kiwi

/**
 * 굳이 마이너스 인덱스를 써야하는 경우
 * 자동차 차량 번호판
 * 12일5678
 * 370수5690
 * 
 * 7번지로 출력하려고 하면 12일5678의 경우 index number 7이 없기 때문에 오류 발생. -1쓰면 해결
 */

// String-substring()
let result6 = str2.substring(7, 13); 
console.log(result6);// Banana
// 마이너스 인덱스를 지원하지 않기 때문에 결과값이 예상과 다르다.
let result7 = str2.substring(-12);
console.log(result7); // Apple, Banana, Kiwi

// String-substr()
let result8 = str2.substr(0,5);
console.log(result8); // Apple

let result9 = str2.substr(-12);
console.log(result9); // Banana, Kiwi

let stc = '부산광역시 부산 진구에 오신 것을 환영합니다.'
let replacedStc = stc.replace('부산', '서울');
console.log(replacedStc); // 서울광역시 부산 진구에 오신 것을 환영합니다.
// 특정 문자열의 첫 번째 값을 교체한다.

let eStc = 'Please visit Seoul and Seoul';
let rpdStc = eStc.replace('SEOUL', 'Busan');
console.log(rpdStc); // Please visit Seoul and Seoul
// 유니코드로 대문자와 소문자 값이 다르기 때문에 대소문자도 구분해야지 replace가 적용된다.

let rpdStc2 = eStc.replace(/SEOUL/i, 'Busan'); // 정규표현식 사용. i는 insensitive, 덜 깐깐하다. 대소문자를 구분하지 않는다.
console.log(rpdStc2);

let rpdStc3 = eStc.replace(/Seoul/g, 'Busan');
console.log(rpdStc3); //Please visit Busan and Busan
// g는 global, 문장 전체 요소를 검색해서 전부 바꿈

// String-concat()
let txt1 = 'Hello';
let txt2 = 'World';
let txt3 = txt1.concat(' ', txt2);
console.log(txt3);
let txt4 = 'Hello' + ' ' + 'World';

// 실무 사용 예시 
// 우리나라는 성과 이름이 붙어있지만 다른 나라는 성과 이름을 공백으로 구분하는 경우가 있다. 
// 그래서 firstName / middleName / lastName 으로 각각 변수에 데이터를 저장하고
// fullName 변수에 .concat()을 적용한 다음 출력하는 방법을 사용할 수 있다.

// String-trim()
let txtSpace = '    Hello, World!    ';
console.log(txtSpace.trim()); // call3() 유형이다.
//  결과값 : Hello, World!

// String-charAt()
let charAtTxt = "I'm tired.";
console.log(charAtTxt.charAt(4)); // t

// String-split()
let birthday = '1988-07-09';
let birthdayArray = birthday.split('-');
console.log(birthdayArray);

