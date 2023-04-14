import renderMarkur from './render_cards_two';
import Notiflix from 'notiflix';

import Api_Services from './services/Api_services';
const apiservices = new Api_Services();

let query = '';
const searchFormRef = document.querySelector('.form');
const inputRef = document.querySelector('.header_search-input');

searchFormRef.addEventListener('submit', onSearchMovie);

async function onSearchMovie(e) {
  e.preventDefault();
  query = inputRef.value.trim();

  if (!query) {
    return Notiflix.Notify.failure('Please enter a search query for the movie');
  }
  try {
    apiservices.searchQuery = query;
    const { data } = await apiservices.getSearchMovie(query);
    if (data.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
      return;
    }
    Notiflix.Notify.success(
      `Hooray! We found something interesting for you :)`
    );
    renderMarkur(data.results);
  } catch (error) {
    Notiflix.Notify.failure(
      'Search result not successfull. Enter the correct movie name.'
    );
    console.log(error.message);
  }
}

export { query };
