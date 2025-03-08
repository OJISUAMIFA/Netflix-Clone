var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
// Loader
onload = () => {
  const load = document.getElementById("loader");

  setTimeout(() => {
    load.style.display = "none";
  }, 2500);
};
