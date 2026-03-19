/* ========================================
   CRITICAL.JS - Navigation & Core Interactions
   Load this first for immediate functionality
   ======================================== */



document.addEventListener("DOMContentLoaded", function () {
  "use strict";



  document.getElementById("mainNavbar").innerHTML = `
  <div class="container-xl nav-shell">
        <a class="navbar-brand" href="index.html" aria-label="SM Enterprise home">
          <img loading="lazy" src="images/SM_Enterprise_Logo.webp" alt="SM Enterprise logo" />
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-label="Open menu">
          <iconify-icon icon="mdi:menu" width="24" height="24"></iconify-icon>
        </button>

        <div class="collapse navbar-collapse" id="desktopNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li class="nav-item"><a class="nav-link" href="index.html" aria-current="page">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="seo-services.html">SEO Services</a></li>
                <li><a class="dropdown-item" href="gmb-services.html">GMB Services</a></li>
                <li><a class="dropdown-item" href="graphic-design.html">Graphic Design</a></li>
                <li><a class="dropdown-item" href="web-development.html">Web Development</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="careers.html">Careers</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            <li class="nav-item"><a class="btn btn-light btn-sm" href="#footer">Talk Action</a></li>
          </ul>
        </div>
      </div>`;

  document.getElementById("mobileNav").innerHTML = `
 <div class="offcanvas-header">
        <h2 id="mobileNavLabel" class="offcanvas-title">SM Enterprise</h2>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close menu"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav gap-2">
          <li class="nav-item"><a class="nav-link" href="index.html" data-bs-dismiss="offcanvas">Home</a></li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="seo-services.html">SEO Services</a></li>
                <li><a class="dropdown-item" href="gmb-services.html">GMB Services</a></li>
                <li><a class="dropdown-item" href="graphic-design.html">Graphic Design</a></li>
                <li><a class="dropdown-item" href="web-development.html">Web Development</a></li>
              </ul>
            </li>
          <li class="nav-item"><a class="nav-link" href="careers.html" data-bs-dismiss="offcanvas">Careers</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html" data-bs-dismiss="offcanvas">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html" data-bs-dismiss="offcanvas">Contact Us</a></li>
          <li class="nav-item mt-3"><a class="btn btn-light w-100" href="#contact" data-bs-dismiss="offcanvas">Book Consultation</a></li>
        </ul>
      </div>`;

  // ===== ACTIVE LINK HANDLING =====
  function setActiveNavItem() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(
      ".navbar-nav .nav-link",
    );

    navLinks.forEach((link) => {
      // Remove any pre-existing active classes (just in case)
      link.classList.remove("active");

      const linkHref = link.getAttribute("href");

      // Check for exact match or if it's the home page
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  }

  setActiveNavItem();

  // ===== NAVBAR SCROLL BEHAVIOR =====
  const navbar = document.getElementById("mainNavbar");

  const onScrollState = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 18);
  };

  window.addEventListener('scroll', onScrollState, { passive: true });
  onScrollState();



  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // FIX: Ignore links that don't start with # (like WhatsApp/LinkedIn)

      if (!href.startsWith("#")) {
        return;
      }

      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
});

