import localStore from './services/local_storage';
import getGenres from './services/connect_genres';
import onAddToWatched from './add_to_watched';
import renderAddToWatched from './wathched_button';
import renderAddToQueue from './queue_button';

import addToQueue from './addqueue';

let imageMarkup = '';
let LOCAL_StORAGE_KEY = [];
let massiveMovies;
let movie = {};

const refs = {
  bodyScroll: document.querySelector('body.active'),
  openModal: document.querySelector('.collection'),
  closeModalBtn: document.querySelector('[data-modal-about-close]'),
  modal: document.querySelector('[data-modal-about]'),
  modalRender: document.querySelector('.movie__modal--render'),

  backdropOpCl: document.querySelector('.backdrop-about'),

  btnHome: document.querySelector('.nav-item'),
  btnQueued: document.querySelector('#btnQueued'),
  btnWatched: document.querySelector('#btnWatched'),
};

refs.openModal.addEventListener('click', openModalHome);

refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdropOpCl.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalOnEsc);

function closeModal() {
  console.log('має бути закриття модалки, файл modal');
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('active');
  refs.backdropOpCl.classList.add('is-hidden');

  if (refs.btnWatched?.classList.contains('active-btn')) {
    console.log('викликається renderaddToWatched, файл modal');
    renderAddToWatched();
  } else if (refs.btnQueued?.classList.contains('active-btn')) {
    console.log('викликається renderaddToQueue, файл modal');
    renderAddToQueue();
  }
}

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function openModalElem() {
  console.log('якась функція openModalElem, файл modal');
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('is-active');
  refs.backdropOpCl.classList.remove('is-hidden');
  document.body.classList.add('active');
}

function openModalHome(e) {
  console.log('якась функція openModalHome, файл modal');
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  openModalElem();
  e.preventDefault();

  let currentID = Number(e.target.dataset.source);

  if (refs.btnHome?.classList.contains('nav-current')) {
    massiveMovies = localStore.load('trendMovies');
    movie = massiveMovies.find(massiveMovie => massiveMovie.id === currentID);
    LOCAL_StORAGE_KEY = 'trendMovies';
    if (movie === undefined) {
      LOCAL_StORAGE_KEY = 'searchMovies';
    }
  } else if (refs.btnWatched?.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'watched-films';
  } else if (refs.btnQueued?.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'queue-movies';
  }
  massiveMovies = localStore.load(LOCAL_StORAGE_KEY);
  movie = massiveMovies.find(massiveMovie => massiveMovie.id === currentID);
  modalFilmCart(movie);
  // чого запускається вона при відкриттій модалки?
  onAddToWatched(movie);
  addToQueue(movie);
}

function modalFilmCart({
  title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  overview,
  poster_path,
  id,
}) {
  let roundPopularity = Math.round(popularity);
  let roundVote_average = vote_average.toFixed(1);
  let poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  if (poster_path === null) {
    poster =
      'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
  }
  imageMarkup = `
  <div class="movie__card">
   <a class="movie__item" href="${poster}">
       <img src="${poster}" alt="${title}" data-source='${id}' loading="lazy"/>
     </a>
     <div class ="movie__info">
     <h3 class ="movie__modal--title"><b><span>${original_title}</span></b>
     </h3>
       <div class="movie__detals">
        <div class ="movie__detals--key">
          <p class ="info-key">Vote / Votes</p>
          <p class ="info-key">Popularity</p>
          <p class ="info-key">Original Title</p>
          <p class ="info-key">Genre</p>
               </div>
      <div class = "movie__detals--value">
          <p class="info-item">
          <button class="vote-average">${roundVote_average}</button>&nbsp;<span class="slash">/</span>&nbsp;
          ${vote_count}</p>
          <p class ="info-item">${roundPopularity}</p>
          <p class ="info-item--title">${original_title}</p>
          <p class ="info-item">${getGenres(genre_ids)}</p>    
      </div>
  </div>
  <p class="movie__about--modal"><b>ABOUT</b></p>
          <p><span class="overview">${overview}</span></p>
          <div class="btn">
          <button class="movie__add"  data-modal-add data-modal-remove><span>add to watched</span></button>
          <button class="movie__queue"  data-modal-queue data-modal-delete><span>add to queue</span></button>
    </div>
    </div>
</div>
      `;
  refs.modalRender.innerHTML = imageMarkup;
}
