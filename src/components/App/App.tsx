export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(false);
    setMovies([]);

    try {
      const results = await fetchMovies(query);
      
      if (results.length === 0) {
        alert('No movies found for your request.');
      }
      
      setMovies(results);
    } catch (err) {
      setError(true);
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      <main style={styles.main}>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} onSelect={handleMovieSelect} />
        )}
      </main>
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
}