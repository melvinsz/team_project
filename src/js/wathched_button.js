// !!!!
import '../sass/index.scss';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const colectionUl = document.querySelector('.collection');
// !!!!
const STORAGE_KEY = 'watched-films';

const linkWatched = document.querySelector('.add-films-watched');
console.log(linkWatched);
// linkWatched.addEventListener('click', renderAddToWatched);

function renderAddToWatched(event) {
  event.preventDefault();
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  filmWatched(parsedWatchedFilms);
}

function filmWatched(data) {
  const parsedWatchedFilms = data
    .map(
      ({ id, title, poster_path }) =>
        `  <li class="card">
          <a data-source=${id}>
            <img src="${BASE_URL_POSTER}${poster_path}" class="card__img" data-source='${id}' />
          </a>

          <div class="card__title">${title}</div>
          <div class="card__info">жанри та рік</div>
        </li>
   `
    )
    .join('');
  colectionUl.innerHTML = parsedWatchedFilms;
}

export { BASE_URL_POSTER, colectionUl, renderAddToWatched };
