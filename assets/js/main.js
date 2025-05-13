/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";
  try {
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      try {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      } catch (err) {
        console.error('Error in toggleScrolled:', err);
      }
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
      try {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      } catch (err) {
        console.error('Error in mobileNavToogle:', err);
      }
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        try {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
          }
        } catch (err) {
          console.error('Error in navmenu click:', err);
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        try {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        } catch (err) {
          console.error('Error in toggle-dropdown:', err);
        }
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    // Remove preloader as soon as DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      if (preloader) {
        preloader.remove();
      }
    });
    // Fallback: Remove preloader after 5 seconds in case something blocks DOMContentLoaded
    setTimeout(() => {
      if (preloader && document.body.contains(preloader)) {
        preloader.remove();
      }
    }, 5000);

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      try {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      } catch (err) {
        console.error('Error in toggleScrollTop:', err);
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        try {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } catch (err) {
          console.error('Error in scrollTop click:', err);
        }
      });
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      try {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          disable: 'mobile',
          startEvent: 'DOMContentLoaded',
          offset: 120,
          delay: 100
        });
      } catch (err) {
        console.error('Error in aosInit:', err);
      }
    }

    // Initialize AOS immediately and again on window load
    document.addEventListener('DOMContentLoaded', aosInit);
    window.addEventListener('load', aosInit);

    /**
     * Init typed.js
     */
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      try {
        let typed_strings = selectTyped.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      } catch (err) {
        console.error('Error initializing Typed.js:', err);
      }
    }

    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      try {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      } catch (err) {
        console.error('Error in skillsAnimation:', err);
      }
    });

    /**
     * Initiate Pure Counter
     */
    try {
      new PureCounter();
    } catch (err) {
      console.error('Error initializing PureCounter:', err);
    }

    /**
     * Initiate glightbox
     */
    try {
      const glightbox = GLightbox({
        selector: '.glightbox'
      });
    } catch (err) {
      console.error('Error initializing GLightbox:', err);
    }

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      try {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          try {
            initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });
          } catch (err) {
            console.error('Error initializing Isotope:', err);
          }
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            try {
              isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
              this.classList.add('filter-active');
              initIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
              if (typeof aosInit === 'function') {
                aosInit();
              }
            } catch (err) {
              console.error('Error in isotope filter click:', err);
            }
          }, false);
        });

      } catch (err) {
        console.error('Error in isotope-layout:', err);
      }
    });

    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        try {
          faqItem.parentNode.classList.toggle('faq-active');
        } catch (err) {
          console.error('Error in FAQ toggle:', err);
        }
      });
    });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        try {
          let config = JSON.parse(
            swiperElement.querySelector(".swiper-config").innerHTML.trim()
          );

          if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        } catch (err) {
          console.error('Error initializing Swiper:', err);
        }
      });
    }

    window.addEventListener("load", initSwiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      try {
        if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
            setTimeout(() => {
              let section = document.querySelector(window.location.hash);
              let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
              window.scrollTo({
                top: section.offsetTop - parseInt(scrollMarginTop),
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      } catch (err) {
        console.error('Error correcting scroll position:', err);
      }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      try {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        });
      } catch (err) {
        console.error('Error in navmenuScrollspy:', err);
      }
    }

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    /**
     * Initialize testimonials slider
     */
    document.addEventListener('DOMContentLoaded', function() {
      try {
        new Swiper('.testimonials-slider', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      } catch (err) {
        console.error('Error initializing testimonials slider:', err);
      }
    });

    /**
     * Portfolio card generation
     */
    const handleMediaLoad = (mediaElement, container) => {
        if (container) {
            container.classList.remove('loading');
        }
        mediaElement.style.opacity = '1';
    };

    const handleMediaError = (mediaElement, container, fallbackText) => {
        console.error(`Failed to load media: ${mediaElement.src}`);
        if (container) {
            container.classList.remove('loading');
            container.innerHTML = `<div class="media-error">${fallbackText || 'Media failed to load'}</div>`;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const portfolioGridEl = document.getElementById('portfolio-grid');
        
        portfolioProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.id = `project-${project.id}`; // Add ID for scroll targeting
            
            // Media content
            let mediaHtml;
            if (project.video) {
                mediaHtml = `
                    <div class="project-card-media-frame video-frame">
                        <video autoplay muted loop playsinline class="project-card-video">
                            <source src="${project.video}" type="video/mp4">
                        </video>
                    </div>`;
            } else if (project.images && project.images.length > 0) {
                mediaHtml = `
                    <div class="project-card-media-frame image-frame">
                        <img src="${project.images[0]}" alt="${project.title}" class="project-card-image">
                    </div>`;
            }
            
            card.innerHTML = mediaHtml + `
                <div class="project-card-content">
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-summary">${project.description || project.what}</p>
                    <button data-project-id="${project.id}" class="project-card-button">
                        View Details
                    </button>
                </div>
            `;

            if (project.video) {
                const videoContainer = card.querySelector('.project-card-media-frame');
                const video = card.querySelector('.project-card-video');
                
                if (videoContainer && video) {
                    videoContainer.classList.add('loading');
                    video.style.opacity = '0';
                    video.addEventListener('loadeddata', () => handleMediaLoad(video, videoContainer));
                    video.addEventListener('error', () => handleMediaError(video, videoContainer, 'Video failed to load'));
                }
            } else if (project.images && project.images.length > 0) {
                const imageContainer = card.querySelector('.project-card-media-frame');
                const img = card.querySelector('.project-card-image');
                
                if (imageContainer && img) {
                    imageContainer.classList.add('loading');
                    img.style.opacity = '0';
                    img.addEventListener('load', () => handleMediaLoad(img, imageContainer));
                    img.addEventListener('error', () => handleMediaError(img, imageContainer, 'Image failed to load'));
                }
            }

            if(portfolioGridEl) portfolioGridEl.appendChild(card);
        });
    });

  } catch (err) {
    console.error('Error in main.js:', err);
  }
})();