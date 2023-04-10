
import ApiServices from './services/Api_services';
import localStore from './services/local_storage';


let id = 0;
const refs = {
  openModal: document.querySelector('[data-modal-about-open]'),
  closeModalBtn: document.querySelector('[data-modal-about-close]'),
  modal: document.querySelector('[data-modal-about]'),
  
  };

refs.openModal.addEventListener('click', openModalHome);
refs.closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  refs.modal.classList.add('is-hidden');
}

function openModalElem() {
  refs.modal.classList.remove('is-hidden');
}

const apiServices = new ApiServices();

// на який елемент вішаємо слухача для kліку для відкриття модалки? - після рендеру головної сторінки.

  // модалка для трендового фільма

  function openModalHome (e) {
      openModalElem();
    // e.preventDefault();

    let currentID = 76600;
    const massiveMovies = localStore.load('trendMovies');
    const movie = massiveMovies.find((massiveMovie => massiveMovie.id === currentID));
     modalFilmCart(movie);
    
   }
  
    

// модалка для пошуку за ключовим словом
//  function openModalKey (e) {
//   e.preventDefault();
//       let currentID = e.currentTarget.elements.searchQuery.value;
//  const movie =  searchMovies.find((searchMovie => searchMovie.id === currentID));
//      refs.modal.insertAdjacentHTML("beforeend", movieCard(movie));

//  }

// import Player  from '@vimeo/player';

// const getGenresNames = genres => genres.map(genre => genre.name).join(', ');

function modalFilmCart({
 title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  overview,
  poster_path,
}) {
  let roundPopularity = Math.round(popularity);
  let roundVote_average = vote_average.toFixed(1);
  if (poster_path === null) {
   poster_path ="https://dummyimage.com/395x574/000/fff.jpg&text=no+poster"
  }
  let imageMarkup = `
  <div class="movie__card">
  <p class ="id">${id}</p>
  <a class="movie__item" href="http://image.tmdb.org/t/p/w300/${poster_path}">
       <img src="http://image.tmdb.org/t/p/w300/${poster_path}" alt="${title}" loading="lazy"/>
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
      refs.modal.insertAdjacentHTML("beforeend", imageMarkup); 
}

{/* <button class="modal-film__play-btn" type="button" ></button> */}
//  <iframe
// id="vimeo-player"
// src="https://player.vimeo.com/video/${'посилання на відео'}"
// width="auto"
// height="auto"
// frameborder="0"
// allowfullscreen
// allow="autoplay; encrypted-media"
// ></iframe>
