import React from "react";
import { Link } from "react-router-dom";
import "./ErrorMessage.css";

export default function ErrorMessage() {
  return (
    <section className="error">
      <h3 className="error__title">Какой-то сверхразум все сломал</h3>
      <p className="error__msg">Постараемся быстро починить</p>
      <Link>Попробовать снова</Link>
    </section>
  );
}
