import React from 'react';

interface Props {
  changeJoke: React.MouseEventHandler;
}

const ChangeButton: React.FC<Props> = ({changeJoke}) => {
  return <button type={'button'} onClick={changeJoke}>New joke</button>
};

export default ChangeButton;