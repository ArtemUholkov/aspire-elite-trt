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
});
