document.addEventListener('DOMContentLoaded', function () {
  const processBg = document.querySelector('.process_bg');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          processBg.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    },
  );

  // Start observing the process section
  const processSection = document.querySelector('.process');
  if (processSection) {
    observer.observe(processSection);
  }

  // Initialize mobile steps swiper
  const stepsMobileSwiper = new Swiper('.steps-mobile-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: '.steps-mobile-pagination',
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});
