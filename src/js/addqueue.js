// import localStorage from './services/local_storage';
import getGenres from './services/connect_genres';

const QUEUE_KEY = 'queue-movies';
// localStorage.setItem(QUEUE_KEY, '[]');

// Цю функцію я імпортувала до модалки,
//     але закоментувала, розкоментуйте, щоб працювало

export default function addToQueue(data) {
  const movieToAdd = data;

  const addToQueueRef = document.querySelector('[data-modal-queue]');

  let parsedQueueMovies;

  const parsedList = JSON.parse(localStorage.getItem(QUEUE_KEY));

  parsedQueueMovies = parsedList || [];
  //   console.log(`parsedQueueMovies`, parsedQueueMovies);
  if (parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
    addToQueueRef.textContent = `Remove from queue`;
  }

  addToQueueRef.addEventListener('click', onAddToQueue);

  function onAddToQueue() {
    if (!parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
      parsedQueueMovies.push(movieToAdd);
      localStorage.setItem(QUEUE_KEY, JSON.stringify(parsedQueueMovies));
      // console.log(`queue item`, localStorage.getItem(QUEUE_KEY));
      addToQueueRef.textContent = 'Remove from queue';
      return parsedQueueMovies;
    } else {
      const filmToRemove = parsedQueueMovies.find(
        movie => movie.id === movieToAdd.id
      );
      removeFromQueue(parsedQueueMovies, filmToRemove);
      addToQueueRef.textContent = `Add to queue`;
      localStorage.setItem(QUEUE_KEY, JSON.stringify(parsedQueueMovies));
    }
  }
  function removeFromQueue(array, movie) {
    const index = array.indexOf(movie);
    // console.log(index);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
}

// Думаю зробити рендер окремим файлом, чи не треба?

// function renderMovies(movies) {
//   console.log(`movies`, movies);
//   const markup = movies
//     .map(({ title, genre_ids, release_date, poster_path }) => {
//       const genres = getGenres(genre_ids);
//       const year = release_date.slice(0, 3);
//       console.log(`year`, year);
//       // const genre = Object.values(genre_ids).join(" | ");
//       return `<div class="gallery">
//                 <a class="movie__item" href="http://image.tmdb.org/t/p/w300/${poster_path}">
//                     <img src='./images/Rectangle 18.png'
//                     alt="Poster of movie ${title}"
//                     loading="lazy"/>
//                 </a>
//                 <div class="info">
//                     <p class="info__item">
//                         <b>${title}</b>
//                     </p>
//                     <p class="info__red">
//                         <b>${genres} | ${year}</b>
//                     </p>
//                 </div>
//             </div>`;
//     })
//     .join('');
//   refs.container.insertAdjacentHTML('beforeend', markup);
// }
