const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", event => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (password.length < 6) {
    alert("6자리 이상의 비밀번호를 입력해주세요.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("회원가입되었습니다!");
});