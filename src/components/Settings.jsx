import { Modal } from "./Modal";

export function Settings() {
  return (
    <Modal zValue="40">
      <div className="relative flex flex-col flex-wrap items-center justify-center">
        {" "}
        <h1 className="text-5xl drop-shadow-px-btn">SETTINGS</h1>
      </div>
    </Modal>
  );
}
