function showNav() {
  document.getElementById('sideNav').style.right = "0";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
  document.getElementById('fullBodyOverlay').style.display = "block";
}
function hideNav() {
  document.getElementById('sideNav').style.right = "-500px";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'visible';
  document.getElementById('fullBodyOverlay').style.display = "none";
}
function hideOverlay() {
  document.getElementById('sideNav').style.right = "-500px";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'visible';
  document.getElementById('fullBodyOverlay').style.display = "none";
}