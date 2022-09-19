const URL = 'https://api.themoviedb.org';
const API_KEY = '1a277fcd67d620e5e54e2f4f933a05d4';
const page = 1;

export const fetchForADay = () => {
  return fetch(`${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(r => r.json())
    .catch(err => err.message)
}

export const fetchSearch = (query) => {
  return fetch(`${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(r => r.json())
    .catch(err => err.message)
}

export const fetchMovieById = (movieId) => {
  return fetch(`${URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err.message);
}
export const fetchReviews = (movieId) => {
  return fetch(`${URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err.message);
}
export const fetchCast = (movieId) => {
  return fetch(`${URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err.message);
}