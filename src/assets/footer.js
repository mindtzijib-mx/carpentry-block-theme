/**
 * Footer functionality for Carpentry Block Theme
 *
 * Handles back to top button and other footer interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  // Back to Top Button functionality
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Footer widget animations (optional)
  const footerWidgets = document.querySelectorAll(".footer-widget");

  if (footerWidgets.length > 0) {
    const observeFooter = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    footerWidgets.forEach((widget) => {
      widget.style.opacity = "0";
      widget.style.transform = "translateY(20px)";
      widget.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observeFooter.observe(widget);
    });
  }
});
