let productList = [
  {
  name: '솔의 눈',
  price: 700,

  },
  {
    name: '레쓰비',
    price: 780,
  
  },
  {
    name: '오렌지 주스',
    price: 1400,
  
  },
  {
    name: '맥콜',
    price: 900,
  
  },
  {
    name: '제로콜라',
    price: 800,
  
  },
  {
    name: '파워에이드',
    price: 800,
  },
];

let inputCoin = 900;

let outputList = [];
for( let i = 0; i < productList.length; i++) {
  if(inputCoin >= productList[i]['price']) {
    outputList.push(productList[i]); // 배열에 데이터를 추가하는 메서드 .push()
  }
}
console.log(outputList);

for( let i=0;i<outputList.length;i++){
  for(let j=0;j<outputList[i];j++){
  console.log(outputList[i][j]); 
  }
}