import { Modal } from "./Modal";
export function GameOver() {
  return (
    <Modal>
      <h1>Game is Over!</h1>
      <p>Time:</p>
      <div className="flex flex-row gap-4">
        <button>Retry</button>
        <button>Main Menu</button>
        <button>Next Level</button>
      </div>
    </Modal>
  );
}
