// localStorage에 문자열 데이터와 배열 데이터를 저장하는 예시

if(typeof Storage !== 'undefined') { // Storage가 검색됐으니 별문제 없다.
  localStorage.setItem('title', 'review: 파이팅');
  /**
   * .setItem()이라는 메서드가 있고 거기에 2개의 인자를 넣는다. 두번째 매개변수인 value값의 경우 원래 string 자료형이라면 있는 그대로.
   * 
   * 넣을 데이터 예시 - JS배열인데, 내부 element가 객체 -> string으로의 변환과정이 필요하다.
   */
  const users = [
    {
      id: 1,
      name: '김일',
    },{
      id: 2,
      name: '김이',
    },
  ];
  localStorage.setItem('users', JSON.stringify(users));
}

// localStorage내에 있는 데이터를 조회하는 예시
if(Storage !== undefined) {
  console.log(localStorage.getItem('title'));
  console.log(localStorage.getItem('users'));
  // 둘의 결과값 자료형은 전부 string에 해당한다.
  // 그래서 string으로 쓸거라면 문제없겠지만 굳이 객체 정보로 저장한걸 string으로 쓸리가 없으니까 다시 원상복구하는 메서드가 필요하다.
  console.log(JSON.parse(localStorage.getItem('users')));
  const usersFromLocal = JSON.parse(localStorage.getItem('users'));
  console.log(usersFromLocal);
  console.log(usersFromLocal[0].name);
}

// 삭제예시
localStorage.removeItem('title');