import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

export default function CardList({ users, isDateVisible }) {
  return (
    <div className="cardlist">
      <ul className="cards__list">
        {users.map((user) => (
            <Card key={user.id} user={user} isDateVisible={isDateVisible}/>
          ))}
      </ul>
    </div>
  );
}
