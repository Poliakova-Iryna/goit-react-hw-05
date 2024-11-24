import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrandingMovies } from "../../services/api"; 
const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetchTrandingMovies();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Trending today</h2>
            <MovieList movies={movies} /> 
        </div>
    );
};

export default HomePage;