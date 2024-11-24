import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from './MovieCast.module.css';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
                setLoading(false);
            } catch {
                setError('Failed to load data');
                setLoading(false);
            }
        };
        getData();
    }, [movieId]);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    if(cast.length === 0) {
        return <p>No actors found</p>
    }

    return (
        <div>
            <ul className={s.list}>
                {cast.map(({ name, profile_path, character, id}) => 
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                         alt={name}
                    />
                    <h4>{name}</h4>
                    <p>{character}</p>
                </li>)}
            </ul>
        </div>
    );
};

export default MovieCast;