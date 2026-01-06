import { NavLink } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
  return (
    <header>
      <nav className="nav-left">
        <NavLink to="/" className="logo-link">
          <img
            src="/KYTCG.png"
            alt="KY Logo"
            className="logo"
          />
          <span>KY TCG</span>
        </NavLink>
      </nav>

      <nav className="nav-right">
        <NavLink to="/contactus">Contact</NavLink>
      </nav>
    </header>
  );
}
