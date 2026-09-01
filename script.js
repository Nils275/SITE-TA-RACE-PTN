/* =========================================================
   DRIVE'ON - SCRIPT GLOBAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLogoLoader();
  initMobileMenu();
  initContactForm();
  initCurrentYear();
  initRevealOnScroll();
});

/* =========================================================
   LOADER LOGO - 0% À 100%
========================================================= */
function initLogoLoader() {
  const loader = document.getElementById("logoLoader");
  const percent = document.getElementById("loaderPercent");
  const loaderBar = document.getElementById("loaderBar");

  if (!loader || !percent || !loaderBar) {
    return;
  }

  document.body.classList.add("loading");

  let progress = 0;
  const duration = 1600;
  const start = performance.now();

  const easeOutCubic = (value) => {
    return 1 - Math.pow(1 - value, 3);
  };

  const animateLoader = (currentTime) => {
    const elapsed = currentTime - start;
    const ratio = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(ratio);

    progress = Math.round(eased * 100);

    percent.textContent = progress;
    loaderBar.style.width = `${progress}%`;

    if (ratio < 1) {
      requestAnimationFrame(animateLoader);
    } else {
      setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.classList.remove("loading");
      }, 300);

      setTimeout(() => {
        if (loader && loader.parentNode) {
          loader.remove();
        }
      }, 1100);
    }
  };

  requestAnimationFrame(animateLoader);
}

/* =========================================================
   MENU MOBILE
========================================================= */
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
}

/* =========================================================
   FORMULAIRE DE CONTACT
========================================================= */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Merci pour votre message. Le formulaire est actuellement en démonstration. Il faudra ensuite le connecter à un vrai service d’envoi."
    );

    contactForm.reset();
  });
}

/* =========================================================
   ANNÉE AUTOMATIQUE FOOTER
========================================================= */
function initCurrentYear() {
  const year = document.getElementById("year");

  if (!year) return;

  year.textContent = new Date().getFullYear();
}

/* =========================================================
   ANIMATIONS AU SCROLL
========================================================= */
function initRevealOnScroll() {
  const elementsToReveal = document.querySelectorAll(`
    .hero-egerie-copy,
    .pilot-card,
    .egerie-head,
    .egerie-card,
    .egerie-quote,
    .ds-section-head,
    .ds-service-card,
    .ds-split,
    .ds-offer-card,
    .ds-contact
  `);

  if (!elementsToReveal.length) return;

  elementsToReveal.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    elementsToReveal.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        element.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  revealOnScroll();
}