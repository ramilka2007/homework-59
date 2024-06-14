import React from 'react';

interface JokeContentProps {
  joke: string;
}

const JokeContent: React.FC<JokeContentProps> = ({ joke }) => {
  return <h3>{joke}</h3>;
};

export default JokeContent;
