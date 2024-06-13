import { Link } from "react-router-dom";

export function MainMenu() {
  return (
    <div className="z-20 flex flex-col items-center gap-y-4">
      <div className="h-32 w-96 bg-game-logo bg-contain bg-center bg-no-repeat"></div>
      <div className="flex flex-col items-center gap-y-4 text-white">
        <Link
          to="/levels"
          className=" w-full rounded-md bg-indigo-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-indigo-300"
        >
          PLAY
        </Link>
        <Link className="w-full rounded-md bg-red-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-red-300">
          SURVIVAL MODE
        </Link>
        <Link className="w-full rounded-md bg-amber-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-amber-300">
          HOW TO PLAY
        </Link>
      </div>
    </div>
  );
}
