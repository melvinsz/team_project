import localStore from './services/local_storage';
import getGenres from './services/connect_genres';
import onAddToWatched from './add_to_watched';

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
// refs.openModalLib.addEventListener('click', openModalLibrary);
refs.closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', closeModalOnEsc);

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// function closeModalOnEsc(event) {
//   if (!e.target.classList.contains('[ata-modal-about]')) {
//     closeModal();
//   }
// }

function closeModal() {
  refs.modal.classList.add('is-hidden');
}

function openModalElem() {
  refs.modal.classList.remove('is-hidden');
}

function openModalHome(e) {
  openModalElem();
  e.preventDefault();
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  let currentID = Number(e.target.dataset.source);
  const massiveMovies = localStore.load('trendMovies');
  const movie = massiveMovies.find(
    massiveMovie => massiveMovie.id === currentID
  );
  modalFilmCart(movie);
  onAddToWatched(movie);
}

function openModalLibrary(e) {
  openModalElem();
  e.preventDefault();
  if (!e.target.classList.contains('card__img')) {
    return;
  }
  let currentID = Number(e.target.dataset.source);
  const massiveMovies = localStore.load('searchMovies');
  const movie = massiveMovies.find(
    massiveMovie => massiveMovie.id === currentID
  );
  modalFilmCart(movie);
  onAddToWatched(movie);
}

// import Player  from '@vimeo/player';

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
  if (poster_path === null) {
    poster_path = 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster';
  }
  //  const moviesGenre = genre_ids ? getGenres(genre_ids) : 'Unknown';

  //   '${moviesGenre}'

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
          <p class ="info-item">${Object.values(genre_ids).join(', ')}</p>
      </div>
  </div>
  <p class="movie__about--modal"><b>ABOUT</b></p>
          <p><span class="overview">${overview}</span></p>
          <button class="movie__add"  data-modal-add data-modal-remove><span>add to watched</span></button>
          <button class="movie__queue"  data-modal-queue data-modal-delete><span>add to queue</span></button>
    </div>
</div>
      `;
  refs.modalRender.innerHTML = imageMarkup;
}

// {
/* <button class="modal-film__play-btn" type="button" ></button> */
// }
//  <iframe
// id="vimeo-player"
// src="https://player.vimeo.com/video/${'посилання на відео'}"
// width="auto"
// height="auto"
// frameborder="0"
// allowfullscreen
// allow="autoplay; encrypted-media"
// ></iframe>

// import Player  from '@vimeo/player';

// const getGenresNames = genres => genres.map(genre => genre.name).join(', ');

// function modalFilmCart({
//   title,
//   original_title,
//   vote_average,
//   vote_count,
//   popularity,
//   genres,
//   overview,
//   poster_path,
// }) {
//   let roundPopularity = Math.round(popularity);
//   let roundVote_average = vote_average.toFixed(2);
//   let imageMarkup = `
//   <img
//     src="${BASE_IMG_URL}${poster_path}"
//       alt="${title} movie poster}"
//       width="375" height="478"
//       class="image"
//       />`;
//   if (poster_path === null) {
//     imageMarkup = `
//   <img
//     src="https://dummyimage.com/395x574/000/fff.jpg&text=no+poster"
//       alt="${title} movie poster}"
//       width="395" height="574"
//       class="image"
//       />`;
//   }
//   const markup = `
//   <h2 class="title">${title}</h2>
//   <div class="properties">
//       <div class="titles">
//           <p class="property">Vote / Votes</p>
//           <p class="property">Popularity</p>
//           <p class="property">Original Title</p>
//           <p class="property">Genre</p>
//           <p class="property property--trailer">Trailer</p>
//       </div>
//       <div class="values">
//           <p class="value"><span class="first-mark">${roundVote_average}</span>&nbsp;/&nbsp;<span class="second-mark">${vote_count}</span></p>
//           <p class="value">${roundPopularity}</p>
//           <p class="value">${original_title}</p>
//           <p class="value">${getGenresNames(genres)}</p>
//           <p class="value">
//            <button class="modal-film__play-btn" type="button" ></button>
//           </p>

//       </div>
//   </div>
//   <div class="about">
//       <p class="title">About</p>
//       <div class="about-container">
//           <p class="text">${overview}</p>
//       </div>
//   </div>
//       `;

//   imgRef.innerHTML = imageMarkup;
//   contentRef.innerHTML = markup;
// }

// // function whichBtnShow(id) {
// //   const localstorage = localStorage.getItem('queue');

// //   if (localstorage === null) {
// //     queueBtn.textContent = 'Add to queue';
// //     return;
// //   }
// //   if (JSON.parse(localstorage.includes(id))) {
// //     queueBtn.textContent = 'Remove from queue';
// //   } else {
// //     queueBtn.textContent = 'Add to queue';
// //   }
// // }

// // function whichBtnShowInWatchedFilms(id) {
// //   const localstorageWatched = localStorage.getItem('watched');

// //   if (localstorageWatched === null) {
// //     addToWatchedButton.textContent = 'Add to watched';
// //     return;
// //   }
// //   if (JSON.parse(localstorageWatched.includes(id))) {
// //     addToWatchedButton.textContent = 'Remove from watched';
// //   } else {
// //     addToWatchedButton.textContent = 'Add to watched';
// //   }
// // }
