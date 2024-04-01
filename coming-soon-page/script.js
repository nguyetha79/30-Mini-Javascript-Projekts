let countDownDate = new Date("April 22, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysContainer = document.getElementById("days");
  const hoursContainer = document.getElementById("hours");
  const minutesContainer = document.getElementById("minutes");
  const secondsContainer = document.getElementById("seconds");

  daysContainer.innerHTML = days;
  hoursContainer.innerHTML = hours;
  minutesContainer.innerHTML = minutes;
  secondsContainer.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    daysContainer.innerHTML = "";
    hoursContainer.innerHTML = "";
    minutesContainer.innerHTML = "";
    secondsContainer.innerHTML = "";
  }
}, 1000);
