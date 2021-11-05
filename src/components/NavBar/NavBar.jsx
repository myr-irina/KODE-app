import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function TopAppBar({ users }) {
  const [active, setActive] = React.useState(null);

  const tabs = [
    { title: "Все" },
    { title: "Designers" },
    { title: "Analysts" },
    { title: "Managers" },
    { title: "iOS" },
    { title: "android" },
  ];

  const openTab = (e) => setActive(e.target.dataset.i);

  return (
    <section className="navbar">
      <ul className="menu page__content">
        {tabs.map((n, i) => (
          <button
            key={i}
            // className={`menu__link ${i === active ? "menu__link_active" : ""}`}
            className="menu__link"
            onClick={openTab}
            data-index={i}
          >
            {n.title}
          </button>
        ))}
        {/* <li>
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
        </li> */}
      </ul>
      <div className="line"></div>
    </section>
  );
}
