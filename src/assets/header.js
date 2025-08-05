/**
 * Header functionality for Carpentry Block Theme
 *
 * Handles mobile menu toggle, search modal, and other interactive features
 */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navigation = document.querySelector(".main-navigation");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");

  if (mobileToggle && navigation) {
    mobileToggle.addEventListener("click", function () {
      navigation.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  if (mobileMenuClose && navigation) {
    mobileMenuClose.addEventListener("click", function () {
      navigation.classList.remove("active");
      mobileToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  }

  // Search modal functionality
  const searchToggle = document.querySelector("#search-toggle, .search-icon");
  const searchModal = document.querySelector("#search-popup-modal");
  const searchClose = document.querySelector(".mfp-close, .hkangles-mfp-close");
  const searchField = document.querySelector(".hendy-searchform-field");

  if (searchToggle && searchModal) {
    searchToggle.addEventListener("click", function (e) {
      e.preventDefault();
      searchModal.style.display = "flex";
      searchModal.classList.add("mfp-ready");
      if (searchField) {
        setTimeout(() => searchField.focus(), 100);
      }
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener("click", function () {
      searchModal.style.display = "none";
      searchModal.classList.remove("mfp-ready");
    });
  }

  if (searchModal) {
    searchModal.addEventListener("click", function (e) {
      if (e.target === searchModal) {
        searchModal.style.display = "none";
        searchModal.classList.remove("mfp-ready");
      }
    });

    // Close modal with ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && searchModal.style.display === "flex") {
        searchModal.style.display = "none";
        searchModal.classList.remove("mfp-ready");
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
      if (window.innerWidth <= 992) {
        navigation.classList.remove("active");
        mobileToggle.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      navigation.classList.remove("active");
      mobileToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
