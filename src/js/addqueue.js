
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