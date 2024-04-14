let pass = document.getElementById("password");
let msg = document.getElementById("msg");
let strength = document.getElementById("strength");

pass.addEventListener("input", () => {
  const password = pass.value;
  let strengthLevel = "weak";
  let borderColor = "#ff5925";
  let msgColor = "#ff5925";

  if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    strengthLevel = "strong";
    borderColor = "#26d730";
    msgColor = "#26d730";
  } else if (password.length >= 4) {
    strengthLevel = "medium";
    borderColor = "yellow";
    msgColor = "yellow";
  }

  strength.innerHTML = strengthLevel;
  pass.style.borderColor = borderColor;
  msg.style.display = "block";
  msg.style.color = msgColor;
});
