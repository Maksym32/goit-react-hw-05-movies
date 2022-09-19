import { Link, MoviesBox, MoviesTitle, MoviesItem } from './Movies-styled';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function MoviesList({ movies, title, path }) {
    const location = useLocation();
    return (
        <MoviesBox>
            <MoviesTitle>{title}</MoviesTitle>
            {movies.map(el => (
                <MoviesItem key={el.id}>
                    <Link to={`${path}${el.id}`} state={{ from: location }}>{el.title}</Link>
                </MoviesItem>
            ))}
        </MoviesBox>
    )
}
MoviesList.propTypes = {
    movies: PropTypes.array,
    tytle: PropTypes.string,
    path: PropTypes.string
}