import PropTypes from 'prop-types';
import CloseIcon from '../UI/CloseIcon';

function ClearWord({ clearWord }) {
  const handleClick = () => {
    clearWord();
  };
  return (
    <button
      type="button"
      className="grid grid-cols-[1fr_max(48px)] self-start justify-self-end items-center justify-end"
      onClick={handleClick}
    >
      <span className="font-semibold text-[#d8d8d8] mr-2">clear word</span>
      <CloseIcon cssClasses="font-thin justify-self-end  w-10 h-10" />
    </button>
  );
}
ClearWord.propTypes = {
  clearWord: PropTypes.func.isRequired
};
export default ClearWord;
