import { NavLink } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
  return (
    <header>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/contactus">Contact</NavLink>
    </header>
  );
}
