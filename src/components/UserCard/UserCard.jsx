import React from "react";
import { useHistory } from "react-router-dom";
import "./UserCard.css";
import BirthDateIcon from "./../../images/favorite-min.png";
import PhoneIcon from "./../../images/phone-alt-min.png";

import UserAvatar from "./../../images/Avatar-min.png";

export default function UserCard(props) {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <section className="user">
      <div className="user__block">
        <article className="user__block-wrapper">
          <button
            className="user__back-btn"
            type="button"
            onClick={handleClick}
          ></button>
          <img
            className="user__avatar"
            src={UserAvatar}
            alt="аватар пользователя"
          />
          <div className="user__name-block">
            <p className="user__name">Алиса</p>
            <p className="user__surname">Иванова</p>
            <p className="user__tag">al</p>
          </div>
          <p className="user__position">Designer</p>
        </article>
      </div>
      <div className="user__info">
        <div className="user__info-block">
          <img
            className="user-icon"
            src={BirthDateIcon}
            alt="иконка избранное"
          />
          <div className="user-data__block">
            <p className="user__data">5 июня 1996</p>
            <p className="user__data-short">24 года</p>
          </div>
        </div>
        <div className="user__info-block">
          <img className="user-icon" src={PhoneIcon} alt=" телефона" />
          <span className="user__data">
            <a className="user__phone" href="tel:79999009090">
              +7 (999) 900 90 90
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
