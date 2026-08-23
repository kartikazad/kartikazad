document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".section").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const style = document.createElement("style");
    style.textContent = ".section.in-view { opacity: 1 !important; transform: translateY(0) !important; }";
    document.head.appendChild(style);
  },
  { once: true }
);
