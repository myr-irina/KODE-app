import React from "react";
import "./App.css";
import api from "../../utils/Api";
import UserCard from "../UserCard/UserCard";
import Main from "../Main/Main";
import { Route, Switch } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(true);

  // 4. список пользователей
  // 5. isLoading(true) загружаются ли данные
  // 6. ошибка, которую вернул сервер

  React.useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setIsLoading(false);
        setErrorMessage(true);
        setUsers(data.items);
      })
      .catch((err) => {
        console.log("Невозможно получить данные с сервера", err);
        setIsLoading(false);
        setErrorMessage(true);
        setUsers([]);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Main error={errorMessage} isLoading={isLoading} users={users} />
          </Route>

          <Route>
            <UserCard user={currentUser} path="/user"/>
          </Route>

          <Route>
            <ErrorMessage path="/err" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
