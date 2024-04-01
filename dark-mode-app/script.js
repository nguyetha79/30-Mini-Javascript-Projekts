const icon = document.getElementById("icon");

if (localStorage.getItem("theme") == "") {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");
if (localData == "light") {
  icon.src = "images/dark_icons/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "images/dark_icons/sun.png";
  document.body.classList.add("dark-theme");
}

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/dark_icons/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/dark_icons/moon.png";
    localStorage.setItem("theme", "light");
  }
});
