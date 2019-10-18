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

//ik ben nu zover dat wanneer ik op menu click hier een eventhandler aan hangt
//nu moet ik zorgen dat wanneer ik erop klik de hele lijst
//eerst verdwijnt
//dan terugkomt

//als ik klik dan verdwijnt ul   class lijst
//if  klik dan verdwijnt lijst
//vb
//if (click = true) {
//
//                }
//en
//als ik klik dan komt ul class lijst lijst tevoorschijn
//if  klik dan

//wat moet er gebeuren wanner ik erop klik, dan
//menu open
