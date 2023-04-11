// !!!!
import '../sass/index.scss';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const colectionUl = document.querySelector('.collection');
// !!!!
const STORAGE_KEY = 'watched-films';
const linkWatched = document.querySelector('.add-films-watched');
linkWatched.addEventListener('click', renderAddToWatched);

function renderAddToWatched(event) {
  event.preventDefault();
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  filmWatched(parsedWatchedFilms); // Виклик функції filmWatched з даними фільмів
}

function filmWatched(data) {
  const parsedWatchedFilms = data
    .map(
      ({ id, title, poster_path }) =>
        `  <li class="card">
          <a data-source=${id}>
            <img src="${BASE_URL_POSTER}${poster_path}" class="card__img" />
          </a>

          <div class="card__title">${title}</div>
          <div class="card__info">жанри та рік</div>
        </li>
   `
    )
    .join('');
  colectionUl.innerHTML = parsedWatchedFilms; // Оновлення HTML-розмітки сторінки зі списком фільмів
}

export { BASE_URL_POSTER, colectionUl, renderAddToWatched };
