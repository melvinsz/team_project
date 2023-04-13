import { galleryTeam } from './gallery-team';

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-team-backdrop'),
  galleryTeam: document.querySelector('.gallery__team'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');

  makeGalleryStudents(galleryTeam);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function makeGalleryStudents(students) {
  const markup = students.reduce(
    (acc, { name, photoPreview, position, photo }) => {
      return (
        acc +
        ` <li class="dev__item">
               <a class="dev__link" href="${photo}">
                <img src="${photoPreview}" alt="${name}" class="dev__img"/>
                  <div class="dev__info">
                    <div class="dev__content">
                        <h2 class="dev__name">${name}</h2>                  
                        <p class="dev__position">${position}</p>
                    </div>
                  </div>
              </a>
            </li>
          `
      );
    },
    ''
  );
  refs.galleryTeam.innerHTML = markup;
}
