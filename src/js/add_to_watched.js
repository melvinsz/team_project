const STORAGE_KEY = 'watched-films';
export default function addToWatched(data) {
  const filmToAdd = data;
  const addToWatchedRef = document.querySelector('[data-modal-add]');
  const parsedWatchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   console.log(parsedWatchedFilms);

  if (parsedWatchedFilms.some(element => element.id === filmToAdd.id)) {
    addToWatchedRef.textContent = `Remove from watched`;
  }
  addToWatchedRef.addEventListener('click', onAddToWatched);
  function onAddToWatched() {
    // const filmToAdd = data;
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
