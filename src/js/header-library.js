import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';

import getGenres from './services/connect_genres.js';
import loader from './loader';

export const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
};

const colectionUl = document.querySelector('.collection');



refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

// renderMarkur(queueMovies);

function clickOnBtnQueuedHandler() {
  refs.btnWatched.classList.remove('active-btn');
  refs.btnQueued.classList.add('active-btn');

  colectionUl.innerHTML = '';

  const queueMovies = localStore.load('queueMovies');

  if (queueMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  Notiflix.Notify.success(`Hooray! There are something interesting for you :)`);

  renderMarkur(watchedMovies);

}

function clickOnBtnWatchedHandler() {
  refs.btnQueued.classList.remove('active-btn');
  refs.btnWatched.classList.add('active-btn');

  colectionUl.innerHTML = '';

  const watchedMovies = localStore.load('watched-films');

  if (watchedMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }

  Notiflix.Notify.success(`You already watched it :)`);

  renderMarkur(queueMovies);

}
