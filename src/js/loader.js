import styles from '../sass/utils/_loaders.scss';

const showLoader = () => {
  const markup = `<div class="loader"></div>`;


    const loader = document.createElement('div');

    loader.className = 'center';
    loader.innerHTML = `<div class="loader"></div>`;
    // loader.insertAdjacentHTML('beforeend', markup);

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

// showLoader();
// hideLoader();
export { showLoader };