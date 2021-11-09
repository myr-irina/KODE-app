import React from "react";
import "./App.css";
import api from "../../utils/Api";
import UserCard from "../UserCard/UserCard";
import Main from "../Main/Main";
import { Route, Switch } from "react-router";

function App() {
  const [selectedUser, setSelectedUser] = React.useState({
    avatarUrl: "",
    firstName: "",
    lastName: "",
    userTag: "",
    position: "",
    birthday: "",
    phone: "",
  });
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // 4. список пользователей
  // 5. isLoading(true) загружаются ли данные
  // 6. ошибка, которую вернул сервер

  React.useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setIsLoading(false);
        setError(false);
        setUsers(data.items);
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

  function onUserClick(user) {
    setSelectedUser(user);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Main
              error={error}
              isLoading={isLoading}
              users={users}
              onUserClick={onUserClick}
            />
          </Route>

          {/* <Route>
            <UserCard
              user={selectedUser !== null && selectedUser}
              path="/user"
            />
          </Route> */}

          <Route
            component={UserCard}
            user={selectedUser !== null && selectedUser}
            path="/user"
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
