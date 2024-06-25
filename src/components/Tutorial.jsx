import { Modal } from "./Modal";
import PropTypes from "prop-types";

export function Tutorial({ onClose }) {
  return (
    <Modal zValue={40}>
      <div className=" flex flex-col flex-wrap items-center">
        {" "}
        <h1 className="py-16 text-5xl drop-shadow-px-btn">HOW TO PLAY</h1>
        <div className="flex flex-row gap-4 px-8">
          <div className="flex flex-1 flex-col items-center  justify-center text-center">
            <div className="bg-tutorial-Controls mb-4 h-[84px] w-32 bg-contain bg-center bg-no-repeat"></div>
            <p>
              Use <span className="text-amber-400">WSAD</span> or{" "}
              <span className="text-amber-400">ARROW KEYS</span> to move and
              change tiles.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center  justify-center text-center">
            <div className="bg-tutorial-Grid mb-4 h-[84px] w-32 bg-contain bg-center bg-no-repeat"></div>
            <p>
              Change all the tiles to the same type, either{" "}
              <span className=" text-lime-400">Grass</span> or{" "}
              <span className=" text-yellow-700">Mud</span> to win the level.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center  justify-center text-center">
            <div className="bg-hour-glass mb-4 h-[84px] w-32 bg-contain bg-center bg-no-repeat"></div>
            <p>Make all the tiles match before the time runs out!</p>
          </div>
        </div>
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
  onClose: PropTypes.func.isRequired,
};
