import React from "react";
import PreloaderCard from "../PreloaderCard/PreloaderCard";
import "./Preloader.css";

export default function Preloader() {
  return (
    <div>
      <div className="preloader page__content">
        <ul className="preloader__list">
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
          <PreloaderCard />
        </ul>
      </div>
    </div>
  );
}
