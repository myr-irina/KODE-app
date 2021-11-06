import React from "react";
import "./NavBar.css";

export default function TopAppBar({ department, setDepartment }) {
  const tabs = [
    { title: "Все", filterValue: null },
    { title: "Designers", filterValue: "design" },
    { title: "Analysts", filterValue: "analytics" },
    { title: "Managers", filterValue: "management" },
    { title: "iOS", filterValue: "ios" },
    { title: "Android", filterValue: "android" },
  ];

  return (
    <section className="navbar">
      <ul className="menu page__content">
        {tabs.map((item, i) => (
          <button
            key={item.title}
            className={`menu__link ${item.filterValue === department ? "menu__link_active" : ""}`}
            onClick={() => {
              setDepartment(item.filterValue);
            }}
          >
            {item.title}
          </button>
        ))}
      </ul>
      <div className="line"></div>
    </section>
  );
}
