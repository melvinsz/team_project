import ApiServices from './services/Api_services';
import '../sass/index.scss';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const colectionUl = document.querySelector('.collection');
const apiServices = new ApiServices();

searchStart();

async function searchStart() {
  // btnPagination.style.display = 'none';

  try {
    const { data } = await apiServices.getTrendMovies();
    console.log(data);
    renderMarkur(data.results);
  } catch (error) {
    console.log(error.message);
    return;
  }
  btnPagination.style.display = 'flex';
  btnPaginationBack.style.display = 'none';
}

function renderMarkur(data) {
  const markup = data
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
  colectionUl.insertAdjacentHTML('beforeend', markup);
}
