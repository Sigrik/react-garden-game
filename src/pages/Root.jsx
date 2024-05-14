import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <>
      <main className="flex h-svh flex-col justify-center bg-amber-300">
        <Header />
        <Outlet />
      </main>
    </>
  );
}
