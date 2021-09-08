import './sass/main.scss';
import galleryMovieTpl from './templates/gallery-movie.hbs';

import { getTrandingMovies } from './js/movieAPI';

console.log(getTrandingMovies);

// documet.addEventListener('DOMContentLoaded', () => );
getTrandingMovies()

const refs = {
  input: documet.querySelector('.js-search-control'),
};

refs.input.addEventListener('input', onInput);

function onInput(e) {}

function createGalleryMarkup(params) {
  const markup = galleryMovieTpl(params);
  const gallery = document.querySelector('.js-gallery-list');
  gallery.insertAdjacentHTML('beforeend', markup);
}

// async function getMovies() {
//   await getTrandingMovies().then(data => createGalleryMarkup(data));
// }

// getMovies();

getTrandingMovies();
