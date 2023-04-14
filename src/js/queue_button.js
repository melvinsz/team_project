// import зробив в library.js
import { v, b, enablePagination } from './pagination_library';
import '../sass/index.scss';
import getGenres from './services/connect_genres.js';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const watchedList = document.querySelector('.collection__library');
const QueueList = document.querySelector('.library__container');
const btnWatched = document.querySelector('#btnWatched');
const btnQueued = document.querySelector('#btnQueued');

const STORAGE_KEY = 'queue-movies';

const queueRef = document.querySelector('.add-films-queue');

// queueRef.addEventListener('click', renderAddToQueue);

export default function renderAddToQueue(event) {
  // event.preventDefault();
  const parsQueue = JSON.parse(localStorage.getItem(STORAGE_KEY));

  filmAddedToQueue(parsQueue.slice(0, v));
  btnWatched.classList.remove('active-btn');
  btnQueued.classList.add('active-btn');
  localStorageCheck();

  watchedList.innerHTML = '';
}

function filmAddedToQueue(data) {
  const parsQueue = data
    .map(
      ({ id, title, poster_path, genre_ids, release_date }) =>
        `  <li class="card">
          <a data-source=${id}>
            <img src="${BASE_URL_POSTER}${poster_path}" class="card__img" data-source='${id}' />
          </a>

          <div class="card__title">${title}</div>
          <div class="card__info">${getGenres(
            genre_ids
          )} <span class="card__genres"> </span> ${release_date.slice(
          0,
          4
        )}</div>
        </li>
   `
    )
    .join('');
  watchedList.innerHTML = parsQueue;
}

function localStorageCheck() {
  if (watchedList.innerHTML === '') {
    const emptyList = `
  <li class="card">
    Your library of watched movies is empty.
    <img src="../images/no-image.jpg" alt="No Poster Available">
  </li>
`;
    watchedList.innerHTML = emptyList;
  }
}

// export { BASE_URL_POSTER, QueueList, renderAddToQueue };
