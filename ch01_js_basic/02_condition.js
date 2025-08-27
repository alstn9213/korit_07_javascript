

let age = 12; 
let busFare = 0;

if(age >= 70) {
  busFare = 0;
} else if(age >= 20) {
  busFare = 1200;
} else if(age >= 14 && age <= 19) {
  busFare = 720;
} else if(age >= 8 && age <= 13) {
  busFare = 450;
} 

console.log(age + " 살의 버스요금은 " + busFare + "입니다.");