import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <main className="flex h-svh flex-col justify-center bg-amber-300">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
