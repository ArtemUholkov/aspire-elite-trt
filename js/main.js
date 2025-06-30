document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.phone-video');
  const soundIcon = document.querySelector('.sound-icon');
  const playBtns = document.querySelectorAll('.founder_play-btn');
  const modal = document.getElementById('founder-video-modal');
  const closeBtn = document.querySelector('.founder-video-modal-close');
  const backdrop = document.querySelector('.founder-video-modal-backdrop');
  const modalVideo = document.getElementById('founder-video');

  if (!video) return;

  // Function to update sound icon
  function updateSoundIcon() {
    if (video.muted) {
      soundIcon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    } else {
      soundIcon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6696 17.0039 12C17.0039 13.3304 16.4774 14.6024 15.54 15.54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    }
  }

  // Toggle mute/unmute on video click
  video.addEventListener('click', function () {
    video.muted = !video.muted;
    updateSoundIcon();
  });

  // Toggle mute/unmute on sound icon click
  if (soundIcon) {
    soundIcon.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent video click event
      video.muted = !video.muted;
      updateSoundIcon();
    });
  }

  // Initialize sound icon
  updateSoundIcon();

  function openModal() {
    modal.classList.add('show');
    modalVideo.currentTime = 0;
    modalVideo.play();
  }

  function closeModal() {
    modal.classList.remove('show');
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }

  playBtns.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
});
