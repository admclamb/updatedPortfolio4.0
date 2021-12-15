"use strict";

const projectNav = document.querySelectorAll(".project-list li");
const projects = document.querySelectorAll(".project");

window.onscroll = (e) => {
  let current = "";

  projects.forEach((item) => {
    const sectionTop = item.offsetTop;
    if (pageYOffset >= sectionTop - 30) {
      current = item.getAttribute("id");
    }
  });

  projectNav.forEach((li) => {
    li.classList.remove("bg-main");
    if (li.classList.contains(current)) {
      li.classList.add("bg-main");
    }
  });
};
