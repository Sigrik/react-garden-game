import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <>
      <main className="flex h-svh flex-col justify-center">
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
      </main>
    </>
  );
}
