
// Scroll animation
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Mobile nav toggle
const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.getElementById("nav-links");
toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  })
);

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const theme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});
