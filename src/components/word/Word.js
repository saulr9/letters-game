import { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/Game';

function Word({ word }) {
  const { validWord } = useContext(GameContext);
  // if (!word) return '';
  return (
    <div className="border-[3px] justify-between flex items-center min-h-[70px] p-4 self-end">
      <span
        className={`font-bold text-2xl tracking-[.25em]
        ${validWord ? 'text-green-500' : 'text-red-700'}`}
      >
        {word}
      </span>

      {word.length > 0 ? (
        <small className={`${validWord ? 'text-green-300' : 'text-red-300'}`}>
          {validWord ? 'Valid' : 'Invalid'}
        </small>
      ) : (
        ''
      )}
    </div>
  );
}
Word.propTypes = {
  word: PropTypes.string.isRequired
};

export default Word;
