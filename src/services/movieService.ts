const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN || '';

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.results;
};