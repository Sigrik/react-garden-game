import { useState, useEffect, useRef } from "react";
import { Player } from "../components/Player";
import { GameOver } from "../components/GameOver";

const gameGrid = [
  [1, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
];

const levelGameTime = 20;

export function GameScreen() {
  const [playerPos, setPlayerPos] = useState({
    row: 3,
    col: 0,
    direction: "Down",
  });
  const [gameTime, setGameTime] = useState(levelGameTime);
  const [checkGameOver, setCheckGameOver] = useState(false);
  const gameTimerRef = useRef(null);
  const throttledKeyDownRef = useRef(null);
  const playerStyle = {
    transform: `translate(${playerPos.col * 6}rem,${playerPos.row * 6}rem)`,
    background: `url('/src/assets/player${playerPos.direction}.png') no-repeat center / contain`,
  };

  const detectKeyDown = (e) => {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        movePlayer(-1, 0, "Up");
        break;
      case "s":
      case "ArrowDown":
        movePlayer(+1, 0, "Down");
        break;
      case "a":
      case "ArrowLeft":
        movePlayer(0, -1, "Left");
        break;
      case "d":
      case "ArrowRight":
        movePlayer(0, +1, "Right");
    }
  };

  const throttledKeyDown = throttle(detectKeyDown, 700);

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
      clearInterval(gameTimerRef.current);
      document.removeEventListener(
        "keydown",
        throttledKeyDownRef.current,
        true,
      );
      return true;
    }
    return false;
  }

  function movePlayer(rowChange, colChange, direction) {
    setPlayerPos((prevPosition) => {
      let newRow = prevPosition.row + rowChange;
      let newCol = prevPosition.col + colChange;
      let facingDirection = direction;
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
      return { row: newRow, col: newCol, direction: facingDirection };
    });
  }

  function swapSquare(row, col) {
    gameGrid[row][col] = gameGrid[row][col] === 1 ? 0 : 1;
  }

  /*
  useEffect(() => {
    console.log(playerPos);
  }, [playerPos]);
*/

  useEffect(() => {
    gameTimerRef.current = setInterval(() => {
      setGameTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(gameTimerRef.current);
          setCheckGameOver(true);
          document.removeEventListener(
            "keydown",
            throttledKeyDownRef.current,
            true,
          );
          console.log("Game Over time's up!");
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(gameTimerRef.current);
  }, []);

  useEffect(() => {
    throttledKeyDownRef.current = throttle(detectKeyDown, 700);
    document.addEventListener("keydown", throttledKeyDownRef.current, true);

    return () => {
      document.removeEventListener(
        "keydown",
        throttledKeyDownRef.current,
        true,
      );
    };
  }, []);

  return (
    <div className="relative flex flex-col flex-wrap items-center justify-center">
      {checkWin(gameGrid) ? <GameOver title="You Won!"></GameOver> : null}
      {checkGameOver ? <GameOver title="You Lost"></GameOver> : null}
      <div className="absolute -top-20 flex flex-col items-center justify-center">
        <div>{gameTime}</div>
        <progress
          className="transition-all"
          value={gameTime}
          max={levelGameTime}
        />
      </div>
      <ol className="relative flex flex-col flex-wrap justify-center">
        <Player style={playerStyle} />
        {gameGrid.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="flex flex-wrap justify-center bg-amber-100">
              {row.map((col, colIndex) => (
                <li
                  key={colIndex}
                  className={`flex h-24 w-24 items-center justify-center bg-contain ${
                    col
                      ? " animate-tileTransitionGrass"
                      : " animate-tileTransitionMud"
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
