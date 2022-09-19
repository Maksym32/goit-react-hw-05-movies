import { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import * as APIfetch from '../APIfetch/APIfetch';
import { MovieDetailsBlock, MovieDetailsInfo, GoBackBtn, } from './MovieDetails-styled';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        APIfetch.fetchMovieById(movieId).then(setMovie)
    }, [movieId, setMovie]);

    const onGoBack = () => {
        navigate(location?.state?.from ?? "/");
    }
    
    return (
        <>{ movie && 
            <>
            <GoBackBtn type="button" onClick={onGoBack}>Go back</GoBackBtn>
            <MovieDetailsBlock>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title} width="240"></img>
                <MovieDetailsInfo>
                    <h3>{movie.title} ( {movie.release_date.slice(0, 4)} )</h3>
                    <p>User Score: {movie.vote_average}</p>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <p>{movie.genres && movie.genres.map(el => el.name).join(", ")}</p>
                </MovieDetailsInfo>
            </MovieDetailsBlock>
            <hr />
                <h3>AdditionalInfo</h3>
                <NavLink to="cast" state={location.state}>Cast</NavLink><br/>
                <NavLink to="reviews" state={location.state}>Reviews</NavLink>
            <hr />
            <Outlet />
            </>
        }</>
        
    )
}