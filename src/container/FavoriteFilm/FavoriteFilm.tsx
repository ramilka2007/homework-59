import React, { useState } from 'react';
import { Film } from '../../../types';
import FilmForm from '../../components/FilmForm/FilmForm';
import FilmCard from '../../components/FilmCard/FilmCard';
import './FavoriteFilm.css';

const FavoriteFilm = () => {
  const [films, setFilms] = useState<Film[]>([
    { id: '1', title: 'Bad Boys (2024)' },
    { id: '2', title: 'Inside out' },
    { id: '3', title: 'Frozen II' },
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
    <div className={'Films'}>
      <div>
        <FilmForm onSubmit={addFilm} />
      </div>
      <div>
        <h2>To watch list:</h2>
        {films.map((film: Film) => (
          <FilmCard
            key={film.id}
            title={film.title}
            deleteFilm={() => removePerson(film.id)}
            changeTitle={(event) => changeTitle(event, film.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteFilm;
