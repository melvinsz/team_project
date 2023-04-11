
const pageNumber = 1;

const refs = {
    queueBtn: document.querySelector('.add-films-queue'),
    container: document.querySelector('.container'),
}

refs.queueBtn.addEventListener('submit', queueMovies());


async function queueMovies(e) {
   
//     // refs.container.innerHTML = '';

//     try {
//         const movies = await    ;
    
//         renderMovies(movies.);
    
//         pageNumber += 1;
//     } catch (error) {
//         // Notiflix.Notify.info("");
//         console.log(error);
//     }
// }

// function renderMovies(movies) {
//     console.log(`data`, movies);
//     const markup = movies.map(
//         ({
//             title,
//             genre_ids,
//             release_date,
//             backdrop_path,
//             poster_path,
//         }) => {
//             // const year = movies.release_date.slice(0, 3);
//             // console.log(`year`, year);
//             // const genre = Object.values(genre_ids).join(" | ");
//             return `<p class="gallery">
//             <img class="gallery__image"
//                 src="${BASE_URL}${backdrop_path}" 
//                 alt="Poster of movie ${title}" 
//                 loading="lazy">
//                 <div class="info">
//                     <p class="info__item">
//                         <b>${title}</b>
//                     </p>
//                     <p class="info__red">
//                         <b>${genre_ids} | ${year}</b>
//                     </p>
//                 </div>
//             </p>`;
//     })
//     .join('');
//     refs.container.innerHTML = markup;      
}


const STORAGE_KEY = 'watched-films';
 localStorage.setItem(STORAGE_KEY, '[]');
 const filmListFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

// export function addToWatched(data) {
//   const filmToAdd = data;
//   console.log(filmToAdd);

//   const addToWatchedRef = document.querySelector('[data-modal-add]');
//   const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   console.log(watchedFilms);

//   //(data.id === parsedWatchedFilms.find(element => element.id))
//   //(listFilmToWatched.some(film=> film.id==data.id))
//   //варіант з прикладу if (parsedWatchedFilms.some(element => element.id === filmToAdd.id))

//   if (filmToAdd.id === parsedWatchedFilms.some(element => element.id)) {
//     addToWatchedRef.textContent = `Remove from watched`;
//   }

//   addToWatchedRef.addEventListener('click', onAddToWatched);

//   function onAddToWatched(e) {
//     const filmToAdd = data;

//     console.log(`Фільм додається до watched`);
//     console.log(localStorage.getItem(STORAGE_KEY));

//     if (filmToAdd.id === parsedWatchedFilms.some(element => element.id)) {
//       removeFromWatched(filmToAdd.id);
//       addToWatchedRef.textContent = `Add to watched`;
//     } else {
//       parsedWatchedFilms.push(filmToAdd);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedWatchedFilms));
//       addToWatchedRef.textContent = `Remove from watched`;
//     }
//   }
// }

// function removeFromWatched(id) {
//   console.log(`removing movie with id ${id}`);
// }