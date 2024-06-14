import React, { useEffect } from 'react';

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [joke, setJoke] = React.useState<string>();
  const [newJoke, setNewJoke] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const joke = await response.json();
      const newJoke = joke.value;

      setJoke(newJoke);
    }
  };

    if (newJoke) {
      setNewJoke(false);
      void fetchData();
    }
  }, [newJoke]);


  return (
    <div>
      {joke}
      <button onClick={() => setNewJoke((prev) => !prev)}>Change</button>
    </div>
  );
};

export default Jokes;
