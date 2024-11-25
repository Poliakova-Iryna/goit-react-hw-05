import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query') ?? '';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSetQuery = (newValue) => {
        setSearchParams({ query: newValue });
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchSearchMovie(query);
                setMovies(data);
                setLoading(false);
            } catch {
                setMovies([]);
                setError('Ooops, something went wrong');
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [query]);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <SearchBar handleSetQuery={handleSetQuery} />
            <MovieList movies={movies} /> 
        </div>
    );
};

export default MoviesPage;