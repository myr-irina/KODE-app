import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";

export default function CardList({ users, isDateVisible, isLoading }) {
  return (
    <div className="cardlist">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="cards__list">
          {users
            .map((user) => (
              <Card key={user.id} user={user} isDateVisible={isDateVisible} />
            ))
            // .sort(function (a, b) {
            //   const nameA = a.user.firstName.toLowerCase();
            //   const nameB = b.user.firstName.toLowerCase();
            //   if (nameA < nameB) return -1;
            //   if (nameA > nameB) return 1;
            //   return 0;
            // })
            }
        </ul>
      )}
    </div>
  );
}
