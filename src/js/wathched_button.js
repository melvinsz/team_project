// !!!!
import '../sass/index.scss';
import getGenres from './services/connect_genres.js';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const colectionUl = document.querySelector('.collection');
const queueListRef = document.querySelector('.library__container');
// !!!!
const STORAGE_KEY = 'watched-films';

const linkWatched = document.querySelector('.add-films-watched');

linkWatched.addEventListener('click', renderAddToWatched);

export default  function renderAddToWatched(event) {
  // event.preventDefault();
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  filmWatched(parsedWatchedFilms);
  localStorageCheck();
  queueListRef.innerHTML = '';
}

function filmWatched(data) {
  const parsedWatchedFilms = data
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
  colectionUl.innerHTML = parsedWatchedFilms;
}

function localStorageCheck() {
  if (colectionUl.innerHTML === '') {
    const emptyList = `
  <li class="card">
    Your library of watched movies is empty.
    <img src="../images/no-image.jpg" alt="No Poster Available">
  </li>
`;
    colectionUl.innerHTML = emptyList;
  }
}

// export { BASE_URL_POSTER, colectionUl, renderAddToWatched };
