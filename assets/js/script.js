"use strict";

/* ------------------------------
   ELEMENT TOGGLE FUNCTION
--------------------------------*/
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/* ------------------------------
   SIDEBAR (MOBILE)
--------------------------------*/
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

/* ------------------------------
   CONTACT FORM VALIDATION
--------------------------------*/
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

/* ------------------------------
   PAGE NAVIGATION (WORKING)
--------------------------------*/
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const pageName = this.innerHTML.toLowerCase().trim();

    pages.forEach((page) => {
      if (page.dataset.page === pageName) {
        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        page.classList.remove("active");
      }
    });

    navLinks.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

/* ------------------------------
   SMOOTH SCROLL FOR LINKS
--------------------------------*/
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
