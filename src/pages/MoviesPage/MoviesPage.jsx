import { Link, useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query') ?? '';

    const handleSetQuery = (newValue) => {
        setSearchParams({ query: newValue });
    };

    useEffect(() => {
        const getData = async () => {
            if (query) {
                const data = await fetchSearchMovie(query);
                setMovies(data);
            } else {
                setMovies([]);
            }
        };
        getData();
    }, [query]);

    return (
        <div>
            <SearchBar handleSetQuery={handleSetQuery} />
            {query && (
                <ul>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`} state={location}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>No movies found</p>
                    )}
                </ul>
            )}
            <MovieList movies={movies} /> 
        </div>
    );
};

export default MoviesPage;