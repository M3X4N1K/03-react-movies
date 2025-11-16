const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      alert('Please enter your search query.');
      return;
    }

    onSubmit(trimmedQuery);
    setQuery('');
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a
          style={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <div style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          <button style={styles.button} type="button" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};