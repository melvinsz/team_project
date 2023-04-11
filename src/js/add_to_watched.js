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
