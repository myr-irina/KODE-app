import React from "react";
import "./App.css";
import Search from "../Search/Search";
import NavBar from "../NavBar/NavBar";
import CardList from "../ResultList/CardList";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Search />
        <NavBar />
        <CardList />
      </div>
    </div>
  );
}

export default App;
