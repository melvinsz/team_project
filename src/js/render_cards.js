import ApiServices from './services/Api_services';
import getGenres from './services/connect_genres.js';
import '../sass/index.scss';

const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const colectionUl = document.querySelector('.collection');
const apiServices = new ApiServices();

function renderMarkur(data) {
  const markup = data
    .map(
      ({ id, title, poster_path, genre_ids, release_date }) =>
        `  <li class="card">
          <a>
            <img src="${BASE_URL_POSTER}${poster_path}" class="card__img" data-source='${id}'/>
          </a>
          <div class="card__title">${title}</div>
          <div class="card__info">
          ${getGenres(genre_ids)}
          <span class="card__genres"></span>${release_date.slice(0, 4)}</div>
        </li>
   `
    )
    .join('');
  return colectionUl.insertAdjacentHTML('beforeend', markup);
}

export { renderMarkur };
