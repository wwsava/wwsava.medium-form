btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');

btn1.addEventListener("click", function() {
  this.classList.toggle("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
});
btn2.addEventListener("click", function() {
  this.classList.toggle("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
});
btn3.addEventListener("click", function() {
  this.classList.toggle("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn5.classList.remove("active");
});
btn4.addEventListener("click", function() {
  this.classList.toggle("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn5.classList.remove("active");
});
btn5.addEventListener("click", function() {
  this.classList.toggle("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});