import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "../../services/api";
import { Link } from "react-router-dom";


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const data = await fetchTrandingMovies();
            setMovies(data);
        };
        getData();
    },[]);

    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                        <p>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default MovieList;