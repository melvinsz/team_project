// import ApiServices from './js/services/api_services';

const refs = {
  openModal: document.querySelector('.film-modal'),
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
// яку властивість брати за ключову для пошуку?

// модалка для трендового фільма
function openModalHome(e) {
  console.log(`да`);
  openModalElem();
  e.preventDefault();

  apiServices.getTrendMovies().then(movie => {
    //       let currentID = e.currentTarget.elements.searchQuery.value;
    //  const movie =  trendMovies.find((trendMovie => trendMovie.id === currentID));
    refs.modal.insertAdjacentHTML('beforeend', movieCard(movie));
  });
}
// модалка для пошуку за ключовим словом
//  function openModalKey (e) {
//   e.preventDefault();
//       let currentID = e.currentTarget.elements.searchQuery.value;
//  const movie =  searchMovies.find((searchMovie => searchMovie.id === currentID));
//      refs.modal.insertAdjacentHTML("beforeend", movieCard(movie));

//  }

function movieCard(movie) {
  return movie
    .map(
      ({
        original_title,
        backdrop_path,
        vote_average,
        vote_count,
        popularity,
        genre_ids,
        overview,
      }) => {
        return `<div class="movie__modal is-hidden" data-modal-about>
       <button class="movie__close"  data-modal-about-close>
          <svg class='icon-close' width="14" height="14" >
                    <use href="./images/sprite.svg#icon-Vectorclose"></use>
          </svg>
     </button>
   <div class="movie__card">
     <a class="movie__item" href="http://image.tmdb.org/t/p/w300/${backdrop_path}">
       <img src='./images/Rectangle 18.png' alt="${original_title}" loading="lazy"/>
       <!-- '${backdrop_path}' -->
     </a>
     <div class="movie__info">
   <h3 class="movie__modal--title"><b><span >${original_title}</span></b>
   </h3>
   <div class="movie__detals">
      <div class="movie__detals--key">
       <p class="info-key"><span>Vote / Votes</span ></p>
       <p class="info-key"><span>Popularity</span></p>
       <p class="info-key"><span>Original title</span></p>
       <p class="info-key"><span>Genre</span></p>
      </div>
      <div class="movie__detals--value">
         <p class="info-item">
           <button class="vote-average">${vote_average}</button></span> / ${vote_count}</span></p>
         <p class="info-item">
            <span >${popularity}</span></p>
         <p class="info-item--title"><span >${original_title}</span></p>
         <p class="info-item">
             <span > ${Object.values(genre_ids).join(', ')}</span></p>
      </div>
   </div>
         <p class="movie__about--modal"><b>ABOUT</b></p>
          <p><span class="overview">${overview}</span></p>
//  <iframe
// id="vimeo-player"
// src="https://player.vimeo.com/video/${'посилання на відео'}"
// width="auto"
// height="auto"
// frameborder="0"
// allowfullscreen
// allow="autoplay; encrypted-media"
// ></iframe>
          <button class="movie__add"  data-modal-add data-modal-remove><span>add to watched</span></button>
          <button class="movie__queue"  data-modal-queue data-modal-delete><span>add to queue</span></button>  
        </div> 
</div>`;
      }
    )
    .join('');
}

// import Player  from '@vimeo/player';
