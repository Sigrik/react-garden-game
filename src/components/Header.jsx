import { useState } from "react";
import { Settings } from "./Settings";
import { useNavigate, useLocation } from "react-router-dom";
const clickSound = new Audio("/src/assets/click.wav");
export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  function handleShowSettings() {
    setShowSettings(!showSettings);
    clickSound.play();
  }

  function navigateBack() {
    navigate("/");
    clickSound.play();
  }
  if (pathname === "/") {
    return (
      <div>
        <button
          onClick={handleShowSettings}
          className="absolute right-4 top-4 z-50 h-16 w-16 bg-cog-icon bg-contain bg-center bg-no-repeat text-white"
        ></button>
        {showSettings && <Settings onClose={handleShowSettings} />}
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={handleShowSettings}
        className="absolute right-4 top-4 z-50 h-16 w-16 bg-cog-icon bg-contain bg-center bg-no-repeat text-white"
      ></button>
      <button
        onClick={navigateBack}
        className="absolute left-4 top-4 z-30 h-16 w-16 bg-arrow-icon bg-contain bg-center bg-no-repeat text-white"
      ></button>
      {showSettings && <Settings onClose={handleShowSettings} />}
    </div>
  );
}
