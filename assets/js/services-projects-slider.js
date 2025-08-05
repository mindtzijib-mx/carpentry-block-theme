/**
 * Services Projects Slider Functionality
 * Handles the carousel/slider behavior when there are more than 4 services
 * Responsive: 4 cards on desktop, 2 on tablet, 1 on mobile
 */

document.addEventListener("DOMContentLoaded", function () {
  const servicesGrids = document.querySelectorAll(".services-grid.slider-mode");

  servicesGrids.forEach(function (servicesGrid) {
    const sliderContainer = servicesGrid.querySelector(
      ".services-slider-container"
    );
    const serviceCards = servicesGrid.querySelectorAll(".service-card");
    const prevButton = servicesGrid.parentElement.querySelector(".nav-prev");
    const nextButton = servicesGrid.parentElement.querySelector(".nav-next");

    if (!sliderContainer || serviceCards.length === 0) return;

    let currentIndex = 0;
    const totalCards = serviceCards.length;

    // Get current number of cards to show based on screen size
    function getCardsToShow() {
      const width = window.innerWidth;
      if (width <= 767) return 1; // Mobile: 1 card
      if (width <= 991) return 2; // Tablet: 2 cards
      return 4; // Desktop: 4 cards
    }

    // Get card width percentage based on cards to show
    function getCardWidthPercent() {
      const cardsToShow = getCardsToShow();
      return 100 / cardsToShow; // 25% for 4 cards, 50% for 2 cards, 100% for 1 card
    }

    // Update slider position
    function updateSlider() {
      const cardsToShow = getCardsToShow();
      const cardWidthPercent = getCardWidthPercent();
      const maxIndex = Math.max(0, totalCards - cardsToShow);

      // Ensure currentIndex doesn't exceed maxIndex
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      const translateX = -(currentIndex * cardWidthPercent);
      sliderContainer.style.transform = `translateX(${translateX}%)`;

      // Update button states
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= maxIndex;

      // Add visual feedback for disabled buttons
      prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
      nextButton.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
    }

    // Previous button - move one card to the right
    if (prevButton) {
      prevButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
        }
      });
    }

    // Next button - move one card to the left
    if (nextButton) {
      nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, totalCards - cardsToShow);

        if (currentIndex < maxIndex) {
          currentIndex++;
          updateSlider();
        }
      });
    }

    // Touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    sliderContainer.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    sliderContainer.addEventListener("touchmove", function (e) {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      e.preventDefault(); // Prevent scrolling
    });

    sliderContainer.addEventListener("touchend", function (e) {
      if (!isDragging) return;
      isDragging = false;

      const diffX = startX - currentX;
      const threshold = 50; // Minimum swipe distance
      const cardsToShow = getCardsToShow();
      const maxIndex = Math.max(0, totalCards - cardsToShow);

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0 && currentIndex < maxIndex) {
          // Swipe left - show next service
          currentIndex++;
          updateSlider();
        } else if (diffX < 0 && currentIndex > 0) {
          // Swipe right - show previous service
          currentIndex--;
          updateSlider();
        }
      }
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        // Reset currentIndex if it becomes invalid after resize
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, totalCards - cardsToShow);
        if (currentIndex > maxIndex) {
          currentIndex = maxIndex;
        }
        updateSlider();
      }, 250);
    });

    // Initialize the slider
    updateSlider();
  });
});
