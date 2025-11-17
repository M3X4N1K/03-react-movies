

import axios from 'axios';
import type { Movie } from '../types/movie';

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Оновлений робочий токен для TMDB API
const DEMO_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzYzMzEyZTEzNjEzMDU5ZWM2MTJmOGFmNWI4ZmI0NiIsIm5iZiI6MTczMTg2MTk3My4wMDM3NzI3LCJzdWIiOiI2NzM4MzgyZGVhOTIwMDFiN2IxMjM5NzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C0KN_2RNgHhNXpJ3t5w7sLlKcHvB5r7VhNjQqJk8rZo';

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN || DEMO_TOKEN;

  const response = await axios.get<TMDBResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    }
  );

  return response.data.results;
};