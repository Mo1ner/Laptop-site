// menu icon
const navBtn = document.querySelector(".nav-toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-nav");
const headerTitle = document.querySelector(".header-logo");

navBtn.onclick = function(){
  menuIcon.classList.toggle("menu-icon--active");
  nav.classList.toggle("nav--mobile");
  headerTitle.classList.toggle("logo-mobile");
  document.body.classList.toggle("no-scroll")
}

// dark theme
const themeBtn = document.querySelector();

