export const refs = {
    btnWatched: document.querySelector('#btnWatched'),
    btnQueued: document.querySelector('#btnQueued'),
  };

  refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);

function clickOnBtnQueuedHandler() {
    refs.btnWatched.classList.remove('active-btn');
    refs.btnQueued.classList.add('active-btn');
    
  }
  
  function clickOnBtnWatchedHandler() {
    refs.btnQueued.classList.remove('active-btn');
    refs.btnWatched.classList.add('active-btn');
    
  }
