import React from 'react';
import PropTypes from 'prop-types';

function CloseIcon({ cssClasses }) {
  return (
    <div
      type="button"
      className={`${cssClasses} bg-[#d8d8d8] flex items-center justify-center text-2xl rounded-[100%] text-white`}
    >
      X
    </div>
  );
}

CloseIcon.propTypes = {
  cssClasses: PropTypes.string
};
CloseIcon.defaultProps = {
  cssClasses: ''
};
export default CloseIcon;
