import React, { useEffect } from 'react';

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {

  const [joke, setJoke] = React.useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)

      if (response.ok) {
        const joke = await response.json();
        const newJoke = joke.value;
        setJoke(newJoke);
      }
    }

    void fetchData();
  }, []);


    return (
      <div>
        {joke}
        <button>
          Change
        </button>
      </div>
    );
  };

export default Jokes;