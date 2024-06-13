import { Modal } from "./Modal";
import { Link } from "react-router-dom";
export function GameOver(props) {
  return (
    <Modal zValue="30">
      <h1 className="text-5xl drop-shadow-px-btn">{props.title}</h1>
      <p className="text-2xl">Time left: {props.time} seconds</p>
      <div className="flex flex-row gap-4">
        <Link className="rounded-md bg-amber-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-amber-300">
          Retry
        </Link>
        <Link
          to="/"
          className="rounded-md bg-red-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-red-300"
        >
          Menu
        </Link>
        <Link className="rounded-md bg-indigo-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-indigo-300">
          Next
        </Link>
      </div>
    </Modal>
  );
}
