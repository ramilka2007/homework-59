import React from 'react';
import { Film, newFilm } from '../../../types';

interface FilmFormProps {
  onSubmit: (film: Film) => void;
}

const FilmForm: React.FC<FilmFormProps> = ({ onSubmit }) => {
  const [newFilm, setNewFilm] = React.useState<newFilm>({ title: '' });

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...newFilm,
    });

    setNewFilm({
      title: '',
    });
  };

  const changeFilm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewFilm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control"
          onChange={changeFilm}
          value={newFilm.title}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default FilmForm;
