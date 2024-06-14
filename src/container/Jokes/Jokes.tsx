import React, { useEffect } from 'react';
import JokeContent from '../../components/JokeContent/JokeContent';
import ChangeButton from '../../components/ChangeButton/ChangeButton';

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [jokeArray, setJokeArray] = React.useState<string>('');
  const [newJoke, setNewJoke] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const joke = await response.json();
      const newJoke = joke.value;

      setJokeArray(newJoke);
    }
  };

    if (newJoke) {
      setNewJoke(false);
      void fetchData();
    }
  }, [newJoke]);

  return (
    <div>
      <h2 style={{marginBottom: 40}}>Chuck Norris' joke:</h2>
      <div style={{'height': '100px'}}>
        <JokeContent joke={jokeArray}/>
      </div>
      <div>
        <ChangeButton changeJoke={() => setNewJoke((prev) => !prev)}/>
      </div>
    </div>
  );
};

export default Jokes;
