const gameGrid = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

export default function GameScreen() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <ol className="flex flex-col flex-wrap justify-center">
        {gameGrid.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center">
              {row.map((col, colIndex) =>
                col ? (
                  <li
                    key={colIndex}
                    className="bg-grass-texture flex h-24 w-24 items-center justify-center bg-contain"
                  >
                    Row:{rowIndex}
                    <br /> Col:{colIndex}
                  </li>
                ) : (
                  <li
                    key={colIndex}
                    className="bg-mud-texture flex h-24 w-24 items-center justify-center bg-contain"
                  >
                    Row:{rowIndex}
                    <br /> Col:{colIndex}
                  </li>
                ),
              )}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
