import React from 'react';
import PropTypes from 'prop-types';

function ClearWord({ setWord }) {
  const handleClick = () => {
    setWord('');
  };
  return (
    <button type="button" onClick={handleClick}>
      ClearWord
    </button>
  );
}
ClearWord.propTypes = {
  setWord: PropTypes.func.isRequired
};
export default ClearWord;
