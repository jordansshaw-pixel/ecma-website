const siteTop = document.querySelector(".site-top");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a, .header-actions a");
const methodCards = document.querySelectorAll("[data-method]");
const inquiryTarget = document.querySelector("#conversation-form");

function closeMenu() {
  siteTop?.classList.remove("nav-open");
  document.body.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = siteTop?.classList.toggle("nav-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

methodCards.forEach((card) => {
  card.addEventListener("click", () => {
    methodCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    if (card.dataset.method === "inquiry") {
      inquiryTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
