document.getElementById("myBtn").addEventListener("click", function() {
  alert("Check your email");
});
document.querySelector("h1");

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





document.getElementById("email").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("email").style.backgroundColor = "LightGreen";
}


document.getElementById("pwd").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById("pwd").style.backgroundColor = "LightGreen";
}
