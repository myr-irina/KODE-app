import React from "react";
import Search from "../Search/Search";
import UserList from "../CardList/CardList";
import TopAppBar from "../NavBar/NavBar";
import SortPopup from "../SortPopup/SortPopup";

export default function Main({ isLoading, users, error }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [sortingMethod, setSortingMethod] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  function onChange(e) {
    setQuery(e.target.value);
  }

  function filterDepartment(user) {
    const tabs = [
      { title: "Все" },
      { title: "Designers" },
      { title: "Analysts" },
      { title: "Managers" },
      { title: "iOS" },
      { title: "android" },
    ];
    const deptArray = user.position.filter(
      (user) => user.position === tabs.title
    );
    return setDepartment(deptArray);
  }

  // в состоянии будет:
  // 1. введенный текст в строке поиска
  // 2. выбранный department
  // 3. выбранный режим сортировки (по умолчнанию сортировка по алфавиту)
  // 4. видим ли попап сортировки (false, true)

  return (
    <section className="main">
      <Search query={query} handleChange={onChange} />
      <TopAppBar users={users} department={department} />
      <UserList users={users} query={query} isLoading={isLoading} />
      {isVisible && <SortPopup sortingMethod={sortingMethod} />}
    </section>
  );
}

//Main: search, Top Appp Bar, UserList. В Main также перенесем 1,2,3
