let case1 = document.querySelector(".case1button");
let case2 = document.querySelector(".case2button");
let case3 = document.querySelector(".case3button");

case1.onclick = function () {
  let text = document.querySelector(".case1input");
  console.log(text);
  text.style.display = "block";
  document.querySelector(".case1output").style.display = "block";
  document.querySelector(".case3input").style.display = "none";
  document.querySelector(".case2input").style.display = "none";
  document.querySelector(".case3output").style.display = "none";
  document.querySelector(".case2output").style.display = "none";
};
case2.onclick = function () {
  let text = document.querySelector(".case2input");
  text.style.display = "block";
  document.querySelector(".case2output").style.display = "block";
  document.querySelector(".case1input").style.display = "none";
  document.querySelector(".case3input").style.display = "none";
  document.querySelector(".case3output").style.display = "none";
  document.querySelector(".case1output").style.display = "none";
};
case3.onclick = function () {
  let text = document.querySelector(".case3input");
  text.style.display = "block";
  document.querySelector(".case3output").style.display = "block";
  document.querySelector(".case1input").style.display = "none";
  document.querySelector(".case2input").style.display = "none";
  document.querySelector(".case1output").style.display = "none";
  document.querySelector(".case2output").style.display = "none";
};
