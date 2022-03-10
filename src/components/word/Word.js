import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Word({ word, isValid }) {
  if (!word) return '';
  return (
    <div>
      {word} {isValid ? 'Valid Word' : 'Invalid'}
    </div>
  );
}
Word.propTypes = {
  word: PropTypes.string.isRequired,
  isValid: PropTypes.bool
};
Word.defaultProps = {
  isValid: false
};

export default Word;
