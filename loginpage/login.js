function checkLogin() {
  // Replace this with your actual login validation logic
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rememberMe = document.getElementById("rememberMe").checked;

  // Example: Check if email and password are not empty
  if (
    email.trim().toLowerCase() === "admin" &&
    password.trim() === "admin" &&
    rememberMe
  ) {
    // Redirect to the next page
    window.location.href = "/mainpage/main.page.html";
  } else {
    // Display an error message or handle the case when credentials are invalid
    alert("Please enter valid credentials.");
  }
}
