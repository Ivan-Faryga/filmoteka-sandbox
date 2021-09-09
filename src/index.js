import './sass/main.scss';
import galleryMovieTpl from './templates/gallery-movie.hbs';
import { getTrandingMovies } from './js/movieAPI';

// console.log(getTrandingMovies);

// documet.addEventListener('DOMContentLoaded', () => );
// getTrandingMovies();

// const refs = {
//   input: documet.querySelector('.js-search-control'),
// };

document.addEventListener('DOMContentLoaded', () => {
  renderTrending(1);
});

async function renderTrending(page = 1) {
  // refs.movieGallerySection.dataset.page = 'trending';
  try {
    // if (page === 1) {
    //   refs.galleryList.innerHTML = '';
    // }
    const trends = await getTrandingMovies(page).then(data => {
      console.log(data.results);
      return data.results;
    });

    createGalleryMarkup(trends);
  } catch (e) {
    console.log('this is error:', e);
  }
}

// refs.input.addEventListener('input', onInput);

function onInput(e) {}

function createGalleryMarkup(params) {
  const markup = galleryMovieTpl(params);
  const gallery = document.querySelector('.js-gallery-list');
  gallery.insertAdjacentHTML('beforeend', markup);
}
