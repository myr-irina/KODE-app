import React from "react";
import "./App.css";
import api from "../../utils/Api";
import UserCard from "../UserCard/UserCard";
import Main from "../Main/Main";
import { Route, Switch } from "react-router";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setIsLoading(false);
        setError(false);
        setUsers(
          data.items.map((user) => ({
            ...user,
            birthdayDate: new Date(user.birthday),
          }))
        );
      })
      .catch((err) => {
        if (err === "500" || err === "404") {
          setError(true);
          setIsLoading(false);
          setUsers([]);
        }
        console.log("Невозможно получить данные с сервера", err);
        setIsLoading(false);
        setUsers([]);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Main error={error} isLoading={isLoading} users={users} />
          </Route>

          <Route path="/user/:userId">
            <UserCard users={users} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
