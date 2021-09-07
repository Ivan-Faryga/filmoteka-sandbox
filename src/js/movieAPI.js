import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmMxOTljNzBjZjIxYzc3YWMwNmI1ZDc0ZDQ0NDU0NSIsInN1YiI6IjYxMzIxZjYxYjNmNmY1MDA0MjhkYjlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MonI6BUoKyf7TbbawP-d-_SIbBRaum0hE8AdHVWLRhM";


function getTrandingMovies(page = 1) {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
}

export { getTrandingMovies };