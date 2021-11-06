import React from "react";
import CloseBtn from "../../images/closeBtn.jpg";
import './SortPopup.css';

export default function SortPopup({ isVisible, sortingMethod, onPopupClose }) {

  function handlePopupClose(e) {
    e.preventDefault();
    onPopupClose();
  }

  return (
    <div className={`popup ${isVisible ? "popup_is-opened" : ""}`}>
      <div className="popup__content">
        <h3 className="popup__title">Сортировка</h3>

        <div>
          <input type="radio" id="name"></input>
          <label>По алфавиту</label>
        </div>

        <div>
          <input type="radio" id="birhdate"></input>
          <label>По дню рождения</label>
        </div>

        <button className="close-btn">{CloseBtn}</button>
      </div>
    </div>
  );
}
