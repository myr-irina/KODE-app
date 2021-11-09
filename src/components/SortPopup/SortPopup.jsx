import React from "react";
import "./SortPopup.css";

export default function SortPopup({
  isVisible,
  // sortingMethod,
  setIsVisible,
  // setSortingMethod,
  users,
}) {
  const [checked, setChecked] = React.useState(false);
  function closePopup() {
    setIsVisible(false);
  }

  function toggleInputValue(value){
    return !value;
  }

  function handleInputChange() {
    setChecked(toggleInputValue);
  }

  return (
    <div className={`popup ${isVisible ? "popup_is-opened" : ""}`}>
      <div className="popup__content">
        <button className="close-btn" onClick={closePopup}></button>
        <h3 className="popup__title">Сортировка</h3>

        <div className="radio-btn-block">
          <div className="radio-btn-block__input">
            <input
              checked={checked}
              type="radio"
              name="userData"
              id="byName"
              value="byName"
              className="radio-btn-block__btn"
              onChange={handleInputChange}
            ></input>
            <label htmlFor="byName" className="radio-btn-block__label">
              По алфавиту
            </label>
          </div>

          <div className="radio-btn-block__input">
            <input
              // checked={checked}
              type="radio"
              name="userData"
              id="byDate"
              value="byDate"
              className="radio-btn-block__btn"
              onChange={handleInputChange}
            ></input>
            <label htmlFor="byDate" className="radio-btn-block__label">
              По дню рождения
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
