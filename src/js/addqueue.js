// import localStorage from './services/local_storage'; 
const QUEUE_KEY = 'queue-movie';
localStorage.setItem(QUEUE_KEY, '[]');
 
export default function addToQueue(data) {
    const movieToAdd = data;
    console.log(`data`, movieToAdd);

    const refs = {
        queueBtn: document.querySelector('.add-films-queue'),
        container: document.querySelector('.container'),
        addToQueueBtn: document.querySelector('movie__queue'),
    };

    const parsedQueueMovies = JSON.parse(localStorage.getItem(QUEUE_KEY));
    console.log(`parsedQueueFilms`, parsedQueueMovies);
    if (parsedQueueMovies.some(element => element.id === movieToAdd.id)) {
        console.log(`You have this movie in the queue`);
    }

    refs.addToQueueBtn.addEventListener('click', onAddToQueue);

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
            // const year = movies.release_date.slice(0, 3);
            // console.log(`year`, year);
            // const genre = Object.values(genre_ids).join(" | ");
            return `<p class="gallery">
            <img class="gallery__image"
                src="${BASE_URL}${backdrop_path}" 
                alt="Poster of movie ${title}" 
                loading="lazy">
                <div class="info">
                    <p class="info__item">
                        <b>${title}</b>
                    </p>
                    <p class="info__red">
                        <b>${genre_ids} | ${year}</b>
                    </p>
                </div>
            </p>`;
    })
    .join('');
    refs.container.innerHTML = markup;      
}
