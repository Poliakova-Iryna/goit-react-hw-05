import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css';

const MovieList = ({ movies }) => { 
   const location = useLocation();

    return (
        <div>
            <ul className={s.wrapper}>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>
                        <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        />
                        <p className={s.title}>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;