const siteTop = document.querySelector(".site-top");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a, .header-actions a");
const methodCards = document.querySelectorAll("[data-method]");
const inquiryTarget = document.querySelector("#conversation-form");
const anchorLinks = document.querySelectorAll('a[href*="#"]');

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

function normalizedPath(pathname) {
  const cleanPath = pathname.replace(/\/$/, "/index.html");
  return cleanPath.endsWith("/index.html") ? cleanPath : cleanPath;
}

function isSamePageUrl(url) {
  const currentPath = normalizedPath(window.location.pathname);
  const targetPath = normalizedPath(url.pathname);

  if (url.origin !== window.location.origin) return false;
  if (currentPath === targetPath) return true;
  return currentPath.endsWith("/index.html") && targetPath.endsWith("/index.html");
}

function scrollToElement(target) {
  if (!target) return;

  closeMenu();

  const headerOffset = (siteTop?.getBoundingClientRect().height || 0) + 22;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    left: 0,
    behavior: "smooth",
  });
}

function scrollToHash(hash, updateHistory = true) {
  if (!hash) return false;

  const targetId = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(targetId);
  if (!target) return false;

  scrollToElement(target);

  if (updateHistory) {
    history.pushState(null, "", hash);
  }

  return true;
}

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    const url = new URL(href, window.location.href);
    if (!url.hash || !isSamePageUrl(url)) return;

    event.preventDefault();
    scrollToHash(url.hash);
  });
});

window.addEventListener("load", () => {
  if (!window.location.hash) return;

  window.setTimeout(() => {
    scrollToHash(window.location.hash, false);
  }, 80);
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
      scrollToElement(inquiryTarget);
    }
  });
});

const calculator = document.querySelector("#mortgage-calculator");

if (calculator) {
  let calculatorTerm = 30;

  const calcInput = (id) => calculator.querySelector(`#${id}`);
  const formatCurrency = (value) => `$${Math.round(value).toLocaleString("en-US")}`;
  const homePrice = calcInput("calcHomePrice");
  const downPayment = calcInput("calcDownPayment");
  const downPct = calcInput("calcDownPct");
  const downPctLabel = calcInput("calcDownPctLabel");
  const rate = calcInput("calcRate");
  const rateLabel = calcInput("calcRateLabel");
  const taxes = calcInput("calcTaxes");
  const termGroup = calcInput("calcTermGroup");

  function calculatePrincipalInterest(principal, annualRate, years) {
    if (principal <= 0) return 0;

    const monthlyRate = annualRate / 100 / 12;
    const payments = years * 12;

    if (monthlyRate === 0) return principal / payments;

    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) /
      (Math.pow(1 + monthlyRate, payments) - 1)
    );
  }

  function updateCalculator() {
    const price = Number.parseFloat(homePrice.value) || 0;
    const down = Number.parseFloat(downPayment.value) || 0;
    const annualRate = Number.parseFloat(rate.value) || 0;
    const monthlyExtras = Number.parseFloat(taxes.value) || 0;
    const loanAmount = Math.max(0, price - down);
    const paymentCount = calculatorTerm * 12;
    const principalInterest = calculatePrincipalInterest(loanAmount, annualRate, calculatorTerm);
    const monthlyTotal = principalInterest + monthlyExtras;
    const totalInterest = Math.max(0, principalInterest * paymentCount - loanAmount);
    const totalCost = principalInterest * paymentCount;
    const principalPercent = totalCost > 0 ? Math.min(100, (loanAmount / totalCost) * 100) : 50;
    const interestPercent = Math.max(0, 100 - principalPercent);

    calcInput("calcPiResult").textContent = formatCurrency(principalInterest);
    calcInput("calcTotalResult").textContent =
      monthlyExtras > 0
        ? `+ ${formatCurrency(monthlyExtras)} taxes/ins = ${formatCurrency(monthlyTotal)}/mo total`
        : "Principal & Interest only";
    calcInput("calcSummaryPrice").textContent = formatCurrency(price);
    calcInput("calcSummaryDown").textContent = `${formatCurrency(down)} (${
      price > 0 ? ((down / price) * 100).toFixed(1) : "0.0"
    }%)`;
    calcInput("calcSummaryLoan").textContent = formatCurrency(loanAmount);
    calcInput("calcSummaryRate").textContent = `${annualRate.toFixed(3)}% / ${calculatorTerm} yr`;
    calcInput("calcSummaryInterest").textContent = formatCurrency(totalInterest);
    calcInput("calcSummaryTotal").textContent = formatCurrency(totalCost);
    calcInput("calcBarPrincipal").style.width = `${principalPercent.toFixed(1)}%`;
    calcInput("calcBarInterest").style.width = `${interestPercent.toFixed(1)}%`;
  }

  homePrice?.addEventListener("input", () => {
    const price = Number.parseFloat(homePrice.value) || 0;
    const percentage = Number.parseFloat(downPct.value) || 20;
    downPayment.value = Math.round((price * percentage) / 100);
    updateCalculator();
  });

  downPayment?.addEventListener("input", () => {
    const price = Number.parseFloat(homePrice.value) || 1;
    const down = Number.parseFloat(downPayment.value) || 0;
    const percentage = Math.min(100, (down / price) * 100);

    downPct.value = percentage.toFixed(1);
    downPctLabel.textContent = `${percentage.toFixed(1)}%`;
    updateCalculator();
  });

  downPct?.addEventListener("input", () => {
    const price = Number.parseFloat(homePrice.value) || 0;
    const percentage = Number.parseFloat(downPct.value) || 0;

    downPayment.value = Math.round((price * percentage) / 100);
    downPctLabel.textContent = `${percentage.toFixed(1)}%`;
    updateCalculator();
  });

  rate?.addEventListener("input", () => {
    rateLabel.textContent = `${(Number.parseFloat(rate.value) || 0).toFixed(3)}%`;
    updateCalculator();
  });

  taxes?.addEventListener("input", updateCalculator);

  termGroup?.addEventListener("click", (event) => {
    const button = event.target.closest(".calc-term-button");
    if (!button) return;

    termGroup.querySelectorAll(".calc-term-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    calculatorTerm = Number.parseInt(button.dataset.term, 10);
    updateCalculator();
  });

  updateCalculator();
}
