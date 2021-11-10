import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./UserCard.css";
import BirthDateIcon from "./../../images/favorite-min.png";
import PhoneIcon from "./../../images/phone-alt-min.png";

export default function UserCard(props) {
  const history = useHistory();
  const { userId } = useParams();
  const user = props.users.find((user) => user.id === userId);

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
            src={user.avatarUrl}
            alt="аватар пользователя"
          />
          <div className="user__name-block">
            <p className="user__name">{user.firstName}</p>
            <p className="user__surname">{user.lastName}</p>
            <p className="user__tag">{user.userTag}</p>
          </div>
          <p className="user__position">{user.position}</p>
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
            <p className="user__data">{user.birthday}</p>
            <p className="user__data-short">24 года</p>
          </div>
        </div>
        <div className="user__info-block">
          <img className="user-icon" src={PhoneIcon} alt=" телефона" />
          <span className="user__data">
            <a className="user__phone" href="tel:79999009090">
              {user.phone}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
