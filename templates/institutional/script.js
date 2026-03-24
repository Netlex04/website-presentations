/**
 * Institutional Presentation Template
 * Navigation & Interaction Logic
 * Pure Vanilla JS – no dependencies
 */

(function () {
  "use strict";

  const container = document.querySelector(".presentation");
  const slides = document.querySelectorAll(".slide");
  const progressBar = document.querySelector(".progress-bar");
  const navContainer = document.querySelector(".slide-nav");

  let currentSlide = 0;

  function init() {
    if (!container || !slides.length) return;

    createNavDots();
    setupKeyboard();
    setupScroll();
    setupObserver();
    updateProgress();
  }

  function createNavDots() {
    if (!navContainer) return;

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "nav-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      navContainer.appendChild(dot);
    });

    updateDots();
  }

  function setupKeyboard() {
    document.addEventListener("keydown", (e) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          " ",
          "Home",
          "End",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          nextSlide();
          break;
        case "ArrowUp":
        case "PageUp":
          prevSlide();
          break;
        case "Home":
          goToSlide(0);
          break;
        case "End":
          goToSlide(slides.length - 1);
          break;
      }
    });
  }

  function setupScroll() {
    container.addEventListener(
      "scroll",
      () => {
        window.requestAnimationFrame(() => {
          updateProgress();
          detectSlide();
        });
      },
      { passive: true },
    );
  }

  function setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slides).indexOf(entry.target);
            if (index !== -1) {
              currentSlide = index;
              updateDots();
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      },
    );

    slides.forEach((slide) => observer.observe(slide));
  }

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    currentSlide = index;
    slides[index].scrollIntoView({ behavior: "smooth" });
    updateDots();
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  function updateProgress() {
    if (!progressBar || !container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
  }

  function updateDots() {
    const dots = navContainer?.querySelectorAll(".nav-dot");
    if (!dots) return;

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      } else {
        dot.classList.remove("active");
        dot.removeAttribute("aria-current");
      }
    });
  }

  function detectSlide() {
    const scrollPosition = container.scrollTop;
    const slideHeight = window.innerHeight;

    const index = Math.round(scrollPosition / slideHeight);

    if (index !== currentSlide && index >= 0 && index < slides.length) {
      currentSlide = index;
      updateDots();
    }
  }

  window.PresentationTemplate = {
    goToSlide,
    nextSlide,
    prevSlide,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
