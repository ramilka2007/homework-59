import './App.css';
import FavoriteFilm from './container/FavoriteFilm/FavoriteFilm';
import Jokes from './container/Jokes/Jokes';

const App = () => {
  return (
    <>
      <h1>Level 1</h1>
      <FavoriteFilm />
      <hr />
      <h1>Level 2</h1>
      <Jokes />
    </>
  );
};

export default App;
