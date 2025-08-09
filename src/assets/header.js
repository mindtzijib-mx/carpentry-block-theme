/**
 * Header functionality for Carpentry Block Theme
 *
 * Handles mobile menu toggle, search modal, and other interactive features
 */

console.log("Header.js loaded!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing header functionality...");

  // Single initialization with a small delay to ensure elements are rendered
  setTimeout(function () {
    console.log("Delayed initialization started...");
    initializeHeader();
  }, 100);
});

function initializeHeader() {
  console.log("=== Header Initialization ===");

  // Check if already initialized to prevent double initialization
  if (window.headerInitialized) {
    console.log("⚠️ Header already initialized, skipping...");
    return;
  }

  console.log("✅ First time header initialization");

  // Mobile menu functionality
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navigation = document.querySelector(".main-navigation");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  console.log("Elements found:", {
    mobileToggle: mobileToggle,
    navigation: navigation,
    mobileMenuClose: mobileMenuClose,
  });

  if (mobileToggle && navigation) {
    console.log("Adding click event listener to mobile toggle");

    // Remove any existing event listeners to prevent duplicates
    mobileToggle.removeEventListener("click", mobileToggle._clickHandler);

    // Create the click handler function
    const clickHandler = function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling

      // Check current state and toggle accordingly
      const isActive = navigation.classList.contains("active");
      console.log("Current state - isActive:", isActive);

      navigation.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    };

    // Store the handler reference and add the event listener
    mobileToggle._clickHandler = clickHandler;
    mobileToggle.addEventListener("click", clickHandler);

    console.log("Mobile toggle button styled for debugging");
  } else {
    console.error("Mobile menu elements not found!", {
      mobileToggle: !!mobileToggle,
      navigation: !!navigation,
    });
  }

  if (mobileMenuClose && navigation) {
    console.log("Adding close event listener to mobile menu close button");
    mobileMenuClose.addEventListener("click", function () {
      console.log("Mobile menu close button clicked!");
      navigation.classList.remove("active");
      if (mobileToggle) mobileToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  }

  // Search modal functionality
  const searchToggle = document.querySelector("#search-toggle, .search-icon");
  const searchModal = document.querySelector("#search-popup-modal");
  const searchClose = document.querySelector(".mfp-close, .hkangles-mfp-close");
  const searchField = document.querySelector(".hendy-searchform-field");

  console.log("Search elements found:", {
    searchToggle: !!searchToggle,
    searchModal: !!searchModal,
    searchClose: !!searchClose,
    searchField: !!searchField,
  });

  if (searchToggle && searchModal) {
    searchToggle.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Search toggle clicked!");

      // Use multiple approaches to ensure visibility
      searchModal.classList.add("show");
      searchModal.classList.add("mfp-ready");
      searchModal.style.display = "flex";

      console.log("Search modal should now be visible");
      console.log("Modal classes:", searchModal.className);
      console.log("Modal style.display:", searchModal.style.display);

      if (searchField) {
        setTimeout(() => {
          searchField.focus();
          console.log("Search field focused");
        }, 100);
      }
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener("click", function () {
      console.log("Search close clicked!");
      searchModal.classList.remove("show");
      searchModal.classList.remove("mfp-ready");
      searchModal.style.display = "none";
    });
  }

  if (searchModal) {
    // Close when clicking outside the search form
    searchModal.addEventListener("click", function (e) {
      if (e.target === searchModal) {
        console.log("Clicked outside search form, closing...");
        searchModal.classList.remove("show");
        searchModal.classList.remove("mfp-ready");
        searchModal.style.display = "none";
      }
    });

    // Close modal with ESC key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        (searchModal.classList.contains("show") ||
          searchModal.style.display === "flex")
      ) {
        console.log("ESC key pressed, closing search modal...");
        searchModal.classList.remove("show");
        searchModal.classList.remove("mfp-ready");
        searchModal.style.display = "none";
      }
    });
  }

  // Header scroll effect (optional)
  let lastScrollTop = 0;
  const header = document.querySelector(
    ".site-header-container, .wp-block-carpentry-header"
  );

  if (header) {
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      lastScrollTop = scrollTop;
    });
  }

  // Close mobile menu when clicking on menu links
  const menuLinks = document.querySelectorAll(".main-navigation a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 991.98) {
        navigation.classList.remove("active");
        mobileToggle.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991.98) {
      navigation.classList.remove("active");
      mobileToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  // Mark header as initialized to prevent double initialization
  window.headerInitialized = true;
  console.log("🎉 Header initialization completed!");
}
