import React from "react";
import "./SortPopup.css";

export default function SortPopup({
  isVisible,
  sortingMethod,
  setIsVisible,
  setSortingMethod,
}) {
  function closePopup() {
    setIsVisible(false);
  }

  function handleInputChange(event) {
    setSortingMethod(event.target.id);

    closePopup();
  }

  return (
    <div className={`popup ${isVisible ? "popup_is-opened" : ""}`}>
      <div className="popup__content">
        <button className="close-btn" onClick={closePopup}></button>
        <h3 className="popup__title">Сортировка</h3>

        <div className="radio-btn-block">
          <div className="radio-btn-block__input">
            <input
              type="radio"
              name="userData"
              id="byName"
              checked={sortingMethod === "byName"}
              className="radio-btn-block__btn"
              onChange={handleInputChange}
            />
            <label htmlFor="byName" className="radio-btn-block__label">
              По алфавиту
            </label>
          </div>

          <div className="radio-btn-block__input">
            <input
              type="radio"
              name="userData"
              id="byDate"
              checked={sortingMethod === "byDate"}
              className="radio-btn-block__btn"
              onChange={handleInputChange}
            />
            <label htmlFor="byDate" className="radio-btn-block__label">
              По дню рождения
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
