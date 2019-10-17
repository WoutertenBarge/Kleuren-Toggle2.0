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

blauw.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "blue";
});

geel.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "yellow";
});

silver.addEventListener("click", function(veranderAchterGrond) {
  console.log(veranderAchterGrond.target);
  console.log(veranderAchterGrond);
  body.style.backgroundColor = "silver";
});
