import { useState, useEffect } from "react";
import { Player } from "../components/Player";
import { GameOver } from "../components/GameOver";

const gameGrid = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

export function GameScreen() {
  const [playerPos, setPlayerPos] = useState({ row: 3, col: 0 });
  const playerStyle = {
    transform: `translate(${playerPos.col * 6}rem,${playerPos.row * 6}rem)`,
  };

  function throttle(mainFunction, delay) {
    let timerFlag = null;
    return (...args) => {
      if (timerFlag === null) {
        mainFunction(...args);
        timerFlag = setTimeout(() => {
          timerFlag = null;
        }, delay);
      }
    };
  }

  function checkWin(grid) {
    const gridCount = grid.reduce((total, row) => {
      return total + row.reduce((rowTotal, col) => rowTotal + col, 0);
    }, 0);
    if (gridCount === 16 || gridCount === 0) {
      console.log("You won!");
      return true;
    }
    return false;
  }

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
      if (newRow === prevPosition.row && newCol === prevPosition.col) {
        console.log("row and col is the same, not moving");
      } else {
        swapSquare(newRow, newCol);
      }
      return { row: newRow, col: newCol };
    });
  }

  function swapSquare(row, col) {
    gameGrid[row][col] = gameGrid[row][col] === 1 ? 0 : 1;
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

  const throttledKeyDown = throttle(detectKeyDown, 300);
  /*
  useEffect(() => {
    console.log(playerPos);
  }, [playerPos]);
*/

  useEffect(() => {
    document.addEventListener("keydown", throttledKeyDown, true);

    return () => {
      document.removeEventListener("keydown", throttledKeyDown, true);
    };
  }, []);

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      {checkWin(gameGrid) ? <GameOver></GameOver> : null}
      <ol className="relative flex flex-col flex-wrap justify-center">
        <Player style={playerStyle} />
        {gameGrid.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center transition-all">
              {row.map((col, colIndex) => (
                <li
                  key={colIndex}
                  className={`flex h-24 w-24 items-center justify-center bg-contain transition-all duration-300 ease-in-out ${
                    col ? "bg-grass-texture" : "bg-mud-texture"
                  }`}
                ></li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
