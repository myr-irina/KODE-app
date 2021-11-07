import React from "react";
import "./App.css";
import api from "../../utils/Api";
import UserCard from "../UserCard/UserCard";
import Main from "../Main/Main";
import { Route, Switch } from "react-router";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

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
        console.log("Невозможно получить данные с сервера", err);
        setIsLoading(false);
        setError(err);
        setUsers([]);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route>
            <Main error={error} isLoading={isLoading} users={users} />
          </Route>

          <Route>
            <UserCard user={currentUser} />
          </Route>

          <Route>
            <Preloader path="/preloader" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
