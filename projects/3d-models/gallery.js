document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const image = gallery.querySelector('[data-preview]');
  const full = gallery.querySelector('[data-full]');
  const caption = gallery.querySelector('[data-caption]');
  gallery.querySelectorAll('[data-image]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = link.dataset.alt;
      full.href = link.href;
      caption.textContent = `${link.dataset.label} · Model render. Select the image to enlarge.`;
      gallery.querySelectorAll('[data-image]').forEach((item) => item.setAttribute('aria-current', String(item === link)));
    });
  });
});
