import { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../../context/GameProvider';

function Word({ word }) {
  const { validWord, neighborsTile } = useContext(GameContext);
  // if (!word) return '';
  return (
    <div className="border-[3px] justify-between flex items-center min-h-[70px] p-4 self-end">
      {JSON.stringify(neighborsTile)}
      <span
        className={`font-bold text-2xl tracking-[.25em]
        ${validWord ? 'text-[#7ed321]' : 'text-red-700'}`}
      >
        {word}
      </span>

      {word.length > 0 ? (
        <small
          className={`${
            validWord ? 'text-[#7ed321] opacity-50' : 'text-red-300'
          }`}
        >
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
