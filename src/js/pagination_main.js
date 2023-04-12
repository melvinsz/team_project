import { BASE_URL_POSTER, colectionUl, renderMarkur } from './render_cards';
import ApiServices from './services/Api_services';

const apiServices = new ApiServices();

const ref = {
  pagination: document.querySelector('.pagination'),
  btnLeft: document.querySelector('.btn-left'),
  secondLeft: document.querySelector('.second-left'),
  firstLeft: document.querySelector('.first-left'),
  current: document.querySelector('.current'),
  firstRight: document.querySelector('.first-right'),
  secondRight: document.querySelector('.second-right'),
  btnRight: document.querySelector('.btn-right'),
};

ref.btnLeft.addEventListener('click', onSearchLeft);
ref.btnRight.addEventListener('click', onSearchRight);
ref.firstLeft.addEventListener('click', onSearchNumber);
ref.firstRight.addEventListener('click', onSearchNumber);
ref.secondLeft.addEventListener('click', onSearchNumber);
ref.secondRight.addEventListener('click', onSearchNumber);

searchStart();

async function searchStart() {
  ref.pagination.style.display = 'none';

  try {
    const { data } = await apiServices.getTrendMovies();
    console.log(data);
    renderMarkur(data.results);
  } catch (error) {
    console.log(error.message);
    return;
  }
  ref.pagination.style.display = 'flex';
  ref.btnLeft.style.display = 'none';
}

async function onSearchLeft(event) {
  colectionUl.innerHTML = '';
  ref.pagination.style.display = 'none';
  apiServices.page = Number(ref.current.textContent) - 1;
  const query = apiServices.searchQuery;

  if (!query) {
    try {
      const { data } = await apiServices.getTrendMovies();
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  } else {
    try {
      const { data } = await apiServices.getSearchMovie(query);
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  }
  ref.current.textContent = apiServices.page;
  ref.firstLeft.textContent = Number(ref.current.textContent) - 1;
  ref.firstRight.textContent = Number(ref.current.textContent) + 1;
  ref.secondLeft.textContent = Number(ref.current.textContent) - 2;
  ref.secondRight.textContent = Number(ref.current.textContent) + 2;

  ref.pagination.style.display = 'flex';
  ref.firstRight.style.display = 'flex';
  ref.secondRight.style.display = 'flex';
  ref.btnRight.style.display = 'flex';
  ref.firstLeft.style.display = 'flex';
  ref.secondLeft.style.display = 'flex';
  ref.btnLeft.style.display = 'flex';

  if (apiServices.page === 1) {
    ref.btnLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.firstLeft.style.display = 'none';
  }
  else if (apiServices.page === 2) {
    ref.secondLeft.style.display = 'none';
  }
  else if (apiServices.page === apiServices.total_pages - 1) {
    ref.secondRight.style.display = 'none';
  }
}

async function onSearchRight(event) {
  colectionUl.innerHTML = '';
  ref.pagination.style.display = 'none';
  apiServices.page = Number(ref.current.textContent) + 1;
  const query = apiServices.searchQuery;

  if (!query) {
    try {
      const { data } = await apiServices.getTrendMovies();
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  } else {
    try {
      const { data } = await apiServices.getSearchMovie(query);
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  }
  ref.current.textContent = apiServices.page;
  ref.firstLeft.textContent = Number(ref.current.textContent) - 1;
  ref.firstRight.textContent = Number(ref.current.textContent) + 1;
  ref.secondLeft.textContent = Number(ref.current.textContent) - 2;
  ref.secondRight.textContent = Number(ref.current.textContent) + 2;

  ref.pagination.style.display = 'flex';
  ref.firstRight.style.display = 'flex';
  ref.secondRight.style.display = 'flex';
  ref.btnRight.style.display = 'flex';
  ref.firstLeft.style.display = 'flex';
  ref.secondLeft.style.display = 'flex';
  ref.btnLeft.style.display = 'flex';

  if (apiServices.page === apiServices.total_pages) {
    ref.btnRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.firstRight.style.display = 'none';
  }
  else if (apiServices.page === apiServices.total_pages - 1) {
    ref.secondRight.style.display = 'none';
  }
  else if (apiServices.page === 2) {
    ref.secondLeft.style.display = 'none';
  }
}

async function onSearchNumber(event) {
  colectionUl.innerHTML = '';
  ref.pagination.style.display = 'none';
  apiServices.page = Number(event.currentTarget.textContent);
  const query = apiServices.searchQuery;

  if (!query) {
    try {
      const { data } = await apiServices.getTrendMovies();
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  } else {
    try {
      const { data } = await apiServices.getSearchMovie(query);
      console.log(data);
      renderMarkur(data.results);
    } catch (error) {
      console.log(error.message);
      return;
    }
  }
  ref.current.textContent = apiServices.page;
  ref.firstLeft.textContent = Number(ref.current.textContent) - 1;
  ref.firstRight.textContent = Number(ref.current.textContent) + 1;
  ref.secondLeft.textContent = Number(ref.current.textContent) - 2;
  ref.secondRight.textContent = Number(ref.current.textContent) + 2;

  ref.pagination.style.display = 'flex';
  ref.firstRight.style.display = 'flex';
  ref.secondRight.style.display = 'flex';
  ref.btnRight.style.display = 'flex';
  ref.firstLeft.style.display = 'flex';
  ref.secondLeft.style.display = 'flex';
  ref.btnLeft.style.display = 'flex';

  if (apiServices.page === 1) {
    ref.firstLeft.style.display = 'none';
    ref.secondLeft.style.display = 'none';
    ref.btnLeft.style.display = 'none';
  }
  else if (apiServices.page === 2) {
    ref.secondLeft.style.display = 'none';   
  } 
  else if (apiServices.page === apiServices.total_pages) {
    ref.firstRight.style.display = 'none';
    ref.secondRight.style.display = 'none';
    ref.btnRight.style.display = 'none';
  }
  else if (apiServices.page === apiServices.total_pages - 1) {
    ref.secondRight.style.display = 'none';
  }
}
