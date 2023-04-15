import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';

export const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
  pgntPanel: document.querySelector('.pagination-l'),
};

// console.log(refs.pgntPanel);


const colectionUl = document.querySelector('.collection');

refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

const queueMovies = localStore.load('queue-movies');
const watchedMovies = localStore.load('watched-films');



if (!watchedMovies) {
  refs.pgntPanel.classList.add('hidden');
  Notiflix.Notify.failure('Sorry, there are no films.');
  return;
} else {renderMarkur(queueMovies);}



function clickOnBtnQueuedHandler() {
  refs.btnWatched.classList.remove('active-btn');
  refs.btnQueued.classList.add('active-btn');

  colectionUl.innerHTML = '';

  if (!queueMovies) {
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

  if (!watchedMovies) {
    refs.pgntPanel.classList.add('hidden');
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  refs.pgntPanel.classList.remove('hidden');
  Notiflix.Notify.success(`You already watched it :)`);

  renderMarkur(watchedMovies);
}
