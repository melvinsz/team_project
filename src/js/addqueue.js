const QUEUE_KEY = 'queue-movies';

// Цю функцію я імпортувала до модалки,
//     але закоментувала, розкоментуйте, щоб працювало

export default function addToQueue(data) {
  console.log('типу клік по кнопці addToQueue в модал, файл addqueue');
  const movieToAdd = data;

  const addToQueueRef = document.querySelector('[data-modal-queue]');

  let parsedQueueMovies;

  const parsedList = JSON.parse(localStorage.getItem(QUEUE_KEY));

  parsedQueueMovies = parsedList || [];
  if (parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
    addToQueueRef.textContent = `Remove from queue`;
  }

  addToQueueRef.addEventListener('click', onAddToQueue);

  function onAddToQueue() {
    if (!parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
      parsedQueueMovies.push(movieToAdd);
      localStorage.setItem(QUEUE_KEY, JSON.stringify(parsedQueueMovies));
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
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
}
