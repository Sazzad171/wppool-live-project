function showNav() {
  document.getElementById('sideNav').style.right = "0";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
}
function hideNav() {
  document.getElementById('sideNav').style.right = "-500px";
  document.getElementsByTagName("BODY")[0].style.overflowY = 'visible';
}