import { LEVELS } from "../levels";

export function LevelSelect() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="drop-shadow-px-btn mb-24 text-5xl text-white">
        LEVEL SELECT
      </h1>
      <ol className="relative grid grid-cols-5 gap-6">
        {LEVELS.map((row, index) => (
          <li
            className="drop-shadow-px-btn flex h-24 w-24 items-center justify-center rounded-md bg-indigo-400 text-3xl text-white hover:bg-indigo-300"
            key={index}
          >
            {index + 1}
          </li>
        ))}
      </ol>
    </div>
  );
}
