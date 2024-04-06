//   alert("abcd")
// const num1 = 4
// console.log(num1 + 1)
// console.log(num1 - 1)
// console.log(num1 * 1)
// console.log(num1 / 1)
// console.log(num1 % 1)
// console.log(num1 ** 1)
// const myName = "A B C D"
// console.log(myName)
// const num1 = 3;
// if (num1 / 2) {
//   console.log("so nay chia het cho 2");
// } else {
//   console.log("so nay khong chia het cho 2");
// }
// loginBtn.innerHTML = "test";
// console.log(loginBtn.innerHTML);
const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginError = document.getElementById("login-error");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
loginBtn.onclick = function () {
  // username check
  if (username.value === "") {
    usernameError.innerHTML = "Please fill in your username";
  } else {
    usernameError.innerHTML = "";
  }
  // password check
  if (password.value === "") {
    passwordError.innerHTML = "Please fill in your password";
  } else {
    usernameError.innerHTML = "";
  }
  // username and password check
  if (
    JSON.parse(localStorage.getItem("UserKey")) == username.value.trim() &&
    password.value.trim()
  ) {
    // login success
    loginError.innerHTML = "";
    window.location.href = "../index.html";
  }
};
