const form = document.getElementById('login-form');
const inputId = document.getElementById('input-id');
const inputPw = document.getElementById('input-pw');

form.addEventListener('submit', (event) => {
  const userId = inputId.value.trim();
  const userPw = inputPw.value.trim();

  if(userPw.length <= 6) {
    alert('6자리 이상의 비밀번호를 입력해주세요.'); 
    return;
  }

  localStorage.setItem('userId', userId);
  localStorage.setItem('userPw', userPw);
  alert('로그인되었습니다.');

});