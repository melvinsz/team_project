// import renderMarkur from './render_cards_two';
// import Notiflix from 'notiflix';

import localStore from './services/local_storage.js';
// import getGenres from './services/connect_genres.js';
// import loader from './loader';


export const refs = {
    btnWatched: document.querySelector('#btnWatched'),
    // btnQueued: document.querySelector('#btnQueued'),
  };

  console.log(refs.btnWatched);
  

// refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
// refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

// const queueMovies = localStore.load('queue-movies');
console.log(queueMovies);


function clickOnBtnQueuedHandler() {
    refs.btnWatched.classList.remove('active-btn');
    refs.btnQueued.classList.add('active-btn');
    
  }
  
  function clickOnBtnWatchedHandler() {
    refs.btnQueued.classList.remove('active-btn');
    refs.btnWatched.classList.add('active-btn');
    
  }
