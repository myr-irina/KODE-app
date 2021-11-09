import React from "react";
import "./SortPopup.css";

export default function SortPopup({
  isVisible,
  sortingMethod,
  setIsVisible,
  setSortingMethod,
  users,
}) {
  const [checked, setChecked] = React.useState(false);
  function closePopup() {
    setIsVisible(false);
  }

  function toggleState() {
    setChecked(!checked);
  }

  function handleInputChange(event) {
    setSortingMethod(event.target.id);

    closePopup();
  }

  // function handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'radio' ? target.checked : target.value;
  //   const name = target.name;

  //   setSortingMethod({
  //     [name]: value
  //   });
  //   // closePopup();
  // }

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
