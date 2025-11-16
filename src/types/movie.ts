interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}