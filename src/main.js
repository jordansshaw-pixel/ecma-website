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
