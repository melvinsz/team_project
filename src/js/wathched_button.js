// !!!!
import { v, enablePagination } from './pagination_library';
import '../sass/index.scss';
import getGenres from './services/connect_genres.js';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_POSTER =
  'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
const colectionUl = document.querySelector('.collection__library');
const queueListRef = document.querySelector('.library__container');
const btnWatched = document.querySelector('#btnWatched');
const btnQueued = document.querySelector('#btnQueued');
const STORAGE_KEY = 'watched-films';

export default function renderAddToWatched(event) {
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  filmWatched(parsedWatchedFilms.slice(0, v));
  btnWatched.classList.add('active-btn');
  btnQueued.classList.remove('active-btn');
  localStorageCheck();
  queueListRef.innerHTML = '';
  colectionUl.innerHTML = '';
}

function filmWatched(data) {
  const parsedWatchedFilms = data
    .map(
      ({ id, title, poster_path, genre_ids, release_date }) =>
        `  <li class="card">
            <a data-source=${id}>
              <img src="${
                poster_path ? BASE_URL_POSTER + poster_path : DEFAULT_POSTER
              }" class="card__img" data-source='${id}'/>
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
  queueListRef.innerHTML = parsedWatchedFilms;
  colectionUl.innerHTML = '';
}

function localStorageCheck() {
  if (queueListRef.innerHTML === '') {
    const emptyList = `
  <li class="card">
    Your library of watched movies is empty.
    <img src="../images/no-image.jpg" alt="No Poster Available">
  </li>
`;
    queueListRef.innerHTML = emptyList;
    colectionUl.innerHTML = '';
  }
}
