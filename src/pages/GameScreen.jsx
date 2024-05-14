import { Player } from "../components/Player";
import { useState, useEffect } from "react";

const gameGrid = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

export default function GameScreen() {
  const [playerPos, setPlayerPos] = useState({ row: 3, col: 0 });

  function movePlayer(rowChange, colChange) {
    setPlayerPos((prevPosition) => {
      let newRow = prevPosition.row + rowChange;
      let newCol = prevPosition.col + colChange;

      if (newRow <= 0) {
        newRow = 0;
      } else if (newRow >= 3) {
        newRow = 3;
      }

      if (newCol <= 0) {
        newCol = 0;
      } else if (newCol >= 3) {
        newCol = 3;
      }

      return { row: newRow, col: newCol };
    });
  }

  const detectKeyDown = (e) => {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        movePlayer(-1, 0);
        break;
      case "s":
      case "ArrowDown":
        movePlayer(+1, 0);
        break;
      case "a":
      case "ArrowLeft":
        movePlayer(0, -1);
        break;
      case "d":
      case "ArrowRight":
        movePlayer(0, +1);
    }
  };

  useEffect(() => {
    console.log(playerPos); // Logs playerPos whenever it changes
  }, [playerPos]);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);

    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <ol className="flex flex-col flex-wrap justify-center">
        <Player />
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
