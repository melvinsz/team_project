// import зробив в library.js

import '../sass/index.scss';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500/';
const QueueList = document.querySelector('.library__pagination');

const STORAGE_KEY = 'queue-movie';

const queueRef = document.querySelector('.add-films-queue');
queueRef.addEventListener('click', renderAddToQueue);

function renderAddToQueue(event) {
  event.preventDefault();
  const parsQueue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  filmAddedToQueue(parsQueue);
  //   localStorageCheck();
}

function filmAddedToQueue(data) {
  const parsQueue = data
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
  QueueList.innerHTML = parsQueue;
}

// function localStorageCheck() {
//   if (QueueList.innerHTML === '') {
//     const emptyList = `<li class="card">Your movie queue is empty.</li>`;
//     QueueList.innerHTML = emptyList;
//   }
// }

export { BASE_URL_POSTER, QueueList, renderAddToQueue };
