/**
 * Bold Presentation Template
 * Minimal JavaScript for navigation and interactions
 * Pure vanilla JS - no dependencies
 */

document.addEventListener("DOMContentLoaded", () => {
  const presentation = document.getElementById("presentation");
  const slides = document.querySelectorAll(".slide");
  const navDots = document.querySelectorAll(".nav-dot");
  const progressBar = document.querySelector(".progress-bar");

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Initialize
  function init() {
    updateProgress();
    setupEventListeners();
    setupIntersectionObserver();
  }

  // Setup event listeners
  function setupEventListeners() {
    // Keyboard navigation
    document.addEventListener("keydown", handleKeydown);

    // Navigation dots
    navDots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    // Scroll handling for progress and active states
    presentation.addEventListener("scroll", handleScroll, { passive: true });
  }

  // Keyboard navigation handler
  function handleKeydown(e) {
    // Prevent default scrolling for navigation keys
    if (
      [
        "ArrowDown",
        "ArrowRight",
        " ",
        "PageDown",
        "ArrowUp",
        "ArrowLeft",
        "PageUp",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
      case " ":
      case "PageDown":
        nextSlide();
        break;
      case "ArrowUp":
      case "ArrowLeft":
      case "PageUp":
        prevSlide();
        break;
      case "Home":
        goToSlide(0);
        break;
      case "End":
        goToSlide(totalSlides - 1);
        break;
    }
  }

  // Navigate to next slide
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  // Navigate to previous slide
  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // Go to specific slide
  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      const slide = slides[index];
      slide.scrollIntoView({ behavior: "smooth" });

      // Update current slide index immediately for responsiveness
      currentSlide = index;
      updateNavigation();
      updateProgress();
    }
  }

  // Handle scroll events (throttled)
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateCurrentSlideFromScroll();
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Determine current slide from scroll position
  function updateCurrentSlideFromScroll() {
    const scrollPosition = presentation.scrollTop;
    const slideHeight = window.innerHeight;

    // Calculate which slide is most visible
    const newSlide = Math.round(scrollPosition / slideHeight);

    if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
      currentSlide = newSlide;
      updateNavigation();
    }
  }

  // Update navigation dots and ARIA
  function updateNavigation() {
    navDots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      } else {
        dot.classList.remove("active");
        dot.removeAttribute("aria-current");
      }
    });

    // Update slide ARIA labels for accessibility
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.setAttribute("aria-current", "slide");
      } else {
        slide.removeAttribute("aria-current");
      }
    });
  }

  // Update progress bar
  function updateProgress() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", currentSlide + 1);
  }

  // Intersection Observer for active slide detection (backup method)
  function setupIntersectionObserver() {
    const options = {
      root: presentation,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-slide-index"));
          if (index !== currentSlide) {
            currentSlide = index;
            updateNavigation();
            updateProgress();
          }
        }
      });
    }, options);

    slides.forEach((slide) => observer.observe(slide));
  }

  // Initialize the presentation
  init();
});
