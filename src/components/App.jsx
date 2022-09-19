import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./Movies/Movies'));
const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const TodayMovies = lazy(() => import('./TodayMovies/TodayMovies'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<TodayMovies />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews /> }/>
          </Route>  
        </Route>
        <Route path="*" element={<NotFound/>}></Route>  
      </Routes>
      </Suspense>
    </div>
  );
};
