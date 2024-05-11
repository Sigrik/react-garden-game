import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Settings from "./Settings";

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  function handleShowSettings() {
    setShowSettings(!showSettings);
  }

  return (
    <div>
      <button
        onClick={handleShowSettings}
        className="absolute right-4 top-4 h-16 w-16 text-white"
      >
        <Cog6ToothIcon />
      </button>
      <button className="absolute left-4 top-4 h-16 w-16 text-white">
        <ArrowLeftIcon />
      </button>
      {showSettings && <Settings />}
    </div>
  );
}
