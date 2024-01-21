const STORAGE_KEY = 'watched-films';

export default function addToWatched(movie) {
  console.log('типу клік по кнопці addToWatched в модал, файл add_to_watched');
  const addToWatchedRef = document.querySelector('[data-modal-add]');
  let parsedWatchedFilms;
  const parsedList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  parsedWatchedFilms = parsedList || [];

  if (parsedWatchedFilms.some(element => element.id === movie.id)) {
    addToWatchedRef.textContent = `Remove from watched`;
  }
  addToWatchedRef.addEventListener('click', onAddToWatched);

  function onAddToWatched() {
    if (!parsedWatchedFilms.some(element => element.id === movie.id)) {
      parsedWatchedFilms.push(movie);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedWatchedFilms));
      addToWatchedRef.textContent = `Remove from watched`;
      return parsedWatchedFilms;
    } else {
      const filmToRemove = parsedWatchedFilms.find(
        movie => movie.id === movie.id
      );
      removeFromWatched(parsedWatchedFilms, filmToRemove);
      addToWatchedRef.textContent = `Add to watched`;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedWatchedFilms));
    }
  }

  function removeFromWatched(array, movie) {
    const index = array.indexOf(movie);
    if (index > -1) {
      array.splice(index, 1);
    }
    // повертає масив фільмів пісял remove
    return array;
  }
}
