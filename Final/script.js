const body = document.querySelector("body");

document.getElementById("rood");
//console.log("rood");

rood.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "red";
});

document.getElementById("groen");
//console.log("groen");

groen.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "green";
});

document.getElementById("blauw");
//console.log("blauw");

blauw.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "blue";
});

document.getElementById("geel");
//console.log("geel");

geel.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "yellow";
});

document.getElementById("silver");
//console.log("silver");

silver.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "silver";
});

var navigatie = document.getElementById("navigatie");
console.log("navigatie");

var lijst = document.getElementById("lijst");
console.log("lijst");

var menu = document.getElementById("menu");
//console.log("menu");
menu.addEventListener("click", function(aanUit) {
  console.log(aanUit.target);
  console.log(aanUit);

  if (lijst.style.display == "block") {
    lijst.style.display = "none";
  } else {
    lijst.style.display = "block";
  }
});
