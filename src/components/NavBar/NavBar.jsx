import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
// import Main from "../Main/Main";
// import Designers from "../Designers/Designers";
// import Analysts from "../Analysts/Analysts";
// import Managers from "../Managers/Mangers";
// import iOS from "../iOS/iOS";
// import Android from "../Android/Android";

export default function NavBar() {
  return (
    <section className="navbar">
      <ul className="menu page__content">
        <li>
          <NavLink
            exact
            to="/"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Все
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/designers"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Designers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analysts"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Analysts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/managers"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Managers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ios"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            iOS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/android"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            Android
          </NavLink>
        </li>
      </ul>
      <div className="line"></div>
    </section>
  );
}
