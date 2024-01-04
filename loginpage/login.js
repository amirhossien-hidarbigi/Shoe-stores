function checkLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rememberMe = document.getElementById("rememberMe").checked;

  if (
    email.trim().toLowerCase() === "admin" &&
    password.trim() === "admin" &&
    rememberMe
  ) {
    window.location.href = "/mainpage/main.page.html";
  } else {
    alert("Please enter valid credentials.");
  }
}
