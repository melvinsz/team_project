// import { renderMarkur, colectionUl } from './render_cards';
import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';
import getGenres from './services/connect_genres.js';
import loader from './loader';

import Api_Services from './services/Api_services';
const apiservices = new Api_Services();

const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';

const colectionUl = document.querySelector('.collection');
const searchFormRef = document.querySelector('.form');
const inputRef = document.querySelector('.header_search-input');

searchFormRef.addEventListener('submit', e => {
  e.preventDefault();

  let name = inputRef.value.trim();
  apiservices.searchQuery = name;

  if (!inputRef.value.trim()) {
    return Notiflix.Notify.failure('Please enter a search query for the movie');
  }

  apiservices.getSearchMovie().then(response => {
    const { results, total_pages } = response.data;

    if (total_pages > 1) {
      Notiflix.Notify.success(
        'Hooray! We found something interesting for you :)'
      );
      inputRef.value = '';
      colectionUl.innerHTML = '';

      const massiveMovies = localStore.load('searchMovies');

      // console.log('local storage:', massiveMovies);

      renderMarkur(massiveMovies);
    } else {
      Notiflix.Notify.failure(
        'Search result not successfull. Enter the correct movie name.'
      );
      inputRef.value = '';
    }
  });
});

function renderMarkur(massiveMovies) {
  colectionUl.innerHTML = '';
  inputRef.value = '';

  const markup = massiveMovies
    .map(
      ({ id, title, poster_path, genre_ids, release_date }) =>
        `  <li class="card">
            <a data-source=${id}>
              <img src="${BASE_URL_POSTER}${poster_path}" class="card__img" data-source='${id}'/>
            </a>
            <div class="card__title">${title}</div>
            <div class="card__info">${getGenres(
              genre_ids
            )}, ${release_date.slice(0, 4)}</div>
          </li>
     `
    )
    .join('');

  return colectionUl.insertAdjacentHTML('beforeend', markup);
}
