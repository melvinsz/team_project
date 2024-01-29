import getGenres from './services/connect_genres.js';

const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_POSTER =
  'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
const colectionUl = document.querySelector('.collection');
const inputRef = document.querySelector('.header_search-input');

export default function renderMarkur(massiveMovies) {
  colectionUl.innerHTML = '';
  inputRef.value = '';
  const markup = massiveMovies
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

  return colectionUl.insertAdjacentHTML('beforeend', markup);
}
