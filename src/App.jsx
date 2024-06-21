import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { MainMenu } from "./pages/MainMenu";
import { GameScreen } from "./pages/GameScreen";
import { LevelSelect } from "./pages/LevelSelect";
import { ErrorPage } from "./pages/ErrorPage";

function initializeLevels() {
  const completedLevels =
    JSON.parse(localStorage.getItem("completedLevels")) || [];
  if (!completedLevels.includes(-1)) {
    completedLevels.push(-1);
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }
}

initializeLevels();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainMenu /> },
      { path: "/game", element: <GameScreen /> },
      { path: "/levels", element: <LevelSelect /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
