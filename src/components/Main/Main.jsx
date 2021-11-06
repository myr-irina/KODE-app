import React from "react";
import Search from "../Search/Search";
import UserList from "../CardList/CardList";
import TopAppBar from "../NavBar/NavBar";
import SortPopup from "../SortPopup/SortPopup";

export default function Main({ isLoading, users, error }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState(null);
  const [sortingMethod, setSortingMethod] = React.useState("byName");
  const [isVisible, setIsVisible] = React.useState(false);

  function onChange(e) {
    setQuery(e.target.value);
  }

  // в состоянии будет:
  // 1. введенный текст в строке поиска
  // 2. выбранный department
  // 3. выбранный режим сортировки (по умолчнанию сортировка по алфавиту)
  // 4. видим ли попап сортировки (false, true)

  const filteredUsers = users
    .filter((user) => {
      if (department === null) {
        return true;
      } else if (department === user.department) {
        return true;
      }
      return false;
    })
    .filter((user) => {
      const queryLowercase = query.toLowerCase();

      if (query === "") {
        return true;
      } else if (
        user.firstName.toLowerCase().includes(queryLowercase) ||
        user.lastName.toLowerCase().includes(queryLowercase) ||
        user.position.toLowerCase().includes(queryLowercase) ||
        user.userTag.toLowerCase().includes(queryLowercase)
      ) {
        return true;
      }
      return false;
    });

  return (
    <section className="main">
      <Search
        query={query}
        handleChange={onChange}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <TopAppBar setDepartment={setDepartment} department={department} />
      <UserList
        users={filteredUsers}
        isLoading={isLoading}
        isDateVisible={sortingMethod === "byDate"}
      />
      <SortPopup
        isVisible={isVisible}
        sortingMethod={sortingMethod}
        setIsVisible={setIsVisible}
      />
    </section>
  );
}

//Main: search, Top Appp Bar, UserList. В Main также перенесем 1,2,3
