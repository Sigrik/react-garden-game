import { Modal } from "./Modal";

function resetLevels() {
  const completedLevels = [-1];
  localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
}

export function Settings({ onClose }) {
  return (
    <Modal zValue="40">
      <div className=" flex flex-col flex-wrap items-center justify-center">
        {" "}
        <h1 className="text-5xl drop-shadow-px-btn">SETTINGS</h1>
        <p>Music Volume</p>
        <p>SFX Volume</p>
        <button
          onClick={resetLevels}
          className="w-full rounded-md bg-amber-400 p-3 text-center text-3xl drop-shadow-px-btn hover:bg-amber-300"
        >
          Reset Progress
        </button>
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
