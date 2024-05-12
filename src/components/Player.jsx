import { useEffect } from "react";

let playerPos = { row: 3, col: 0 };

export function Player() {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    switch (e.key) {
      case "w":
        playerPos.row += 1;
        if (playerPos.row > 3) {
          playerPos.row = 3;
        }
        break;
      case "s":
        playerPos.row -= 1;
        if (playerPos.row < 0) {
          playerPos.row = 0;
        }
        break;
      case "a":
        playerPos.col -= 1;
        if (playerPos.col < 0) {
          playerPos.col = 0;
        }
        break;
      case "d":
        playerPos.col += 1;
        if (playerPos.col > 3) {
          playerPos.col = 3;
        }
    }
    console.log(playerPos);
  };

  return <div className="absolute">Player</div>;
}
