const scriptURL =
"https://script.google.com/macros/s/AKfycbyTU9ohHIE-2ZE50joFqLs5T0SJEu35vDeK-0bjH1Wvsqfrq-q_4D50EUKQs61UYQg5/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Thank you for subscribing!";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});