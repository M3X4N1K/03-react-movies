import axios from 'axios';
import type { Movie } from '../types/movie';

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Використовуємо демо токен для тестування
// В реальному проєкті замініть на: import.meta.env.VITE_TMDB_TOKEN
const DEMO_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjE0M2Y3OTFmMzZhM2M4MmY0NzZkYzQ4NGI1Yzg0ZSIsIm5iZiI6MTczMTc3MDczNi45MjU5NzE2LCJzdWIiOiI2NzM3MDJkMDJiZjMyNjgyZjY0NTU0ZTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.F3FstrKvjMZqBoUi_VHAZrqjxPqVbnh6hYZJqkJmEQg';

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