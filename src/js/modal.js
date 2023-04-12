import localStore from './services/local_storage';
import getGenres from './services/connect_genres';
import onAddToWatched from './add_to_watched';
// Цей import addToQueue from './addqueue' додала Асадова Т.
import addToQueue from './addqueue';

let id = 0;
let imageMarkup = '';

const refs = {
  openModal: document.querySelector('.collection'),
  openModalLib: document.querySelector('.library__pagination'),
  closeModalBtn: document.querySelector('[data-modal-about-close]'),
  modal: document.querySelector('[data-modal-about]'),
  modalRender: document.querySelector('.movie__modal--render'),
};

refs.openModal.addEventListener('click', openModalHome);

refs.closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', closeModalOnEsc);

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
}

function openModalElem() {
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('is-active');
}

function openModalHome(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  openModalElem();
  e.preventDefault();

  let currentID = Number(e.target.dataset.source);
  const massiveMovies = localStore.load('trendMovies');
  const movie = massiveMovies.find(
    massiveMovie => massiveMovie.id === currentID
  );
  modalFilmCart(movie);
  onAddToWatched(movie);
  addToQueue(movie);
}

// if (movie = undefined ) {
//    massiveMovies = localStore.load('searchMoviess');
//   movie = massiveMovies.find(
//     massiveMovie => massiveMovie.id === currentID
//   );
// }

function getGenres(genre_ids) {
  const massiveGenres = localStore.load('genres');
  const arr = [];

  for (const value of genre_ids) {
    let genresMovie = massiveGenres.find(
      massiveGenre => massiveGenre.id === Number(value)
    );

    arr.push(genresMovie.name);
    console.log(arr.push(genresMovie.name));
  }

  return arr.join(', ');
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
  let genresMovie = getGenres(genre_ids);
  if (poster_path === null) {
    poster_path = 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster';
  }
  imageMarkup = `
  <div class="movie__card">
   <a class="movie__item" href="http://image.tmdb.org/t/p/w342/${poster_path}">
       <img src="http://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" data-source='${id}' loading="lazy"/>
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
          <button class="vote-average">${roundVote_average}</button>&nbsp;/&nbsp;
          ${vote_count}</p>
          <p class ="info-item">${roundPopularity}</p>
          <p class ="info-item--title">${original_title}</p>
          <p class ="info-item">${genresMovie}</p>    
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
