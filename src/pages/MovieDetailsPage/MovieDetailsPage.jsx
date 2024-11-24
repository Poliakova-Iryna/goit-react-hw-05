import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMovieById(movieId);
            setMovie(data);
        };
        getData();
    }, [movieId]);

    if(!movie) {
        return <p>Loading</p>
    };

    const { title, overview, poster_path, vote_average, genres, release_date } = movie;
    const userScore = Math.round(vote_average * 10);
    const releaseYear = release_date.substring(0,4);

    return (
        <div className={s.container}>
           <Link to={location?.state?.from || '/movies'}>Go back</Link>
           <div className={s.movie}>
            <div className={s.wrapper}>
                <img 
                 src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                 alt={title} />
            </div>
            <div className={s.box}>
                <h2 className={s.title}>{title}({releaseYear})</h2>
                <p className={s.description}>{userScore}%</p>
                <h3 className={s.subtitle}>Overview</h3>
                <p className={s.description}>{overview}</p>
                <h3 className={s.subtitle}>Genres</h3>
                <ul className={s.genrelist}>
                    {genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
           </div>
           <div className={s.addcontainer}>
            <p>Additional information:</p>
            <ul className={s.info}>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </ul>
           </div>
           <Suspense fallback={<h2>Loading, please wait</h2>}>
               <Outlet />
           </Suspense>
        </div>
    );
};

export default MovieDetailsPage;