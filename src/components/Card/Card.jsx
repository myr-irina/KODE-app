import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <section className="card page__content">
      <img
        className="card__avatar"
        src={props.user.avatarUrl}
        alt="аватар пользователя"
      />
      <div className="card-block">
        <div className="card-block__name-details">
          <p className="card-block__name">{props.user.firstName}</p>
          <p className="card-block__surname">{props.user.lastName}</p>
          <p className="card-block__nickname">{props.user.userTag}</p>
        </div>
        <p className="card-block__role">{props.user.position}</p>
      </div>
    </section>
  );
}
