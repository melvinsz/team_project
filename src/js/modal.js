import localStore from './services/local_storage';
import getGenres from './services/connect_genres';
import onAddToWatched from './add_to_watched';
import renderAddToWatched from './wathched_button';
import renderAddToQueue from './queue_button';

import addToQueue from './addqueue';

let id = 0;
let imageMarkup = '';
let LOCAL_StORAGE_KEY = [];
let massiveMovies;
let movie = {};

export default refs = {
  bodyScroll: document.querySelector('body.active'),
  openModal: document.querySelector('.collection'),
  closeModalBtn: document.querySelector('[data-modal-about-close]'),
  modal: document.querySelector('[data-modal-about]'),
  modalRender: document.querySelector('.movie__modal--render'),

  backdropOpCl: document.querySelector('.backdrop-about'),

  openModalLib: document.querySelector('.collection__library'),
  btnQueued: document.querySelector('#btnQueued'),
  btnWatched: document.querySelector('#btnWatched'),
};

refs.openModal.addEventListener('click', openModalHome);
// refs.openModalLib.addEventListener('click', openModalWQ);

refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdropOpCl.addEventListener('click', closeModal);

document.addEventListener('keydown', closeModalOnEsc);

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('active');

  refs.backdropOpCl.classList.add('is-hidden');
  // refs.backdropOpCl.removeEventListener('click', closeModal);

  if (
    refs.btnWatched.classList.contains('active-btn') ||
    refs.btnQueued.classList.contains('active-btn')
  ) {
    renderAddToQueue();
    renderAddToWatched();
    refs.closeModalBtn.addEventListener('click', renderAddToWatched);
    refs.backdropOpCl.addEventListener('click', renderAddToWatched);
    document.addEventListener('keydown', renderAddToWatched);

    refs.closeModalBtn.addEventListener('click', renderAddToQueue);
    refs.backdropOpCl.addEventListener('click', renderAddToQueue);
    document.addEventListener('keydown', renderAddToQueue);
  }
}

function openModalElem() {
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('is-active');
  refs.backdropOpCl.classList.remove('is-hidden');
}

function openModalHome(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }

  openModalElem();
  e.preventDefault();
  document.body.classList.add('active');

  let currentID = Number(e.target.dataset.source);

  massiveMovies = localStore.load('trendMovies');
  movie = massiveMovies.find(massiveMovie => massiveMovie.id === currentID);

  if (movie === undefined) {
    massiveMovies = localStore.load('searchMovies');

    movie = massiveMovies.find(massiveMovie => massiveMovie.id === currentID);
  }

  modalFilmCart(movie);
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
  let poster = `http://image.tmdb.org/t/p/w342/${poster_path}`;
  // console.log(poster);
  if (poster_path === null) {
    poster = `./images/kin1o.jpg`;
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

//  ДЛЯ Бібліотеки W та Q

function openModalWQ(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  openModalElem();
  e.preventDefault();

  if (refs.btnWatched.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'watched-films';
  } else if (refs.btnQueued.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'queue-movies';
  }

  let currentID = Number(e.target.dataset.source);
  massiveMovies = localStore.load(LOCAL_StORAGE_KEY);
  movie = massiveMovies.find(massiveMovie => massiveMovie.id === currentID);
  modalFilmCart(movie);
  onAddToWatched(movie);
  addToQueue(movie);
}
