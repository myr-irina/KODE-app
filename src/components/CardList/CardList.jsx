import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

export default function CardList({ users, query }) {
  return (
    <div className="cardlist">
      <ul className="cards__list">
        {users
          .filter((user) => {
            if (query === "") {
              return user;
            } else if (
              user.firstName.toLowerCase().includes(query.toLowerCase()) ||
              user.lastName.toLowerCase().includes(query.toLowerCase()) ||
              user.position.toLowerCase().includes(query.toLowerCase()) ||
              user.userTag.toLowerCase().includes(query.toLowerCase()) 
            ) {
              return user;
            }
          })
          .map((user) => (
            <Card key={user.id} user={user} />
          ))}
      </ul>
    </div>
  );
}
