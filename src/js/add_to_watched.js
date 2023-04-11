const STORAGE_KEY = 'watched-films';
localStorage.setItem(STORAGE_KEY, '[]');
<<<<<<< Updated upstream

export default function addToWatched(data) {
  const filmToAdd = data;

  const addToWatchedRef = document.querySelector('[data-modal-add]');
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   console.log(parsedWatchedFilms);

  //(data.id === parsedWatchedFilms.find(element => element.id))
  //if (filmToAdd.id === parsedWatchedFilms.some(element => element.id))
  //варіант з прикладу if (parsedWatchedFilms.some(element => element.id === filmToAdd.id))

  if (parsedWatchedFilms.some(element => element.id === filmToAdd.id)) {
    addToWatchedRef.textContent = `Remove from watched`;
  }

  addToWatchedRef.addEventListener('click', onAddToWatched);

  function onAddToWatched() {
    // const filmToAdd = data;

=======
export default function addToWatched(data) {
  const filmToAdd = data;
  const addToWatchedRef = document.querySelector('[data-modal-add]');
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   console.log(parsedWatchedFilms);
  //(data.id === parsedWatchedFilms.find(element => element.id))
  //if (filmToAdd.id === parsedWatchedFilms.some(element => element.id))
  //варіант з прикладу if (parsedWatchedFilms.some(element => element.id === filmToAdd.id))
  if (parsedWatchedFilms.some(element => element.id === filmToAdd.id)) {
    addToWatchedRef.textContent = `Remove from watched`;
  }
  addToWatchedRef.addEventListener('click', onAddToWatched);
  function onAddToWatched() {
    // const filmToAdd = data;
>>>>>>> Stashed changes
    if (!parsedWatchedFilms.some(element => element.id === filmToAdd.id)) {
      parsedWatchedFilms.push(filmToAdd);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedWatchedFilms));
      //   console.log(localStorage.getItem(STORAGE_KEY));
      addToWatchedRef.textContent = `Remove from watched`;
      return parsedWatchedFilms;
    } else {
      const filmToRemove = parsedWatchedFilms.find(
        movie => movie.id === filmToAdd.id
      );
      removeFromWatched(parsedWatchedFilms, filmToRemove);
      addToWatchedRef.textContent = `Add to watched`;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedWatchedFilms));
      //   console.log(parsedWatchedFilms);
    }
  }
  function removeFromWatched(array, movie) {
    const index = array.indexOf(movie);
    // console.log(index);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
}
