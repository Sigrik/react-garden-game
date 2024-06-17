import { LEVELS } from "../levels";
import { Link } from "react-router-dom";
const clickSound = new Audio("/src/assets/click.wav");
function playClick() {
  clickSound.play();
}
export function LevelSelect() {
  return (
    <div className="z-20 flex flex-col items-center">
      <h1 className="mb-24 text-5xl text-white drop-shadow-px-btn">
        LEVEL SELECT
      </h1>
      <ol className="relative grid grid-cols-5 gap-6">
        {LEVELS.map((row, index) => (
          <Link
            to={`/game`}
            onClick={playClick}
            state={{ level: index }}
            className="flex h-32 w-32 items-center justify-center rounded-md bg-indigo-400 text-3xl text-white drop-shadow-px-btn hover:bg-indigo-300"
            key={index}
          >
            {index + 1}
          </Link>
        ))}
      </ol>
    </div>
  );
}
