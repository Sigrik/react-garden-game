import { useState } from "react";
import { Settings } from "./Settings";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  function handleShowSettings() {
    setShowSettings(!showSettings);
  }

  function navigateBack() {
    navigate("/");
  }

  return (
    <div className="z-20">
      <button
        onClick={handleShowSettings}
        className="bg-cog-icon absolute right-4 top-4 h-16 w-16 bg-contain bg-center bg-no-repeat text-white"
      ></button>
      <button
        onClick={navigateBack}
        className="bg-arrow-icon absolute left-4 top-4 h-16 w-16 bg-contain bg-center bg-no-repeat text-white"
      ></button>
      {showSettings && <Settings />}
    </div>
  );
}
