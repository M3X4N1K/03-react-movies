// src/services/movieService.ts
// Сервіс для виконання HTTP-запитів до TMDB API

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

  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=false&language=en-US&page=1`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: TMDBResponse = await response.json();
  return data.results;
};