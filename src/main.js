const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

const navDarkMode = () => {
  // Header에 페이지 아래로 스크롤시 다크 스타일링 적용
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
};
const homeOpacity = () => {
  // Home 섹션을 페이지 아래로 스크롤시 투명처리
  home.style.opacity = 1 - window.scrollY / homeHeight;
};
const arrowUpHide = () => {
  const arrowUp = document.querySelector(".arrow-up");
  if (window.scrollY > homeHeight / 2) arrowUp.style.opacity = 1;
  else arrowUp.style.opacity = 0;
};
// Navbar 햄버거 버튼 클릭처ㅣ
const navbarOnClick = () => {};
document.addEventListener("scroll", () => {
  navDarkMode();
  homeOpacity();
  arrowUpHide();
});
document.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
