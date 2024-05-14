import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  function handleShowSettings() {
    setShowSettings(!showSettings);
  }

  function navigateBack() {
    navigate(-1);
  }

  return (
    <div>
      <button
        onClick={handleShowSettings}
        className="absolute right-4 top-4 h-16 w-16 text-white"
      >
        <Cog6ToothIcon />
      </button>
      <button
        onClick={navigateBack}
        className="absolute left-4 top-4 h-16 w-16 text-white"
      >
        <ArrowLeftIcon />
      </button>
      {showSettings && <Settings />}
    </div>
  );
}
