const removeInvalidTilesArr = (arr) =>
  arr.filter((item) => item >= 0 && item <= 15 && item !== null);

const tileValue = (tileRow, tileCol) => tileRow * 4 + tileCol;

const tileCoord = (tilePos) => {
  const tileRow = Math.floor(tilePos / 4);
  const tileCol = tilePos % 4;
  return [tileRow, tileCol];
};

const getNeighbors = (tilePos, tileRow, tileCol) => {
  const neighbors = [];
  const prevRow = tileRow - 1;
  const nextRow = tileRow + 1;

  const prevRowColValue = tileValue(prevRow, tileCol);
  const NextRowColValue = tileValue(nextRow, tileCol);

  neighbors.push(prevRowColValue, NextRowColValue);

  if (tileCol === 0)
    neighbors.push(prevRowColValue + 1, tilePos + 1, NextRowColValue + 1);

  if (tileCol === 3)
    neighbors.push(prevRowColValue - 1, tilePos - 1, NextRowColValue - 1);

  if (tileCol !== 0 && tileCol !== 3) {
    neighbors.push(
      prevRowColValue - 1,
      tilePos + 1,
      tilePos - 1,
      prevRowColValue + 1,
      NextRowColValue - 1,
      NextRowColValue + 1
    );
  }
  return removeInvalidTilesArr(neighbors).sort((a, b) => a - b);
};

const tileNeighbors = (tilePos) => {
  const [tileRow, tileCol] = tileCoord(tilePos);

  const neighbors = getNeighbors(
    Number(tilePos),
    Number(tileRow),
    Number(tileCol)
  );
  return neighbors;
};

export default tileNeighbors;
