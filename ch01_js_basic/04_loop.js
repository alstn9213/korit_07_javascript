// let brands = ["애플", "구글", "메타", '아마존', '삼성전자'];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);

// for(let i=0; i<brands.length; i++) {
//   console.log('반복문으로 출력한 ' + brands[i]);
// }

// let productList = [
//   {
//   name: '솔의 눈',
//   price: 700,

//   },
//   {
//     name: '레쓰비',
//     price: 780,
  
//   },
//   {
//     name: '오렌지 주스',
//     price: 1400,
  
//   },
//   {
//     name: '맥콜',
//     price: 900,
  
//   },
//   {
//     name: '제로콜라',
//     price: 800,
  
//   },
//   {
//     name: '파워에이드',
//     price: 800,
//   },
// ];

/**
 * 이상의 코드라인에서 주목해야할 부분은 첫번째, 마지막 index에 해당하는 element 다음에도 ','가 찍혀있는데도 오류가 발생하지않는다는 점
 * 두번째, Array의 element인 Object의 마지막 Property의 value값 다음에도 ','가 있지만 오류가 발생하지않는다는 점
 * 추후에 property를 추가하거나 혹은 element를 추가하거나 할 때를 위한 편의성 차원에서 ','를 찍어준다.
 */

// console.log(productList[4].name);
// console.log(productList[4]['name']);

// let peweradeName = productList[5].name;
// let poweradePrice = productList[5].price;
// let solName = productList[0].name;
// let solPrice = productList[0].price;
// // 솔의 눈과 파워에이드 음료수 합을 구하시오
// console.log(peweradeName+ ' 의 가격과 ' + solName + '의 가격은 각각 ' + poweradePrice + '원과' + solPrice + '원으로, 그 합은 ' + (poweradePrice + solPrice) + '원 입니다.')

// let inputCoin = 900;
// let outputList = [];
// for( let i = 0; i < productList.length; i++) {
//   if(inputCoin >= productList[i]['price']) {
//     outputList.push(productList[i]); // 배열에 데이터를 추가하는 메서드 .push()
//   }
// }
// console.log('살 수 있는 음료 목록 : ' + outputList);
// // 살 수 있는 음료 목록 : [object Object],[object Object],[object Object],[object Object],[object Object]

// for(let i=0;i<outputList.length;i++) {
//   console.log(outputList[i]);
// }
// 그런데 list 내부의 객체들을 하나씩 확인하려하니 출력된다.

/**
 * 즉 배열 내부의 객체가 element라면 배열 자체를 console.log(배열명); 으로 출력했을 때 결과값이 [object Object],[object Object],[object Object],[object Object],[object Object] 형식으로만 나오고,
 * 각 객체의 명확한 상태를 알기위해서는 각 element를 추출하는 반복문을 작성해야한다는 것이다.
 */

// for( let i=0;i<outputList;i++){ 
//   for(let j=0;j<outputList[i];j++){
//    console.log(outputList[i][j]); 
//   }
// } // 논리적으로 불가능한 코드
/**
 * outputList의 element 자료형은 객체이고, 객체에는 index number가 존재하지 않으므로 이중 for문을 통해 객체 내부의 각 property를 확인하는 것은 불가능하다.
 * 그럼 마찬가지로 일반 객체의 각 property를 추출해서 데이터를 가공하는 방식이 불가능함을 의미한다.
 */

// 2. for-in 문

let person = {
  fName: '일',
  lName: '김',
  age: 20,

}
// js에서 객체의 반복문을 돌리면 key값을 return한다
// 그래서 해당 key에 할당된 value를 추출하고 싶다면 console.log(person[key]); 같은 방식으로 해야한다.
for(const key in person) { // 추출되는 key는 각각 fName , lName, age 이다.
  console.log(key);
  console.log(person[key]);
  // 이 시점에서 첫 번째 반복이라고 가정하고
  //  key = 'fName';이 저장돼있다고 볼 수 있다.
  // 즉 person.key는 person.fName이 아니라 person.'fName'이라는 점이 문제이다.
  // console.log(person.key); 오류
}


let nums = [1,2,3,4,5,6,7,8,9];
// 일반 for문으로 추출
for(let i=0;i<nums.length;i++){
  console.log(nums[i]);
}
// 객체의 property의 key를 추출할 수 있으니까, 마치 향상된 for문처럼 여겨져서 배열을 for-in문으로 추출시도
// for(let num in nums) {
//   console.log(num);
//   console.log(typeof num); // 결과값 : string
// }

//  3. for-of 문 
//  for-in문의 경우 객체 한정으로 생각하는 편이 낫다.
//  java에서의 enhanced for문에 해당하는 것은 for-of문이다.

for(const num of nums) {
  console.log(num);
  console.log(typeof num);
}

// 4. while 문 : java랑 동일.
// 05_loop_while.html / 05_loop_while.js