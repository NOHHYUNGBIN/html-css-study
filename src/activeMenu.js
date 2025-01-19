"use strict";

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];

const sections = sectionIds.map((id) => document.querySelector(id));
const menuItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let activeMenuItem = menuItems[0];

const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  const menuIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);

  selectMenuItem(menuIndex);
}

const findFirstIntersecting = (intersections) => {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
};

const selectMenuItem = (index) => {
  const menuItem = menuItems[index];
  if (!menuItem) return;
  activeMenuItem.classList.remove("active");
  activeMenuItem = menuItem;
  activeMenuItem.classList.add("active");
};
