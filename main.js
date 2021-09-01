const menu = document.querySelector('.menu');
const navTab = document.querySelector('.nav-tab');
const midHr = document.getElementById('mid-menu');
const menuHr = document.querySelectorAll('.menu-hr');
const menuText = document.querySelector('.menu-text');

function hr(color) {
 for (var i = 0; i < menuHr.length; i++) {
  menuHr[i].style.backgroundColor = color;
 }
}

menu.addEventListener('click', function() {
 if (navTab.style.width == '100%') {
  navTab.setAttribute('style', "width:0; height: 0;")
  midHr.style.width = '70%';
  hr('coral');
  menuText.style.color = 'coral'
 } else {
  navTab.setAttribute('style', "width:100%; height: 100px;")
  midHr.style.width = '100%';
  hr('white');
  menuText.style.color = 'white';
 }
})

const navLink = document.querySelectorAll('.nav-tab a');
for (let i = 0; i < navLink.length; i++) {
 navLink[i].addEventListener('click', function () {
  navTab.setAttribute('style', 'width:0; height: 0;')
 })
}