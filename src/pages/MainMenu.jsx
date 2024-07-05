import { useState } from "react";
import { Link } from "react-router-dom";
import { Tutorial } from "../components/Tutorial";
const clickSound = new Audio("/src/assets/click.wav");
function playClick() {
  clickSound.play();
}
export function MainMenu() {
  const [showTutorial, setShowTutorial] = useState(false);
  function handleShowTutorial() {
    setShowTutorial(!showTutorial);
    playClick();
  }
  return (
    <div className="z-40 flex flex-col items-center gap-y-4">
      {showTutorial && <Tutorial onClose={handleShowTutorial} />}
      <div className="h-32 w-[34rem] bg-game-logo bg-contain bg-center bg-no-repeat"></div>
      <div className="flex flex-col items-center gap-y-4 text-white">
        <Link
          to="/levels"
          onClick={playClick}
          className=" w-full rounded-md bg-indigo-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-indigo-300"
        >
          PLAY
        </Link>
        <Link
          onClick={playClick}
          className="w-full rounded-md bg-red-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-red-300"
        >
          SURVIVAL MODE
        </Link>
        <button
          onClick={handleShowTutorial}
          className="w-full rounded-md bg-amber-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-amber-300"
        >
          HOW TO PLAY
        </button>
      </div>
    </div>
  );
}
