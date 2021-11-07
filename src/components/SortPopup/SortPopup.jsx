import React from "react";
import "./SortPopup.css";

export default function SortPopup({ isVisible, sortingMethod, setIsVisible }) {
  function closePopup() {
    setIsVisible(false);
  }

  return (
    <div className={`popup ${isVisible ? "popup_is-opened" : ""}`}>
      <div className="popup__content">
        <button className="close-btn" onClick={closePopup}></button>
        <h3 className="popup__title">Сортировка</h3>

        <div className="radio-btn-block">
          <div className="radio-btn-block__input">
            <input
              defaultChecked
              type="radio"
              name="choice"
              id="firstName"
              value="byName"
              className="radio-btn-block__btn"
            ></input>
            <label htmlFor="firstName" className="radio-btn-block__label">
              По алфавиту
            </label>
          </div>

          <div className="radio-btn-block__input">
            <input
              type="radio"
              name="choice"
              id="birthday"
              value="byDate"
              className="radio-btn-block__btn"
            ></input>
            <label htmlFor="birthday" className="radio-btn-block__label">
              По дню рождения
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
