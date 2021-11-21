import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./UserCard.css";
import BirthDateIcon from "./../../images/favorite-min.png";
import PhoneIcon from "./../../images/phone-alt-min.png";
import moment from "moment";
import "moment/locale/ru";
import PreloaderCard from "../PreloaderCard/PreloaderCard";
import UserNotFound from "../UserNotFound/UserNotFound";

export default function UserCard(props) {
  const history = useHistory();
  const { userId } = useParams();
  if (props.isLoading) {
    return <PreloaderCard />;
  }
  const user = props.users.find((user) => user.id === userId);
  if (!user) {
    return <UserNotFound />;
  }

  const phoneNumber = user.phone;
  const formattedPhoneNumber = phoneNumber
    .replace(/[^\d]/g, "")
    .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($1) $2 $3 $4");

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
            <p className="user__data">{moment(user.birthday).format("LL")}</p>
            <p className="user__data-short">
              {moment(user.birthday).fromNow(true)}
            </p>
          </div>
        </div>
        <div className="user__info-block">
          <img className="user-icon" src={PhoneIcon} alt=" телефона" />
          <span className="user__data">
            <a className="user__phone" href="tel:79999009090">
              {formattedPhoneNumber}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
