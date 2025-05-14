const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const sections = $$(".section");

const observerOptions = {
  root: null,
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  const isSmallScreen = !window.matchMedia("(min-width: 1024px)").matches;

  entries.forEach((entry) => {
    const stickyHeader = entry.target.querySelector(".sticky-header");
    
    if (isSmallScreen) {
      stickyHeader.style.opacity = "1";
      stickyHeader.style.position = "sticky";
      stickyHeader.style.top = "0";
    } else {
      stickyHeader.style.opacity = "";
      stickyHeader.style.position = "";
      stickyHeader.style.top = "";
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});