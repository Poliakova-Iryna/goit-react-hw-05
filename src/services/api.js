import axios from 'axios';

const trandingURL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGFiZGYxZTViMzY5MWFiMWM2YjdmNGQyMDc5NTY0MyIsIm5iZiI6MTczMjI4NTk5My40MzUyMzEsInN1YiI6IjY3NDA4NmUyODMzN2FjYWUwNzZkZGFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1JCzi8FsQ1SiF5X65wGvBLenEHgsowrWeWBT2YOz3Jc',
      accept: 'application/json'
    }
};

export const fetchTrandingMovies = async () => {
 const { data } = await axios.get(trandingURL, options);
 return data.results;
};

export const fetchMovieById = async (movieId) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1dabdf1e5b3691ab1c6b7f4d20795643&language=en-US`, options);
    return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get (`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return data.cast;
}

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return data.results;
}

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
  return data.results;
}