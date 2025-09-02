const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", event => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert("회원가입되었습니다! 로그인 페이지로 이동합니다.");
});