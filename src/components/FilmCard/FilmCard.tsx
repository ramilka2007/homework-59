import React from 'react';

interface FilmProps {
  title: string;
  deleteFilm: React.MouseEventHandler;
  changeTitle: React.ChangeEventHandler<HTMLInputElement>;
}

const FilmCard: React.FC<FilmProps> = React.memo(
  ({ title, deleteFilm, changeTitle}) => {

    return (
      <div className="card">
        <input
          type={'text'}
          name={'title'}
          value={title}
          onChange={changeTitle}
        />
        <button onClick={deleteFilm}>X</button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return nextProps.title === prevProps.title;
  },
);

export default FilmCard;
