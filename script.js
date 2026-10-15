(() => {
  const toast = document.querySelector('.toast');
  let hideTimer;
  document.querySelectorAll('[data-coming]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!toast) return;
      toast.textContent = button.getAttribute('data-coming') || 'Coming soon ♥';
      toast.classList.add('show');
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
    });
  });
})();