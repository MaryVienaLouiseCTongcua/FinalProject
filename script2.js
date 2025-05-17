document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const sexInput = document.querySelector('input[name="sex"]:checked');

  let hasError = false;

  // Reset all error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!firstName) {
    document.getElementById("errorFirstName").textContent = "required";
    hasError = true;
  }
  if (!lastName) {
    document.getElementById("errorLastName").textContent = "required";
    hasError = true;
  }
  if (!sexInput) {
    document.getElementById("errorSex").textContent = "required";
    hasError = true;
  }
  if (!email) {
    document.getElementById("errorEmail").textContent = "required";
    hasError = true;
  }
  if (!password) {
    document.getElementById("errorPassword").textContent = "required";
    hasError = true;
  }
  if (!reason) {
    document.getElementById("errorReason").textContent = "required";
    hasError = true;
  }

  if (!hasError) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("sex", sexInput.value);
    localStorage.setItem("reason", reason);

    window.location.href = "proj_profile_tongcua.html";
  }
});
