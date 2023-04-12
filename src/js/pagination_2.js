//import { renderMovieItem, fetchMovie } from './render_cards.js';
import {showLoader} from "./loader.js";
const paginationEl = document.querySelector('.library__pagination');
const container = document.querySelector('.library__container');
const renderAddToWatched = document.querySelector('.watched_button');
const modalButtonQueue = document.querySelector('.queue');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('.modal');

const mediaQuery = window.matchMedia('(max-width: 767px)');

let pagMarkup = '';
let currentPage = 0;
let watchedLibreryArray = [];
let quntityOfPages = 1;
let page = '';
const FILMS_ON_PAGE = 20;
const BTNS_ON_PAGE = 5;
const STORAGE_KEY = 'watched-films';
const QUEUEKEY = 'queuedMovieIDs';

createPagination();

paginationEl.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    onBtnsClick(event);
  }
});
renderAddToWatched.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});
modalButtonQueue.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});

function choseLibrary(chosedBtn) {
  if (
    chosedBtn === '' ||
    (localStorage.getItem(QUEUEKEY) === null &&
      localStorage.getItem(STORAGE_KEY) === null)
  ) {
    return;
  } else if (chosedBtn === STORAGE_KEY) {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      return;
    }
    watchedLibreryArray = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } else {
    if (localStorage.getItem(QUEUEKEY) === null) {
      return;
    }
    watchedLibreryArray = JSON.parse(localStorage.getItem(QUEUEKEY));
  }
}

function calculateQuntityOfPages(filmsPerPage) {
  if (watchedLibreryArray.length > filmsPerPage) {
    quntityOfPages = Math.ceil(watchedLibreryArray.length / filmsPerPage);
  }
}

function findActiveBtn() {
  if (renderAddToWatched.classList.contains('activBtn')) {
    page = STORAGE_KEY;
  } else if (modalButtonQueue.classList.contains('activBtn')) {
    page = QUEUEKEY;
  }
}

function renderPaginationMarkup(length) {
  if (watchedLibreryArray.length === 0 || watchedLibreryArray === []) {
    return;
  } else if (mediaQuery.matches) {
    renderPaginationMarkupForMobile(length);
  } else {
    renderPaginationMarkupForTabletAndDesktop(length);
  }

  paginationEl.insertAdjacentHTML('beforeend', pagMarkup);
}

function renderPaginationMarkupForMobile(length) {
  pagMarkup = '';

  if (length <= BTNS_ON_PAGE) {
    for (let i = 0; i < length; i += 1) {
      pagMarkup += `<li class='pagination-item'><button class="button-number">${
        i + 1
      }</button></li>`;
    }
  } else {
    if (currentPage + 1 < BTNS_ON_PAGE) {
      pagMarkup =
        '<li class="pagination-item"><button class="left">&#8592</button></li>';

      for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
        const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
        pagMarkup += pagItem;
      }

      pagMarkup += `<li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else if (
      currentPage + 1 >= BTNS_ON_PAGE &&
      currentPage + 1 < length - 3
    ) {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 3
      }</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
        <li class='pagination-item'><button class="button-number">${
          length - 4
        }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 3
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    }
  }
}

function renderPaginationMarkupForTabletAndDesktop(length) {
  pagMarkup = '';

  if (length <= BTNS_ON_PAGE) {
    for (let i = 0; i < length; i += 1) {
      pagMarkup += `<li class='pagination-item'><button class="button-number">${
        i + 1
      }</button></li>`;
    }
  } else {
    if (currentPage + 1 < BTNS_ON_PAGE) {
      pagMarkup =
        '<li class="pagination-item"><button class="left">&#8592</button></li>';

      for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
        const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
        pagMarkup += pagItem;
      }

      pagMarkup += `<li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else if (
      currentPage + 1 >= BTNS_ON_PAGE &&
      currentPage + 1 < length - 3
    ) {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
      <li class='pagination-item'><button class="button-number">1</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 3
      }</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
  <li class='pagination-item'><button class="button-number">1</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 4
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 3
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    }
  }
}

function clearPaginationMarkup() {
  paginationEl.innerHTML = '';
}

function setActiveBtn(event) {
  if (watchedLibreryArray.length === 0 || watchedLibreryArray === []) {
    return;
  }
  const numberBtnsEl = document.querySelectorAll('button.button-number');
  const btnsArray = [...numberBtnsEl];

  if (currentPage === 0) {
    numberBtnsEl[0].classList.add('active-pagination');
  } else {
    let targetBtnValue = 0;

    targetBtnValue = Number(event.target.textContent);

    btnsArray.find((btn, index) => {
      if (btn.classList.contains('active-pagination')) {
        numberBtnsEl[index].classList.remove('active-pagination');
      }
    });

    btnsArray.find((btn, index) => {
      if (Number(btn.textContent) === targetBtnValue) {
        numberBtnsEl[index].classList.add('active-pagination');
      }
    });
  }
}

function onNumberBtnClick(event) {
  currentPage = Number(event.target.textContent) - 1;
}

function onRightBtnClick() {
  currentPage += 1;
}

function onLeftBtnClick() {
  currentPage -= 1;
}

function onBtnsClick(event) {
  const paginationBtnsList = document.querySelectorAll('button.button-number');
  const lastPage = Number(
    paginationBtnsList[paginationBtnsList.length - 1].textContent
  );

  showLoader();

  if (Number(event.target.textContent)) {
    onNumberBtnClick(event);
  } else if (event.target.textContent === '→' && currentPage < lastPage - 1) {
    onRightBtnClick();
  } else if (event.target.textContent === '←' && currentPage > 0) {
    onLeftBtnClick();
  } else {
    return;
  }

  clearPaginationMarkup();
  clearMovieContainer();

  getUserCollection(page)
    .then(films => {
      const filteredFilms = [];
      //console.log(films);

      if (films.length <= FILMS_ON_PAGE) {
        films.map(film => {
          renderMovieItem(film);
        });
      } else {
        films.filter((film, index) => {
          if (
            index > FILMS_ON_PAGE * currentPage &&
            index <= FILMS_ON_PAGE * (currentPage + 1)
          ) {
            filteredFilms.push(film);
          }
        });
        filteredFilms.map(filteredfilm => {
          renderMovieItem(filteredfilm);
        });
      }
    })
    .then(renderPaginationMarkup(quntityOfPages))
    .then(setActiveBtn(event))
    .then(loaderToggle)
    .then(goToTop);
}

function getArrayID(goal) {
  return JSON.parse(localStorage.getItem(goal));
}

async function getUserCollection(goal) {
  const userCollectionPromises = [];
  const arrayID = getArrayID(goal);
  if (arrayID < 1) return [];

  arrayID.map(id => {
    userCollectionPromises.push(fetchMovie(id));
  });
  const userCollection = Promise.all(userCollectionPromises);

  return await userCollection;
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function clearMovieContainer() {
  container.innerHTML = '';
}

function createPagination() {
  setTimeout(() => {
    findActiveBtn();
    choseLibrary(page);
    calculateQuntityOfPages(FILMS_ON_PAGE);
    renderPaginationMarkup(quntityOfPages);
    setActiveBtn();
  }, 0);
}
