import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { LEVELS } from "../levels";
import { Player } from "../components/Player";
import { GameOver } from "../components/GameOver";
const moveSound = new Audio("/src/assets/moveTile.wav");
const winSound = new Audio("/src/assets/win.wav");
const loseSound = new Audio("/src/assets/lose.wav");

export function GameScreen() {
  const location = useLocation();
  const { level } = location.state || {};
  function completeLevel() {
    const completedLevels =
      JSON.parse(localStorage.getItem("completedLevels")) || [];
    if (!completedLevels.includes(level)) {
      completedLevels.push(level);
      localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    }
  }
  const gameGrid = LEVELS[level].grid;
  const levelGameTime = LEVELS[level].time;
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

  const swapSquare = useCallback(
    (row, col) => {
      gameGrid[row][col] = gameGrid[row][col] === 1 ? 0 : 1;
    },
    [gameGrid],
  );

  const movePlayer = useCallback(
    (rowChange, colChange, direction) => {
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
        if (!(newRow === prevPosition.row && newCol === prevPosition.col)) {
          swapSquare(newRow, newCol);
          moveSound.play();
        }
        return { row: newRow, col: newCol, direction: facingDirection };
      });
    },
    [swapSquare],
  );

  const detectKeyDown = useCallback(
    (e) => {
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
    },
    [movePlayer],
  );

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
      clearInterval(gameTimerRef.current);
      completeLevel();
      winSound.play();
      document.removeEventListener(
        "keydown",
        throttledKeyDownRef.current,
        true,
      );
      return true;
    }
    return false;
  }

  useEffect(() => {
    gameTimerRef.current = setInterval(() => {
      setGameTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(gameTimerRef.current);
          setCheckGameOver(true);
          loseSound.play();
          document.removeEventListener(
            "keydown",
            throttledKeyDownRef.current,
            true,
          );
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
  }, [detectKeyDown]);

  return (
    <div className="relative mt-6 flex flex-col flex-wrap items-center justify-center">
      {checkWin(gameGrid) ? (
        <GameOver
          title="LEVEL CLEARED!"
          time={gameTime}
          level={level}
          completed={true}
        ></GameOver>
      ) : null}
      {checkGameOver ? (
        <GameOver
          title="LEVEL FAILED!"
          time={gameTime}
          level={level}
          completed={false}
        ></GameOver>
      ) : null}
      <div className="absolute -top-16 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="bg-hour-glass absolute -left-7 -top-3 h-12 w-12 bg-contain bg-center bg-no-repeat"></div>
          <progress
            className=" h-6 w-48"
            value={gameTime}
            max={levelGameTime}
          />
        </div>
      </div>
      <ol className="animate-tilesPopUp relative z-20 flex flex-col flex-wrap justify-center">
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
        <div className=" bg-tile-edge  h-8 w-full bg-contain bg-no-repeat"></div>
      </ol>
    </div>
  );
}
