"use strict";

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectContainer = document.querySelector(".projects");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;
  if (!filter) return;
  handleActiveSelection(e.target);
  filterProjects(filter);
});

const handleActiveSelection = (target) => {
  const activeMenu = document.querySelector(".category--selected");
  activeMenu.classList.remove("category--selected");
  target.classList.add("category--selected");
};

const filterProjects = (filter) => {
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectContainer.classList.add("anim-out");
  setTimeout(() => projectContainer.classList.remove("anim-out"), 250);
};
