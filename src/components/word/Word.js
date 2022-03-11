import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/Game';

function Word({ word }) {
  const { validWord } = useContext(GameContext);
  if (!word) return '';
  return (
    <div>
      {word} {validWord ? 'Valid Word' : 'Invalid'}
    </div>
  );
}
Word.propTypes = {
  word: PropTypes.string.isRequired
};

export default Word;
