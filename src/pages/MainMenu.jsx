import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-4xl text-white">REACT GARDEN TILES</h1>
      <div className="flex flex-col items-center gap-y-4 text-white">
        <Link
          to="/game"
          className="w-full rounded-md border-4 border-teal-200 bg-teal-300 p-3 text-center text-3xl hover:bg-teal-200"
        >
          Play
        </Link>
        <Link
          to="/levels"
          className="w-full rounded-md border-4 border-teal-200 bg-teal-300 p-3 text-center text-3xl hover:bg-teal-200"
        >
          Level Select
        </Link>
        <Link className="w-full rounded-md border-4 border-teal-200 bg-teal-300 p-3 text-center text-3xl hover:bg-teal-200">
          Endless Mode
        </Link>
        <Link className="w-full rounded-md border-4 border-teal-200 bg-teal-300 p-3 text-center text-3xl hover:bg-teal-200">
          How to play
        </Link>
      </div>
    </div>
  );
}
