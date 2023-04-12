import '../sass/index.scss';
import getGenres from './services/connect_genres';

const URL_POSTER = 'http://image.tmdb.org/t/p/w342/';
const collectionRef = document.querySelector('.library__container');
const addqueueRef = document.querySelector('.add-films-queue');
                                        
const QUEUE_KEY = 'queue-movies';

addqueueRef.addEventListener('click', renderMovies);

function renderMovies(e) {
    e.preventDefault();
    const parsedQueueMovies = JSON.parse(localStorage.getItem(QUEUE_KEY));
    console.log(`parsedQueueMovies`, parsedQueueMovies);

    queueMovies(parsedQueueMovies);
    localStorageCheck(); 
}

function queueMovies(movies) {
    console.log(`movies`, movies);
    const markup = movies.map(
        ({
            id,
            title,
            genre_ids,
            release_date,
            poster_path,
        }) => {
            const genres = getGenres(genre_ids);
            console.log(`genres`, genres);
            const year = release_date.slice(0, 3);
            console.log(`year`, year);
            // const genre = Object.values(genre_ids).join(" | ");
            return `<li class="gallery">
                <a class="movie__item" href="${URL_POSTER}${poster_path}">
                    <img src="${URL_POSTER}${poster_path}"
                    alt="Poster of movie ${title}" 
                    data-source='${id}' 
                    loading="lazy"/>
                </a>
                <div class="info">
                    <p class="info__item">
                        <b>${title}</b>
                    </p>
                    <p class="info__red">
                        <b>${genres} | ${year}</b>
                    </p>
                </div>
            </li>`;
    })
    .join('');
    collectionRef.innerHTML = markup;      
}

function localStorageCheck() {
  if (collectionRef.innerHTML === '') {
    const emptyList = `<li class="gallery">Your library of watched movies is empty.</li>`;
    collectionRef.innerHTML = emptyList;
  }
}

export { URL_POSTER, collectionRef, renderMovies };
