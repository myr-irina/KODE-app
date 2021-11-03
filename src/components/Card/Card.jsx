import React from "react";
import "./Card.css";
import Avatar from "./../../images/Avatar-min.png";

export default function Card() {
  return (
    <section className="card page__content">
      <img className="card__avatar" src={Avatar} alt="аватар пользователя" />
      <div className="card-block">
        <div className="card-block__name-details">
          <p className="card-block__name">Алексей Миногаров</p>
          <p className="card-block__nickname">mi</p>
        </div>
        <p className="card-block__role">Analyst</p>
      </div>
    </section>
  );
}
