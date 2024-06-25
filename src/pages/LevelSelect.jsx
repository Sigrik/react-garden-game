import { useState, useEffect } from "react";
import { LEVELS } from "../levels";
import { Link } from "react-router-dom";
const clickSound = new Audio("/src/assets/click.wav");
function playClick() {
  clickSound.play();
}

export function LevelSelect() {
  const [completedLevels, setCompletedLevels] = useState(
    JSON.parse(localStorage.getItem("completedLevels")) || [],
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLevels(
        JSON.parse(localStorage.getItem("completedLevels")) || [],
      );
      console.log("detected reset");
    };

    window.addEventListener("completedLevelsReset", handleStorageChange);

    return () => {
      window.removeEventListener("completedLevelsReset", handleStorageChange);
    };
  }, []);

  return (
    <div className="z-20 flex flex-col items-center">
      <h1 className="mb-24 text-5xl text-white drop-shadow-px-btn">
        LEVEL SELECT
      </h1>
      <ol className="relative grid grid-cols-5 gap-6">
        {LEVELS.map((row, index) => (
          <Link
            to={`${completedLevels.includes(index - 1) ? "/game" : ""}`}
            onClick={playClick}
            state={{ level: index }}
            className={`flex h-32 w-32 items-center ${completedLevels.includes(index) ? "bg-green-400 hover:bg-green-300" : completedLevels.includes(index - 1) ? "bg-indigo-400 hover:bg-indigo-300" : "cursor-default bg-gray-400 hover:bg-gray-400"} justify-center rounded-md text-3xl text-white drop-shadow-px-btn`}
            key={index}
          >
            {index + 1}
          </Link>
        ))}
      </ol>
    </div>
  );
}
