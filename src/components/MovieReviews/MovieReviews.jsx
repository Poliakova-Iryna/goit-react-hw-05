import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
        try {
            const data = await fetchMovieReviews(movieId);
            if (data && data.length > 0) {
                setReviews(data);
                setLoading(false);
            } else {
                setReviews([]);
            }
        } catch {
            setError('Failed to load reviews');
        } finally {
            setLoading(false);
        }
    };
    getData();
  }, [movieId])

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  if(reviews.length === 0) {
    return <p>No reviews yet</p>
  }

    return (
        <div>
            <ul className={s.list}>
                {reviews.map(({author, id, content}) => (
                    <li key={id}>
                        <h4 className={s.author}>{author}</h4>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieReviews;