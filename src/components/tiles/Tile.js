import PropTypes from 'prop-types';
import useTile from '../../hooks/useTile';

function Tile({ letter, id }) {
  const {
    selected,
    setSelected,
    handleNeighbors,
    tileRef,
    setWord,
    validWord,
    neighborsTile
  } = useTile();

  const handleClick = () => {
    setSelected(!selected);
    handleNeighbors();
    setWord((prevWord) => prevWord + letter);
  };

  return (
    <div
      ref={tileRef}
      data-id={id}
      className={`${!selected ? 'outline outline-[3px] outline-red-500' : ''}
        bg-gradient-to-t from-orange-900 to-orange-500 flex items-center justify-center rounded-lg overflow-hidden w-16 h-16`}
    >
      <button
        type="button"
        disabled={
          (neighborsTile.length !== 0 && !neighborsTile.includes(id)) ||
          selected
        }
        className={`${validWord && selected ? 'from-lime-900 to-lime-500' : ''}
        ${
          !validWord && selected ? 'from-red-900 to-red-500' : ''
        } bg-gradient-to-t min-w-full min-h-full`}
        onClick={handleClick}
      >
        <small className="drop-shadow font-bold text-white text-3xl">
          {letter}
        </small>
      </button>
    </div>
  );
}

Tile.propTypes = {
  letter: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Tile;
