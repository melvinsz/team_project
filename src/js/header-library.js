'use strict';

import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';

const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
  pgntPanel: document.querySelector('.pagination-l'),
};

const colectionUl = document.querySelector('.collection');

console.log(refs.btnWatched);
console.log(refs.btnQueued);

refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

const queueMovies = localStore.load('queue-movies');
const watchedMovies = localStore.load('watched-films');

if (!watchedMovies || watchedMovies.length === 0) {
  refs.pgntPanel.classList.add('hidden');
  Notiflix.Notify.failure('Sorry, there are no films.');
  return;
} else {
  renderMarkur(watchedMovies);
}

function clickOnBtnQueuedHandler() {
  refs.btnQueued.classList.add('active-btn');
  refs.btnWatched.classList.remove('active-btn');

  colectionUl.innerHTML = '';

  if (!queueMovies || queueMovies.length === 0) {
    refs.pgntPanel.classList.add('hidden');
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  refs.pgntPanel.classList.remove('hidden');
  Notiflix.Notify.success(`Hooray! There are something interesting for you :)`);

  renderMarkur(queueMovies);
}

function clickOnBtnWatchedHandler() {
  refs.btnQueued.classList.remove('active-btn');
  refs.btnWatched.classList.add('active-btn');

  colectionUl.innerHTML = '';

  if (!watchedMovies || watchedMovies.length === 0) {
    refs.pgntPanel.classList.add('hidden');
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  refs.pgntPanel.classList.remove('hidden');
  Notiflix.Notify.success(`You already watched it :)`);

  renderMarkur(watchedMovies);
}
