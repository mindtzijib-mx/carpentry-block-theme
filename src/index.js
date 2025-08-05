/**
 * Main Assets Bundle for Carpentry Block Theme
 *
 * Combines header, footer, and services-projects-slider functionality
 * into a single compiled bundle.
 */

// Import header functionality
import "./assets/header.js";

// Import footer functionality
import "./assets/footer.js";

// Import services projects slider functionality
import "./assets/services-projects-slider.js";

// Additional global initialization if needed
document.addEventListener("DOMContentLoaded", function () {
  // Any global initialization code can go here
  console.log("Carpentry Block Theme assets loaded");
});
