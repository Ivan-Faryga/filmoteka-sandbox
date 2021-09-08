import axios from 'axios';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const API_KEY = '22c199c70cf21c77ac06b5d74d444545';

async function getTrandingMovies(page = 1) {
  const response = await axios
    .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`);
    // .then(response => console.log(response.data))
  console.log(response.data);
  return await response.data;
  
}

export { getTrandingMovies };
