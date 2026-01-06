import { Outlet } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";
import "./MainLayout.css";

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
