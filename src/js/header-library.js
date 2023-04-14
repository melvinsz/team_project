import {refs} from './modal';
import {count, enablePagination} from './pagination_library';
import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';

import getGenres from './services/connect_genres.js';
import loader from './loader';

// export default refs = {
//   btWatched: document.querySelector('#btnWatched'),
//   btQueued: document.querySelector('#btnQueued'),
// };

const colectionUl = document.querySelector('.collection');

btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

const queueMovies = localStore.load('queue-movies');
const watchedMovies = localStore.load('watched-films');

renderMarkur(queueMovies.slice(0,count));
enablePagination(queueMovies.length);

function clickOnBtnQueuedHandler() {
  btnWatched.classList.remove('active-btn');
  btnQueued.classList.add('active-btn'); 

  colectionUl.innerHTML = '';
  
  // const queueMovies = localStore.load('queueMovies');

  if (queueMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }
  Notiflix.Notify.success(`Hooray! There are something interesting for you :)`);

  renderMarkur(queueMovies.slice(0,count));
  enablePagination(queueMovies.length);
}

function clickOnBtnWatchedHandler() {
  btnQueued.classList.remove('active-btn');
  btnWatched.classList.add('active-btn');

  colectionUl.innerHTML = '';

  // const watchedMovies = localStore.load('watched-films');

  if (watchedMovies.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no films.');
    return;
  }

  Notiflix.Notify.success(`You already watched it :)`);

  renderMarkur(watchedMovies.slice(0,count));
  enablePagination(watchedMovies.length);
}