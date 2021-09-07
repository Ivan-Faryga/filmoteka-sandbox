import './sass/main.scss';

import { getTrandingMovies } from "./js/movieAPI";

getTrandingMovies();

const refs = {
    input: documet.querySelector(".js-search-control"),
}

refs.input.addEventListener("input", onInput);

function onInput(e) {
    
}

function createGalleryMarkup(params) {
    
}