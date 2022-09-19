import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
import { useParams } from 'react-router-dom';
import { CastList, ActorCard, NoFoto, ActorFotoFrame } from './Cast-styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (cast) return;
  movieApi.fetchCast(movieId).then(data => setCast(data.cast));
  }, [movieId, cast]);

    return (
        <CastList>
            {cast && cast.map(el => (
                <ActorCard key={el.id}>
                    <ActorFotoFrame>
                        {el.profile_path ?
                            <img src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`} loading="lazy" alt={el.name} /> :
                            <NoFoto>no image</NoFoto>}
                    </ActorFotoFrame>
                    <p>{el.name}</p>
                    <p>{el.character}</p>
                </ActorCard>
            ))}
        </CastList>
    )
}