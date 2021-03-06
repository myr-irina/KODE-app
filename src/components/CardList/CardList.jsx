import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Error from "./../ErrorMessage/ErrorMessage";
import UserNotFound from "../UserNotFound/UserNotFound";

export default function CardList({
  users,
  isDateVisible,
  isLoading,
  setCurrentUser,
  error,
}) {
  return (
    <div className="cardlist">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Preloader />
      ) : (
        <ul className="cards__list">
          {users.length === 0 && <UserNotFound />}
          {users.map((user) => (
            <Card
              key={user.id}
              user={user}
              isDateVisible={isDateVisible}
              setCurrentUser={setCurrentUser}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
