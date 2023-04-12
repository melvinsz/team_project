import { galleryItems } from './services/gallery_items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import imagesTpl from '/src/template/markupTeam.hbs';

let lightbox = new SimpleLightbox('.gallery_item a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
const gallery = document.querySelector('team__gallery');

const openModalBtn = document.querySelector('#openModal');
const backdrop = document.querySelector('#backdrop');

backdrop.style.cssText = `
   display: flex;
   visibility: hidden;
   opacity: 0;
   transition: opacity 300ms ease-in-out;
  `;

const closeModal = e => {
  const target = e.target;

  if (
    target === backdrop ||
    target.closest('#closeModal') ||
    e.code === 'Escape'
  ) {
    backdrop.style.opacity = 0;

    setTimeout(() => {
      backdrop.style.visibility = 'hidden';
    }, 300);

    window.removeEventListener('keydown', closeModal);
  }
};

const openModal = () => {
  backdrop.style.visibility = 'visible';
  backdrop.style.opacity = 1;

  window.addEventListener('keydown', closeModal);

  backdrop.addEventListener('click', modalClick);
  function modalClick(evt) {
    // console.log(evt.target);
    if (evt.target !== backdrop) {
      return;
    } else {
      // addClassBtn(backdrop);
      backdrop.removeEventListener('click', modalClick);
    }
  }
  
  createImgCardsMarkup(galleryItems);
};

openModal();

openModalBtn.addEventListener('click', openModal);
backdrop.addEventListener('click', closeModal);

// function appendImageMarkup(galleryItems) {
//   gallery.insertAdjacentHTML('beforeend', imagesTpl(galleryItems));
//   lightbox.refresh();
// }

const cardsMarkup = createImgCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);



function createImgCardsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, position, name }) => {
      return `
      <li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            alt='${name}'
            loading='lazy'
          />
        </a>
        <div class='img__info'>
          <h2 class='gallery__name'>${name}</h2>
          <p class='gallery__position'>${position}</p>
        </div>
      </li>
      `;
    }).join('');
  
    gallery.innerHTML = markup;
    lightbox.refresh();
}
