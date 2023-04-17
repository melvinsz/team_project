"use strict";

import localStore from './local_storage';
import styles from '../../css/coming_soon.css'


const refs = {
    bodyLibrary: document.querySelector('body'),
    pgntPanel: document.querySelector('.pagination-l'),
  };

const colectionUl = document.querySelector('.collection');
const markupComingSoon = `<li>     
<div class="box">
  <svg class='svg' viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">Coming soon</text>
    </symbol>

    <g class = "g-ants">
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>



</li>`;  

const showComingSoon = () => {

    const queueMovies = localStore.load('queue-movies');
    const watchedMovies = localStore.load('watched-films');

  if (
    !watchedMovies ||
    watchedMovies.length === 0 ||
    !queueMovies ||
    queueMovies.length === 0
  ) {
    
    refs.pgntPanel.classList.add('hidden');
    refs.bodyLibrary.style.backgroundColor = 'black';
    console.log('пустой массив');
    colectionUl.insertAdjacentHTML('beforeend', markupComingSoon);
    colectionUl.style.color = "#f0f0f0";
    return;
    
    // renderMarkur(watchedMovies);
  }
  refs.pgntPanel.classList.remove('hidden');
  refs.bodyLibrary.style.backgroundColor = "#f0f0f0";
  console.log('не пустой массив');

};

const hideComingSoon = () => {
    refs.pgntPanel.classList.remove('hidden');
    refs.bodyLibrary.style.backgroundColor = "#f0f0f0";


    
};

export default {
  showComingSoon,
  hideComingSoon,
};

// showComingSoon();
// hideComingSoon();


