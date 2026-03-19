/* ========================================
   SCRIPT.JS - Common Utilities
   Shared functionality across all pages
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

document.getElementById("footer").innerHTML = `
<div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="images/SM_Enterprise_Logo.webp" alt="SM Enterprise">
              </a>
              <p>
                We are a team of professionals working in this industry for 7 years, with satisfied clients across India.
              </p>
            <div class="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook"><iconify-icon icon="mdi:facebook"></iconify-icon></a>
            <a href="#" aria-label="X"><iconify-icon icon="mdi:twitter"></iconify-icon></a>
            <a href="#" aria-label="Instagram"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
            <a href="#" aria-label="LinkedIn"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
          </div>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH">Sitemap</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="services.html">
                    Services</a>
                </li>  
                <li>
                  <a class="footerLinks" href="career.html">
                    Careers</a>
                </li>
                <li>
                  <a class="footerLinks" href="about.html">
                    About Us</a>
                </li>
                <li>
                  <a class="footerLinks" href="contact.html">
                    Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
              <h5 class="fourthH ">Locate Us</h5>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/aGGQHHdmteBJ3QyB9">
                    <iconify-icon icon="mi:location"></iconify-icon>
                    <A1-TF-25>
<pre class="mb-0">
TF-A1-22, Akshar Pavilion Mall,
Near Priya Cinema, Vasna Bhyali
Main Road, Vadodara</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+916355226244" class="footerLinks">
                    <iconify-icon icon="mdi:phone-outline"></iconify-icon> +91 63552 26244</a>
                </li>
  
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:sm.enterprise@moveonline.in">
                    <iconify-icon icon="mdi:email-outline"></iconify-icon> sm.enterprise@moveonline.in</a>
                </li>
              </ul>
              
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="border-top border-secondary pt-3 copyright text-center">
                <p class="small mb-0 copyright">Copyright © <span id="year"></span> All Rights Reserved by SM Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  document.getElementById("year").textContent = new Date().getFullYear();

  // Check if the device uses a mouse/trackpad before running any cursor logic
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  
  const cursor = document.querySelector('.custom-cursor');
  const hoverSelector = 'a, button, .btn, .button, .swiper-pagination-bullet, summary';

  // 1. Move the cursor with the mouse
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // 2. Add the expand effect
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) {
      cursor.classList.add('hovered');
    }
  });

  // 3. Remove the expand effect
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) {
      cursor.classList.remove('hovered');
    }
  });

}

  // ===== CONFIGURATION =====
  const CONFIG = {
    whatsappNumber: "916355226244",
    animationDuration: 800,
    debounceDelay: 250,
    counterDuration: 2000,
  }; 

// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = `https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}`;
  const desktopLink = `https://web.whatsapp.com/send?phone=${CONFIG.whatsappNumber}`;

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


  // ===== INITIALIZE AOS =====
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: CONFIG.animationDuration,
      offset: 100,
      easing: "ease-out-cubic",
    });

    // Refresh AOS after a short delay to ensure injected content is detected
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  // ===== DEBOUNCE FUNCTION =====
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ===== RESIZE LISTENER =====
  const handleResize = debounce(function () {
    // Refresh AOS on resize to fix layout shifts
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, CONFIG.debounceDelay);

  window.addEventListener("resize", handleResize);

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.getElementById("backToTop");

  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleBackToTop);

  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


});
