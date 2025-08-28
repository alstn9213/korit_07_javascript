let data = {
  'employees' : [
    {
      'firstName': 'John',
      'lastName': 'Doe',
    },{
      'firstName': 'Anna',
      'lastName': 'Smith',
    },{
      'firstName': 'Peter',
      'lastName': 'Parker',
    },
  ],
}

console.log(data);
// 객체를 문자열로 변환
let stringValue = JSON.stringify(data);
console.log(stringValue);

// 서버로부터 응답받은 JSON 데이터를 JavaScript Object의 객체로 변환.
let obj = JSON.parse(stringValue);

console.log(obj);