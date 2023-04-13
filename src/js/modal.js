import localStore from './services/local_storage';
import getGenres from './services/connect_genres';
import onAddToWatched from './add_to_watched';
import addToWatched from './add_to_watched';

import addToQueue from './addqueue';

let id = 0;
let imageMarkup = '';
let LOCAL_StORAGE_KEY = [];

const refs = {
  openModal: document.querySelector('.collection'),
  openModalLib: document.querySelector('.library__pagination'),
  closeModalBtn: document.querySelector('[data-modal-about-close]'),
  modal: document.querySelector('[data-modal-about]'),
  modalRender: document.querySelector('.movie__modal--render'),
  closeModalField: document.querySelector('.container.modal'),


  backdropOpCl:  document.querySelector('.backdrop-about'),

  btnQueued: document.querySelector('#btnQueued'),
   btnWatched: document.querySelector('#btnWatched'),
};

refs.openModal.addEventListener('click', openModalHome);

refs.closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', closeModalOnEsc);
document.body.addEventListener('click', closeModalOn);

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
refs.backdropOpCl.addEventListener('click', closeModal)



function closeModalOn(e) {
  if (!e.target.closest('.modal__content')) {
    return;
  }closeModal();


}
const modalContainer = document.querySelector( 'container.modal');
 
// document.addEventListener( 'click', (e) => {
// 	const closeModClick = e.composedPath().includes(modalContainer);
 
// 	if ( ! closeModClick ) {
// 		closeModal()
// 	}
// })



function closeModal() {
  refs.modal.classList.add('is-hidden');


  // addToWatched();

  refs.backdropOpCl.classList.add("is-hidden")

}

function openModalElem() {
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('is-active');
  refs.backdropOpCl.classList.remove("is-hidden")
}




function openModalHome(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }
 
  window.addEventListener('scroll', function(e) {
    e.preventDefault();
    });
    
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
  // let genresMovie =  genre_ids ? getGenres(genre_ids) : 'Unknown';
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
          <button class="vote-average">${roundVote_average}</button>&nbsp;<span class="slash">/</span>&nbsp;
          ${vote_count}</p>
          <p class ="info-item">${roundPopularity}</p>
          <p class ="info-item--title">${original_title}</p>
          <p class ="info-item">'{genresMovie}'</p>    
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
refs.btnWatched.classList.remove('active-btn');
if (refs.btnWatched.classList.remove('active-btn')) {
  LOCAL_StORAGE_KEY = 'watched-films'
} else if (refs.btnQueued.classList.add('active-btn')) {
  LOCAL_StORAGE_KEY = 'watched-films'
}


function openModalHome(e) {
  if (!e.target.classList.contains('card__img')) {
    return;
  }
 
  window.addEventListener('scroll', function(e) {
    e.preventDefault();
    });
    
  openModalElem();
  e.preventDefault();

  if (refs.btnWatched.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'watched-films'
  } else if (refs.btnQueued.classList.contains('active-btn')) {
    LOCAL_StORAGE_KEY = 'queue-movies'
  }


  let currentID = Number(e.target.dataset.source);
  const massiveMovies = localStore.load(LOCAL_StORAGE_KEY);
  const movie = massiveMovies.find(
    massiveMovie => massiveMovie.id === currentID
  );
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
  // let genresMovie =  genre_ids ? getGenres(genre_ids) : 'Unknown';
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
          <button class="vote-average">${roundVote_average}</button>&nbsp;<span class="slash">/</span>&nbsp;
          ${vote_count}</p>
          <p class ="info-item">${roundPopularity}</p>
          <p class ="info-item--title">${original_title}</p>
          <p class ="info-item">'{genresMovie}'</p>    
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

