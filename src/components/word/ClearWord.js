import React from 'react';
import PropTypes from 'prop-types';

function ClearWord({ clearWord }) {
  const handleClick = () => {
    clearWord();
  };
  return (
    <button type="button" onClick={handleClick}>
      ClearWord
    </button>
  );
}
ClearWord.propTypes = {
  clearWord: PropTypes.func.isRequired
};
export default ClearWord;
