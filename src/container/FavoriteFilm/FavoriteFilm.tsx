import React, { useState } from 'react';
import { Film } from '../../../types';
import FilmForm from '../../components/FilmForm/FilmForm';
import FilmCard from '../../components/FilmCard/FilmCard';

const FavoriteFilm = () => {
  const [films, setFilms] = useState<Film[]>([
    { id: '1', title: 'Movie name #1' },
    { id: '2', title: 'Movie name #2' },
    { id: '3', title: 'Movie name #3' },
  ]);

  const addFilm = (film: Film) => {
    setFilms((prev) => [...prev, film]);
  };

  const changeTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    setFilms((prevState) => {
      return prevState.map((film) => {
        if (film.id === id) {
          return { ...film, title: event.target.value };
        }

        return film;
      });
    });
  };

  const removePerson = (id: string) => {
    setFilms((prev) => {
      return prev.filter((film) => film.id !== id);
    });
  };

  return (
    <>
      <FilmForm onSubmit={addFilm} />
      {films.map((film: Film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          deleteFilm={() => removePerson(film.id)}
          changeTitle={(event) => changeTitle(event, film.id)}
        />
      ))}
    </>
  );
};

export default FavoriteFilm;
