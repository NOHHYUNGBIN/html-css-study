"use strict";
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const navDarkMode = () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
};
// Home 섹션을 페이지 아래로 스크롤시 투명처리
const homeOpacity = () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
};
// 상단으로 가는 화살표 홈화면 반이상 내려갔을때 보이도록
const arrowUpHide = () => {
  const arrowUp = document.querySelector(".arrow-up");
  if (window.scrollY > homeHeight / 2) arrowUp.style.opacity = 1;
  else arrowUp.style.opacity = 0;
};

//스크롤 이벤트처리
document.addEventListener("scroll", () => {
  navDarkMode();
  homeOpacity();
  arrowUpHide();
});

// Navbar 햄버거 버튼 클릭처리
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭시 메뉴 닫아주기
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
