import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const clickSound = new Audio("/src/assets/click.wav");
function playClick() {
  clickSound.play();
}
export function GameOver(props) {
  return (
    <Modal zValue="30">
      <h1 className="text-5xl drop-shadow-px-btn">{props.title}</h1>
      <p className="text-2xl">Time left: {props.time} seconds</p>
      <div className="flex flex-row gap-4">
        <Link
          onClick={playClick}
          className="rounded-md bg-amber-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-amber-300"
        >
          Retry
        </Link>
        <Link
          to="/"
          onClick={playClick}
          className="rounded-md bg-red-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-red-300"
        >
          Menu
        </Link>
        <Link
          onClick={playClick}
          className="rounded-md bg-indigo-400 px-10 py-4 text-center text-2xl drop-shadow-px-btn hover:bg-indigo-300"
        >
          Next
        </Link>
      </div>
    </Modal>
  );
}

GameOver.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};
