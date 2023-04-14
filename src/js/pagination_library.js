import localStore from './services/local_storage';
import renderMarkur from './render_cards_two';
import {refs} from './modal';

const count = 6;
let n;
let query;
let total_pages;
const ref = {
    collection: document.querySelector('.collection'),
    pagination: document.querySelector('.pagination-l'),
    btnLeft: document.querySelector('.btn-left-l'),
    secondLeft: document.querySelector('.second-left-l'),
    firstLeft: document.querySelector('.first-left-l'),
    current: document.querySelector('.current-l'),
    firstRight: document.querySelector('.first-right-l'),
    secondRight: document.querySelector('.second-right-l'),
    btnRight: document.querySelector('.btn-right-l'),
  };

  localStore.load('watched-films'); console.log(localStore.load('watched-films'));

function enablePagination(d) {
  const total = Math.ceil(d/count);

  if (total > 2) {
    ref.firstLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.btnLeft.style.display = 'none';
  } else if (total === 2) {
    ref.firstLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.btnLeft.style.display = 'none';
    ref.secondRight.style.display = 'none';
  } else if (total === 1) {
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.firstLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.btnRight.style.display = 'none';
    ref.btnLeft.style.display = 'none';
  } else {
    ref.current.style.display = 'none';
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.firstLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.btnRight.style.display = 'none';
    ref.btnLeft.style.display = 'none';
  };

  return total;
};

export {count, enablePagination};
// console.log(refs.btnQueued);
// console.log(refs.btnQueued.classList.contains('active-btn'));
  // ref.btnLeft.addEventListener('click', onSearchLeft);
  // ref.btnRight.addEventListener('click', onSearchRight);
  // ref.firstLeft.addEventListener('click', onSearchNumber);
  // ref.firstRight.addEventListener('click', onSearchNumber);
  // ref.secondLeft.addEventListener('click', onSearchNumber);
  // ref.secondRight.addEventListener('click', onSearchNumber);
  


async function onSearchLeft(event) {
  ref.collection.innerHTML = '';
  ref.pagination.style.display = 'none';
  n = Number(ref.current.textContent) - 1;

    if (btnQueued.classList.contains('active-btn')) {     
      const queueMovies = localStore.load('queue-movies');
      total_pages = enablePagination(queueMovies.length);
      renderMarkur(queueMovies.slice(count*(n-1),n*count)); 
    } 
    else {
      const watchedMovies = localStore.load('watched-films');
      total_pages = enablePagination(watchedMovies.length);
      renderMarkur(watchedMovies.slice(count*(n-1),n*count));
    }
  
  ref.current.textContent = n; 
  ref.firstLeft.textContent = n - 1;
  ref.firstRight.textContent = n + 1;
  ref.secondLeft.textContent = n - 2;
  ref.secondRight.textContent = n + 2;

  ref.pagination.style.display = 'flex';

  if (n === 2 && total_pages === 2) {
    ref.secondLeft.style.display = 'none';
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.btnRight.style.display = 'none';
  } else if (n === 2 && total_pages === 3) {
    ref.secondLeft.style.display = 'none';
    ref.secondRight.style.display = 'none';
  } else if (n === 2 && total_pages > 3) {
    ref.secondLeft.style.display = 'none';
  } else if (n === total_pages) {
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.btnRight.style.display = 'none';
  } else if (n === total_pages - 1) {
    ref.secondRight.style.display = 'none';
  } 
}

async function onSearchRight(event) {
  ref.collection.innerHTML = '';
  ref.pagination.style.display = 'none';
  n = Number(ref.current.textContent) + 1;

  if (btnQueued.classList.contains('active-btn')) {     
    const queueMovies = localStore.load('queue-movies');
    total_pages = enablePagination(queueMovies.length);
    renderMarkur(queueMovies.slice(count*(n-1),n*count)); 
  } 
  else {
    const watchedMovies = localStore.load('watched-films');
    total_pages = enablePagination(watchedMovies.length);
    renderMarkur(watchedMovies.slice(count*(n-1),n*count));
  }

  ref.current.textContent = n; 
  ref.firstLeft.textContent = n - 1;
  ref.firstRight.textContent = n + 1;
  ref.secondLeft.textContent = n - 2;
  ref.secondRight.textContent = n + 2;

  ref.pagination.style.display = 'flex';

  if (n === 1 && total_pages === 2) {
    ref.secondLeft.style.display = 'none';
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.btnRight.style.display = 'none';
  } else if (n === 1 && total_pages === 3) {
    ref.secondLeft.style.display = 'none';
    ref.secondRight.style.display = 'none';
  } else if (n === 1 && total_pages > 3) {
    ref.secondLeft.style.display = 'none';
  } else if (n === 2 && total_pages === 4) {
    ref.secondRight.style.display = 'none';
  } else if (n === total_pages - 1) {
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.btnRight.style.display = 'none';
  } 
}

// // // async function onSearchNumber(event) {
// // //   colectionUl.innerHTML = '';
// // //   ref.pagination.style.display = 'none';
// // //   apiServices.page = Number(event.currentTarget.textContent);

// // //   if (!query) {
// // //     try {
// // //       const { data } = await apiServices.getTrendMovies();
// // //       console.log(data);
// // //       total_pages = data.total_pages
// // //       renderMarkur(data.results);
// // //     } catch (error) {
// // //       console.log(error.message);
// // //       return;
// // //     }
// // //   } else {
// // //     try {
// // //       const { data } = await apiServices.getSearchMovie(query);
// // //       console.log(data);
// // //       total_pages = data.total_pages
// // //       renderMarkur(data.results);
// // //     } catch (error) {
// // //       console.log(error.message);
// // //       return;
// // //     }
// // //   }
// // //   ref.current.textContent = apiServices.page;
// // //   ref.firstLeft.textContent = Number(ref.current.textContent) - 1;
// // //   ref.firstRight.textContent = Number(ref.current.textContent) + 1;
// // //   ref.secondLeft.textContent = Number(ref.current.textContent) - 2;
// // //   ref.secondRight.textContent = Number(ref.current.textContent) + 2;

// // //   ref.pagination.style.display = 'flex';
// // //   ref.firstRight.style.display = 'flex';
// // //   ref.secondRight.style.display = 'flex';
// // //   ref.btnRight.style.display = 'flex';
// // //   ref.firstLeft.style.display = 'flex';
// // //   ref.secondLeft.style.display = 'flex';
// // //   ref.btnLeft.style.display = 'flex';

// // //   if (apiServices.page === 1) {
// // //     ref.firstLeft.style.display = 'none';
// // //     ref.secondLeft.style.display = 'none';
// // //     ref.btnLeft.style.display = 'none';
// // //   }
// // //   else if (apiServices.page === 2) {
// // //     ref.secondLeft.style.display = 'none';
// // //   }
// // //   else if (apiServices.page === total_pages) {
// // //     ref.firstRight.style.display = 'none';
// // //     ref.secondRight.style.display = 'none';
// // //     ref.btnRight.style.display = 'none';
// // //   }
// // //   else if (apiServices.page === total_pages - 1) {
// // //     ref.secondRight.style.display = 'none';
// // //   }
// // // }
