import { Outlet } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";

export function MainLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
