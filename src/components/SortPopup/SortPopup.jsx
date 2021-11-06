import React from "react";
import CloseBtn from "../../images/closeBtn.jpg";
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
              value="firstName"
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
              value="birthday"
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
