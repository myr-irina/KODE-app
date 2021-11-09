import React from "react";
import { Link } from "react-router-dom";
import "./ErrorMessage.css";
import Emoji from "./../../images/flying-saucer_1f6f8.png";

export default function error() {
  return (
    <section className="error">
      <img src={Emoji} alt="летающая тарелка" />
      <h3 className="error__title">Какой-то сверхразум все сломал</h3>
      <p className="error__msg">Постараемся быстро починить</p>
      {/* <Link >Попробовать снова</Link> */}
    </section>
  );
}
