/**
 * Presentation Template System - Navigation & Interactions
 *
 * FEATURES:
 * - Keyboard navigation (Arrow keys, Page Up/Down, Home/End)
 * - Progress bar tracking
 * - Navigation dots generation and click handling
 * - Touch/swipe support for mobile
 * - Intersection Observer for active slide detection
 */

(function () {
  "use strict";

  // DOM Elements
  const container = document.querySelector(".presentation-container");
  const slides = document.querySelectorAll(".slide");
  const progressFill = document.querySelector(".progress-fill");
  const navContainer = document.querySelector(".slide-nav");

  // State
  let currentSlideIndex = 0;
  let isScrolling = false;
  let scrollTimeout;

  // Initialize
  function init() {
    if (!container || !slides.length) return;

    createNavDots();
    setupKeyboardNavigation();
    setupScrollListener();
    setupIntersectionObserver();
    setupTouchNavigation();
    updateProgress();
  }

  // Create navigation dots
  function createNavDots() {
    if (!navContainer) return;

    slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.className = "nav-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      navContainer.appendChild(dot);
    });

    updateActiveDot();
  }

  // Keyboard navigation
  function setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Prevent default scrolling for navigation keys
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

  // Touch/Swipe navigation for mobile
  function setupTouchNavigation() {
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;

    container.addEventListener(
      "touchstart",
      (e) => {
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true },
    );

    container.addEventListener(
      "touchend",
      (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
      },
      { passive: true },
    );

    function handleSwipe() {
      const swipeDistance = touchEndY - touchStartY;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          // Swipe down - go to previous
          prevSlide();
        } else {
          // Swipe up - go to next
          nextSlide();
        }
      }
    }
  }

  // Scroll listener for progress bar
  function setupScrollListener() {
    container.addEventListener(
      "scroll",
      () => {
        window.requestAnimationFrame(() => {
          updateProgress();
          detectActiveSlide();
        });
      },
      { passive: true },
    );
  }

  // Intersection Observer for precise active slide detection
  function setupIntersectionObserver() {
    const options = {
      root: container,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target);
          if (index !== -1) {
            currentSlideIndex = index;
            updateActiveDot();
          }
        }
      });
    }, options);

    slides.forEach((slide) => observer.observe(slide));
  }

  // Navigation functions
  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    currentSlideIndex = index;
    slides[index].scrollIntoView({ behavior: "smooth" });
    updateActiveDot();
  }

  function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // Update progress bar
  function updateProgress() {
    if (!progressFill || !container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    progressFill.style.width = `${progress}%`;
  }

  // Update active navigation dot
  function updateActiveDot() {
    if (!navContainer) return;

    const dots = navContainer.querySelectorAll(".nav-dot");
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      } else {
        dot.classList.remove("active");
        dot.removeAttribute("aria-current");
      }
    });
  }

  // Fallback active slide detection from scroll position
  function detectActiveSlide() {
    const scrollPosition = container.scrollTop;
    const slideHeight = window.innerHeight;

    const newIndex = Math.round(scrollPosition / slideHeight);

    if (
      newIndex !== currentSlideIndex &&
      newIndex >= 0 &&
      newIndex < slides.length
    ) {
      currentSlideIndex = newIndex;
      updateActiveDot();
    }
  }

  // Expose API for programmatic control (useful for AI generation)
  window.PresentationTemplate = {
    goToSlide,
    nextSlide,
    prevSlide,
    getCurrentSlide: () => currentSlideIndex,
    getTotalSlides: () => slides.length,
    slides: Array.from(slides),
  };

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
