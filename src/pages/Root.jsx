import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";

function isStorageSupported(globalObject, storageType) {
  try {
    const storage = globalObject[storageType];
    storage.setItem("test", "test");
    storage.removeItem("test");
    return true;
  } catch (err) {
    return false;
  }
}

export function RootLayout() {
  const [showCredits, setShowCredits] = useState(false);
  function handleShowCredits() {
    setShowCredits(!showCredits);
  }
  return (
    <>
      <main className="flex h-svh flex-col justify-center">
        {!isStorageSupported(window, "localStorage") && (
          <Modal zValue={40}>
            <div className=" flex flex-col flex-wrap items-center justify-center">
              <h1 className="text-5xl text-red-500 drop-shadow-px-btn">
                ERROR
              </h1>
              <p className="mt-4 text-xl">
                Please enable local storage to play the game
              </p>
            </div>
          </Modal>
        )}
        <Header />
        <Outlet />
        <div className="absolute top-14 z-10 h-14 w-28 animate-cloudTransitionSlow bg-cloud-3 bg-contain bg-center bg-no-repeat opacity-50"></div>
        <div className="absolute top-20 z-10 h-16 w-32 animate-cloudLateTransitionVerySlow bg-cloud-2 bg-contain bg-center bg-no-repeat opacity-30"></div>
        <div className="absolute top-44 z-10 h-32 w-64 animate-cloudTransitionFast bg-cloud-1 bg-contain bg-center bg-no-repeat"></div>
        <div className="absolute top-56 z-10 h-24 w-48 animate-cloudLateTransitionMedium bg-cloud-3 bg-contain bg-center bg-no-repeat opacity-70"></div>
        <div className="absolute top-80 z-10 h-24 w-48 animate-cloudTransitionMedium bg-cloud-2 bg-contain bg-center bg-no-repeat opacity-70"></div>
        <div className="absolute top-80 z-10 h-20 w-40 animate-cloudLateTransitionSlow bg-cloud-3 bg-contain bg-center bg-no-repeat opacity-50"></div>
        <div className="absolute bottom-20 z-10 h-32 w-64 animate-cloudLateTransitionFast bg-cloud-2 bg-contain bg-center bg-no-repeat"></div>
        <div className="absolute bottom-14 z-10 h-16 w-32 animate-cloudTransitionVerySlow bg-cloud-1 bg-contain bg-center bg-no-repeat opacity-30"></div>
        <div className="bg-github-logo absolute right-24 top-4 text-white">
          <p>Turn on the music for the best experience! -&gt;</p>
        </div>
        <div className="bg-github-logo absolute bottom-2 left-4 text-2xl">
          <a
            className="text-white hover:text-amber-400"
            href="https://github.com/Sigrik/react-garden-game"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <div
          onClick={handleShowCredits}
          className=" absolute bottom-2 right-4 text-2xl text-white hover:cursor-pointer hover:text-amber-400"
        >
          Credits
        </div>
        {showCredits && (
          <div className="absolute bottom-2 left-0 right-0 ml-auto mr-auto w-[420px] text-center text-white">
            <p>&quot;Morning&quot; Kevin MacLeod (incompetech.com)</p>
            <p>Licensed under Creative Commons: By Attribution 4.0 License </p>
            <p>http://creativecommons.org/licenses/by/4.0/ </p>
          </div>
        )}
      </main>
    </>
  );
}
