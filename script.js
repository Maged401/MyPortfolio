// Scroll-triggered reveal animations using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "-60px 0px" }
);

document.querySelectorAll(".fade-in, .reveal, .reveal-right").forEach((el) => {
  observer.observe(el);
});

// Nav background on scroll
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.style.background = "rgba(11, 21, 36, 0.95)";
  } else {
    nav.style.background = "rgba(11, 21, 36, 0.75)";
  }
});
