const passwordBox = document.getElementById("password");
const length = 12;
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghigklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!§$%&/()=?*+-_|><#@€[]";

const allChars = upperCase + lowerCase + number + symbols;

generateBtn.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordBox.value);
});
