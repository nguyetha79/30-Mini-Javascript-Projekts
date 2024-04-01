let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    dragToBox(rightBox, selected);
    dragToBox(leftBox, selected);
  });
}

function dragToBox(targetBox, item) {
  targetBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  targetBox.addEventListener("drop", function (e) {
    targetBox.appendChild(item);
    item = null;
  });
}
