let productImg = document.getElementById("product-img");
let btns = document.getElementsByClassName("btn");

btns[0].onclick = function () {
  productImg.src = "images/image1.png";
  for (bt of btns) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btns[1].onclick = function () {
  productImg.src = "images/image2.png";
  for (bt of btns) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btns[2].onclick = function () {
  productImg.src = "images/image3.png";
  for (bt of btns) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
