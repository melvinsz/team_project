const QUEUE_KEY = 'queue-movies';
// localStorage.setItem(QUEUE_KEY, '[]');
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
    refs.addToQueueBtn.addEventListener('click', onAddToQueue);
    
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