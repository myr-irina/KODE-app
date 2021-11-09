import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Error from "./../ErrorMessage/ErrorMessage";

export default function CardList({
  users,
  isDateVisible,
  isLoading,
  setCurrentUser,
  error,
}) {
  return (
    // <div className="cardlist">
    //   {isLoading ? (
    //     <Preloader />
    //   ) : (
    //     <ul className="cards__list">
    //       {users
    //         .map((user) => (
    //           <Card key={user.id} user={user} isDateVisible={isDateVisible} setCurrentUser={setCurrentUser} />
    //         ))
    //         // .sort(function (a, b) {
    //         //   const nameA = a.user.firstName.toLowerCase();
    //         //   const nameB = b.user.firstName.toLowerCase();
    //         //   if (nameA < nameB) return -1;
    //         //   if (nameA > nameB) return 1;
    //         //   return 0;
    //         // })
    //         }
    //     </ul>
    //   )}
    // </div>

    <div className="cardlist">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Preloader />
      ) : (
        <ul className="cards__list">
          {
            users.map((user) => (
              <Card
                key={user.id}
                user={user}
                isDateVisible={isDateVisible}
                setCurrentUser={setCurrentUser}
              />
            ))
         
          }
        </ul>
      )}
    </div>
  );
}
