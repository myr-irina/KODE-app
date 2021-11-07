import React from "react";
import "./PreloaderCard.css";

export default function PreloaderCard() {
  return (
    <section className="preloader-card page__content">
      <div className="preloader-card__avatar"></div>
      <div className="preloader-card-block">
        <div className="preloader-card-block__name-details">
          <div className="preloader-card-block__name"></div>
       
        </div>
        <div className="preloader-card-block__role"></div>
      </div>
    </section>
  );
}
