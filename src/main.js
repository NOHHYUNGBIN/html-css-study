const navDarkMode = () => {
  // Header에 페이지 아래로 스크롤시 다크 스타일링 적용
  const header = document.querySelector(".header");
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
};
const homeOpacity = () => {
  // Home 섹션을 페이지 아래로 스크롤시 투명처리
  const home = document.querySelector(".home__container");
  const homeHeight = home.offsetHeight;
  home.style.opacity = 1 - window.scrollY / homeHeight;
};
document.addEventListener("scroll", () => {
  navDarkMode();
  homeOpacity();
});
