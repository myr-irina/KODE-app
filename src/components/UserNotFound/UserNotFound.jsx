import React from "react";
import "./UserNotFound.css";
import Glass from "./../../images/left-pointing-magnifying-glass_1f50d-min.png";

export default function UserNotFound() {
  return (
    <div className="not-found">
      <div className="page__content">
        <article className="not-found__wrapper">
          <img className="not-found__image" src={Glass} alt="картинка лупы" />
          <p className="not-found__msg">Мы никого не нашли</p>
          <p className="not-found__msg type_grey">
            Попробуй скорректировать запрос
          </p>
        </article>
      </div>
    </div>
  );
}
