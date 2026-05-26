const siteTop = document.querySelector(".site-top");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a, .header-actions a");
const methodCards = document.querySelectorAll("[data-method]");
const form = document.querySelector("#conversation-form");
const errorSummary = document.querySelector("#form-errors");
const statusMessage = document.querySelector("#form-status");

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
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector("#name")?.focus({ preventScroll: true });
    }
  });
});

function setFieldError(fieldName, message) {
  const errorElement = document.querySelector(`[data-error-for="${fieldName}"]`);
  const input = document.querySelector(`[name="${fieldName}"]`) || document.querySelector(`#${fieldName}`);
  const field = input?.closest(".field");

  if (errorElement) {
    errorElement.textContent = message || "";
  }

  if (field) {
    field.classList.toggle("invalid", Boolean(message));
  }
}

function getFormValues() {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    situation: String(formData.get("situation") || "").trim(),
    question: String(formData.get("question") || "").trim(),
    followUp: String(formData.get("followUp") || "").trim(),
    acknowledgment: Boolean(formData.get("acknowledgment")),
  };
}

function validateForm() {
  const values = getFormValues();
  const errors = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = values.phone.replace(/\D/g, "");

  ["name", "email", "phone", "question", "followUp", "acknowledgment"].forEach((fieldName) => {
    setFieldError(fieldName, "");
  });

  if (values.name.length < 2 || values.name.length > 100) {
    const message = "Please add your name so ECMA knows who to follow up with.";
    errors.push(message);
    setFieldError("name", message);
  }

  if (!values.email && !values.phone) {
    const message = "Please add an email or phone number so ECMA can follow up.";
    errors.push(message);
    setFieldError("email", message);
    setFieldError("phone", message);
  }

  if (values.email && !emailPattern.test(values.email)) {
    const message = "Please enter a valid email address or add a phone number instead.";
    errors.push(message);
    setFieldError("email", message);
  }

  if (values.phone && (phoneDigits.length < 10 || phoneDigits.length > 15)) {
    const message = "Please enter a valid phone number or add an email address instead.";
    errors.push(message);
    setFieldError("phone", message);
  }

  if (values.question.length < 20 || values.question.length > 1000) {
    const message = "Please add the main question you want to talk through.";
    errors.push(message);
    setFieldError("question", message);
  }

  if (!values.followUp) {
    const message = "Please choose how ECMA should follow up.";
    errors.push(message);
    setFieldError("followUp", message);
  }

  if (!values.acknowledgment) {
    const message = "Please confirm that this is a conversation request, not a formal application.";
    errors.push(message);
    setFieldError("acknowledgment", message);
  }

  return { values, errors };
}

function showErrors(errors) {
  if (!errorSummary) {
    return;
  }

  if (!errors.length) {
    errorSummary.hidden = true;
    errorSummary.textContent = "";
    return;
  }

  errorSummary.hidden = false;
  errorSummary.innerHTML = `<strong>Please fix the following:</strong><ul>${errors
    .map((error) => `<li>${error}</li>`)
    .join("")}</ul>`;
  errorSummary.focus();
}

function buildMailto(values) {
  const subject = encodeURIComponent("ECMA buyer conversation request");
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email || "Not provided"}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Buying process: ${values.situation || "Not provided"}`,
      `Preferred follow-up: ${values.followUp}`,
      "",
      "Question:",
      values.question,
      "",
      "Acknowledgment: This is a conversation request, not a formal loan application or approval decision.",
    ].join("\n"),
  );

  return `mailto:contact@emeraldcitymortgageadvisors.com?subject=${subject}&body=${body}`;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const { values, errors } = validateForm();
  showErrors(errors);

  if (statusMessage) {
    statusMessage.hidden = true;
    statusMessage.textContent = "";
  }

  if (errors.length) {
    return;
  }

  if (statusMessage) {
    statusMessage.hidden = false;
    statusMessage.textContent =
      "Your email app should open with the message filled in. Review it before sending.";
  }

  window.location.href = buildMailto(values);
});
