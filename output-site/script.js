const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const readingLine = document.querySelector(".reading-line");
const sectionLinks = Array.from(document.querySelectorAll(".nav-links a"));

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const updateReadingLine = () => {
  if (!readingLine) return;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  readingLine.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -48% 0px", threshold: 0 }
  );

  sectionLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) sectionObserver.observe(target);
  });
}

window.addEventListener("scroll", updateReadingLine, { passive: true });
updateReadingLine();
