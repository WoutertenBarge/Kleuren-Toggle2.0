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

var menu = document.getElementById("menu");
//console.log("menu");

var navigatie = document.getElementsByClassName("navigatie");
console.log("navigatie"); 




var lijst = document.getElementsByClassName("lijst");
console.log("lijst");

menu.addEventListener("click", function(aanUit) {
  console.log(aanUit.target);
  console.log(aanUit);

  if (navigatie[].className == "open") {
    //shrink
    navigatie.className = "";
  } else {
    //expand
    navigatie.className = "open";
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
