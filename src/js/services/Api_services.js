//
//  getTrendMovies() - повертае масив 20 фільмів на сторінці погшуку № this.page, та зберігае (key = 'trendMovies') у local storage;
//
//  getSearchMovie(searchQuery) - повертае масив 20 фільмів по пошуку за назвою this.searchQuery, сторінка пошуку № this.page, та зберігае (key = 'searchMovies') у local storage **;
//
//  getSearchById(id) - повертае об'ект фільму по його id ***;
//
//  getGenres() - повертае масив жанрів, та зберігае (key = 'genre') у local storage, запити робити вже туда вже туда.
//
//
//  **  зберігаємо у local storage, використовауємо дані звідти для модаплки
//  *** не звертаємось до функції, використовуємо діні з local storage
//

// import axios from 'axios'; 
import localStore from './local_storage.js'; 

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;

const API_KEY = '4b14499a7a4d8e1fd5ccb6a9c42a98e1';

export default class ApiServices {
  constructor() {
    this.searchQuery = 'avatar';
    this.page = 1;
    this.id = '';
  }

  async getTrendMovies() {
    const url = `${TREND_URL}?api_key=${API_KEY}&language=en-US&page=${this.page}`;

    await fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        console.log('getTrendMovies:', results);
        localStore.save('trendMovies',results)
        return results;
      })
      .catch(error => console.error('getTrendMovies says:', error));
  }

  async getSearchMovie(searchQuery) {
    const url = `${SEARCH_URL}?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`;

    await fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        localStore.save('searchMovies',results)
        console.log('getSearchMovie:', results);
        return results;
      })
      .catch(error => console.error('getSearchMovie says:', error));
  }

  async getSearchById(id) {
    const url = `${ID_URL}${this.id}?api_key=${API_KEY}`;

    await fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log('getSearchById:', results);
        return results;
      })
      .catch(error => console.error('getSearchById:', error));
  }

  async getGenres(){
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.genres)
        localStore.save('genres',data.genres)

      });
  }
}


// екземпляр класу для тестів
// const apiServices = new ApiServices();

// apiServices.getTrendMovies();
// apiServices.getSearchMovie();
// apiServices.getSearchById();
// apiServices.getGenres();