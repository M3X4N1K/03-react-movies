const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  return (
    <ul style={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)} style={styles.gridItem}>
          <div style={styles.card}>
            <img
              style={styles.image}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/500x750?text=No+Image'
              }
              alt={movie.title}
              loading="lazy"
            />
            <h2 style={styles.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};