(() => {
  const dialog = document.querySelector('.screenshot-dialog');
  const image = document.querySelector('#screenshot-image');
  const title = document.querySelector('#screenshot-title');
  const position = document.querySelector('#screenshot-position');
  let slides = [];
  let selected = 0;
  let opener = null;

  function showSlide(index) {
    selected = (index + slides.length) % slides.length;
    const slide = slides[selected];
    image.src = slide.href;
    image.alt = slide.querySelector('img').alt;
    title.textContent = slide.dataset.title;
    position.textContent = `${selected + 1} of ${slides.length}`;
  }

  for (const gallery of document.querySelectorAll('[data-gallery]')) {
    const track = gallery.querySelector('.screenshot-track');
    const controls = gallery.querySelector('.gallery-controls');
    const previous = controls.querySelector('[data-direction="-1"]');
    const next = controls.querySelector('[data-direction="1"]');
    const links = Array.from(track.querySelectorAll('.screenshot-open'));

    function updateControls() {
      const maximum = track.scrollWidth - track.clientWidth;
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= maximum - 2;
    }

    for (const button of controls.querySelectorAll('button')) {
      button.addEventListener('click', () => {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        const step = track.firstElementChild.getBoundingClientRect().width + gap;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        track.scrollBy({ left: Number(button.dataset.direction) * step, behavior: reducedMotion ? 'auto' : 'smooth' });
      });
    }

    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        if (typeof dialog.showModal !== 'function' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        slides = links;
        opener = link;
        showSlide(index);
        dialog.showModal();
      });
    });

    controls.hidden = false;
    track.addEventListener('scroll', updateControls, { passive: true });
    if (typeof ResizeObserver === 'function') new ResizeObserver(updateControls).observe(track);
    else window.addEventListener('resize', updateControls);
    updateControls();
  }

  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  for (const button of dialog.querySelectorAll('[data-image-direction]')) {
    button.addEventListener('click', () => showSlide(selected + Number(button.dataset.imageDirection)));
  }
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(selected + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    image.alt = '';
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  });
})();
