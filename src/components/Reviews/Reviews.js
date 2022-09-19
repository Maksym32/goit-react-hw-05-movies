import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
import { useParams } from 'react-router-dom';
import { ReviewsItem, Reviewer } from './Reviews-styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (reviews) return;
    movieApi.fetchReviews(movieId).then(data => setReviews(data.results));
  }, [movieId, reviews]);

  return (
    <>
      {reviews && 
      <>
        {reviews.length === 0 ? <p>No any reviews here</p> :
        <ul>
          {reviews.map(el => (
              <ReviewsItem key={el.id}>
                <Reviewer>{el.author}</Reviewer>
                <p>{el.content}</p>
              </ReviewsItem>
            ))
          }
        </ul>
        }
      </>
      }
    </>
  )
}