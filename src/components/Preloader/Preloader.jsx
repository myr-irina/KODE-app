import React from "react";
import PreloaderCard from "../PreloaderCard/PreloaderCard";
import "./Preloader.css";


export default function Preloader() {
  return (
    <div>
      <div className="preloader page__content">
        <ul className="preloader__list">
          {/* <li className="preloader__round"></li>
          <div className="preloader__rectangle-block">
            <li className="preloader__rectangle"></li>
            <li className="preloader__rectangle-small"></li>
          </div> */}
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
