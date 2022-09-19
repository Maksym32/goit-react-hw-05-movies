import { useState, useEffect } from "react";
import * as movieApi from '../APIfetch/APIfetch';
import { useSearchParams } from 'react-router-dom';
import toastr from "toastr";
import MoviesList from "./MoviesList";
import { Form } from './Movies-styled'
import { useForm } from 'react-hook-form';

toastr.options = {
    "progressBar": true,
    "positionClass": "toast-top-left",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
}

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchName, setSearchName] = useState(() => searchParams.get("search") ?? "" );
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!searchName.trim()) return;
    movieApi.fetchSearch(searchName)
      .then(data => {
        if (!data.results) {
          toastr.error(data); // ошибка сети
          return;
        }
        if (data.total_results === 0) {
          toastr.error("No results"); // нет результата
          setMovies();
          return;
        }
      setMovies(data.results);
      setSearchParams({ search: searchName });
  })
  }, [searchName, setSearchParams]);
  
  return (
    <>
      <Form onSubmit={handleSubmit(value => setSearchName(value.searchName))}>
        <label>
          <input type="text" {...register("searchName")}></input>
        </label>
        <button type="submit">Search</button>  
      </Form>
      {movies &&
        <MoviesList
          title="Searched movies"
          movies={movies}
          path={''} />
      }
      </>
  )
}