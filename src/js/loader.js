const showLoader = () => {
  const loader = document.createElement('div');

  loader.className = 'center';
  loader.innerHTML = `<div class="loader"></div>`;

  document.body.appendChild(loader);
};

const hideLoader = () => {
  const loader = document.querySelector('.center');
  if (!loader) {
    return;
  }

  loader.remove();
};

export default {
  showLoader,
  hideLoader,
};

export { showLoader };
