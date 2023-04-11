// import localStorage from './services/local_storage';
import getGenres from './services/connect_genres';

const QUEUE_KEY = 'queue-movie';
localStorage.setItem(QUEUE_KEY, '[]');
 
export default function addToQueue(data) {
    const movieToAdd = data;
    console.log(`data`, movieToAdd);

    const refs = {
        queueBtn: document.querySelector('.add-films-queue'),
        container: document.querySelector('.container'),
        addToQueueBtn: document.querySelector('.movie__queue'),
    };

    const parsedQueueMovies = JSON.parse(localStorage.getItem(QUEUE_KEY));
    console.log(`parsedQueueMovies`, parsedQueueMovies);
    if (parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
        console.log(`You have this movie in the queue`);
    }

    // refs.addToQueueBtn.addEventListener('click', onAddToQueue);

    renderMovies(movies);

    function onAddToQueue() {
        if (!parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
            console.log(`we add`);
            parsedQueueMovies.push(movieToAdd);
            localStorage.setItem(QUEUE_KEY, JSON.stringify(parsedQueueMovies));
            console.log(`queue item`, localStorage.getItem(QUEUE_KEY));
            return parsedQueueMovies;
        } else {
            console.log(`You have this movie in the queue`);
        }
    }

}

// Думаю зробити рендер окремим файлом, чи не треба?

function renderMovies(movies) {
    console.log(`movies`, movies);
    const markup = movies.map(
        ({
            title,
            genre_ids,
            release_date,
            backdrop_path,
            poster_path,
        }) => {
            const genres = getGenres(genre_ids);
            const year = release_date.slice(0, 3);
            console.log(`year`, year);
            // const genre = Object.values(genre_ids).join(" | ");
            return `<div class="gallery">
                <a class="movie__item" href="http://image.tmdb.org/t/p/w300/${poster_path}">
                    <img src='./images/Rectangle 18.png'
                    alt="Poster of movie ${title}" 
                    loading="lazy"/>
                    <!-- '${backdrop_path}' -->
                </a>
                <div class="info">
                    <p class="info__item">
                        <b>${title}</b>
                    </p>
                    <p class="info__red">
                        <b>${genres} | ${year}</b>
                    </p>
                </div>
            </div>`;
    })
    .join('');
    refs.container.insertAdjacentHTML('beforeend', markup);      
}
