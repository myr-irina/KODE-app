import React from "react";
import "./Search.css";
import SearchIcon from "./../../images/search.svg";

export default function Search({
  query, 
  setIsVisible,
  setQuery,
}) {
  function handlePopupOpen(e) {
    e.preventDefault();
    setIsVisible(true);
  }

  function onChange(e) {
    setQuery(e.target.value);
  }

  return (
    <section className="search">
      <article className="page__content">
        <h1 className="search__header">Поиск</h1>
        <form className="search__form">
          <img className="search__icon" src={SearchIcon} alt="иконка поиска" />
          <input
            className="search__input"
            value={query}
            onChange={onChange}
            type="text"
            placeholder="Введи имя, тег, почту..."
            autoComplete="off"
            minLength="2"
            maxLength="200"
          />
          <button
            className="search__button"
            type="submit"
            onClick={handlePopupOpen}
          ></button>
        </form>
      </article>
    </section>
  );
}
