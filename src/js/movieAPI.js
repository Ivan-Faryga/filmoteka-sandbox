import axios from 'axios';

const API_KEY = '22c199c70cf21c77ac06b5d74d444545';

function getTrandingMovies(page = 1) {
  axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
    .then(response => console.log(response));

  //   return response.data;
}

export { getTrandingMovies };
