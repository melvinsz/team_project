


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
// яку властивість брати за ключову для пошуку

  // модалка для трендового фільма

  function openModalHome (e) {
    console.log(`да`);
    openModalElem();
    // e.preventDefault();
  onLoadMore();
    let currentID = 76600;
    const massiveMovies = localStore.load('trendMovies');
    const movie = massiveMovies.find((massiveMovie => massiveMovie.id === currentID));
    console.log(movie);
    refs.modal.insertAdjacentHTML("beforeend", movieCard(movie));
        
   }
  



      
   function onLoadMore() {
    apiServices.getTrendMovies().then(data => console.log(data))
    
        };

// модалка для пошуку за ключовим словом
//  function openModalKey (e) {
//   e.preventDefault();
//       let currentID = e.currentTarget.elements.searchQuery.value;
//  const movie =  searchMovies.find((searchMovie => searchMovie.id === currentID));
//      refs.modal.insertAdjacentHTML("beforeend", movieCard(movie));

//  }

function movieCard(movie) {
  return movie.map(({
        original_title,
        backdrop_path,
        vote_average,
        vote_count,
        popularity,
        genre_ids,
        overview,
      }) => {
        return `
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
</div>
`;
}).join('');
}

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