import { Link } from "react-router-dom";

export function MainMenu() {
  return (
    <div className="z-20 flex flex-col items-center gap-y-4">
      <div className="bg-game-logo h-32 w-96 bg-contain bg-center bg-no-repeat"></div>
      <div className="flex flex-col items-center gap-y-4 text-white">
        <Link
          to="/game"
          className=" drop-shadow-px-btn w-full rounded-md bg-indigo-400 p-3 text-center text-3xl hover:bg-indigo-300"
        >
          PLAY
        </Link>
        <Link className="drop-shadow-px-btn w-full rounded-md bg-red-400 p-3 text-center text-3xl hover:bg-red-300">
          SURVIVAL MODE
        </Link>
        <Link className="drop-shadow-px-btn w-full rounded-md bg-amber-400 p-3 text-center text-3xl hover:bg-amber-300">
          HOW TO PLAY
        </Link>
      </div>
    </div>
  );
}
