import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <section className="card page__content">
      <button className="card__btn" type="button">
        <Link to={`/user/${props.user.id}`}>
          <img
            className="card__avatar"
            src={props.user.avatarUrl}
            alt="аватар пользователя"
          />
        </Link>
      </button>
      <div className="card__wrapper">
        <div className="card-block">
          <div className="card-block__name-details">
            <p className="card-block__name">{props.user.firstName}</p>
            <p className="card-block__surname">{props.user.lastName}</p>
            <p className="card-block__nickname">{props.user.userTag}</p>
          </div>
          <p className="card-block__role">{props.user.position}</p>
        </div>
        {props.isDateVisible && (
          <p className="card-block__age">{props.user.birthday}</p>
        )}
      </div>
    </section>
  );
}
