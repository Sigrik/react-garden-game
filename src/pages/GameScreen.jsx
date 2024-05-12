const gameGrid = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

export default function GameScreen() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <ol className="flex flex-col flex-wrap justify-center">
        {gameGrid.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center">
              {row.map((col, colIndex) => (
                <li
                  key={colIndex}
                  className="bg-grass-texture flex h-24 w-24 items-center justify-center bg-contain"
                >
                  Row:{rowIndex}
                  <br /> Col:{colIndex}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
