//   створити імпорт:
//   import getGenres from './connect_genres.js';

//   'genre_ids' - властивість об'екту фильма, містить індекси жанрів
//
//   Створити змінну moviesGenre - як значення тернарного оператора.
//   Перевіряєм наявність genre_ids, як що true - передаеться як параметр у функцію
//   getGenres(genre_ids), повертаеться  строка с жанрами.
//
//   const moviesGenre = genre_ids
//   ? getGenres(genre_ids)
//   : 'Unknown';
//
//   '${moviesGenre}'  - додати у розмітку рендера.

import localStore from './local_storage.js';
import ApiServices from './Api_services';
const apiServices = new ApiServices();

export default function getGenres(genre_ids) {
  const massiveGenres = localStore.load('genres');
  if (!massiveGenres) {
    apiServices.getGenres();
  }

  const arr = [];

  for (const value of massiveGenres) {
    if (genre_ids === 'N/A' || genre_ids.length === 0) {
      arr.push('Other');
      break;
    } else if (genre_ids.includes(value.id)) {
      arr.push(value.name);
    }
  }

  return arr.join(', ');
}

