import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const imgMarkup = createImgMarkup(galleryItems);

function createImgMarkup(item) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__link" 
      href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"/>
    </a>`;
    })
    .join('');
}
refs.gallery.insertAdjacentHTML('beforeend', imgMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
