import { Modal } from "./Modal";
import PropTypes from "prop-types";

export function Tutorial({ onClose }) {
  return (
    <Modal zValue="40">
      <div className=" flex flex-col flex-wrap items-center justify-center">
        {" "}
        <h1 className="text-5xl drop-shadow-px-btn">HOW TO PLAY</h1>
        <p>
          Use <span className="text-amber-400">WSAD</span> or{" "}
          <span className="text-amber-400">ARROW KEYS</span> to move and change
          tiles.
        </p>
        <p>
          Change all the tiles to the same type, either{" "}
          <span className=" text-lime-400">Grass</span> or{" "}
          <span className=" text-yellow-700">Mud</span> to win the level.
        </p>
        <p>Make all the tiles match before the time runs out!</p>
        <button
          onClick={onClose}
          className="absolute -right-2 top-0 h-16 w-16 text-center text-5xl"
        >
          X
        </button>
      </div>
    </Modal>
  );
}

Tutorial.propTypes = {
  onClose: PropTypes.string.isRequired,
};
