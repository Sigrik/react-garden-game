import { Modal } from "./Modal";
export function GameOver(props) {
  return (
    <Modal>
      <h1>Game is Over!</h1>
      <h2>{props.title}</h2>
      <p>Time:</p>
      <div className="flex flex-row gap-4">
        <button>Retry</button>
        <button>Main Menu</button>
        <button>Next Level</button>
      </div>
    </Modal>
  );
}
