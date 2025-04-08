function burgerMenu() {
  var fetchNav = document.getElementById("navbar");
  if (fetchNav.style.display === "block") {
    fetchNav.style.display = "none";
  } else {
    fetchNav.style.display = "block";
  }
}
