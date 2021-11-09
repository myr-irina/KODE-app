import React from "react";
import Search from "../Search/Search";
import UserList from "../CardList/CardList";
import TopAppBar from "../NavBar/NavBar";
import SortPopup from "../SortPopup/SortPopup";

export default function Main({ isLoading, users, error, onUserClick }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState(null);
  const [sortingMethod, setSortingMethod] = React.useState({
    byName: true,
    byDate: false,
  });
  const [isVisible, setIsVisible] = React.useState(false);
  const [userNotFound, setUserNotFound] = React.useState(false);

  // const usersFilteredByDept = (user) => {
  //   if (department === null) {
  //     return users;
  //   } else if (department === user.department) {
  //     users.filter((user) => {
  //       return true;
  //     });
  //     return false;
  //   }
  // };

  // const usersFilteredByDeptAndSearchQuery = () => {
  //   const queryLowercase = query.toLowerCase();

  //   if (query === "") {
  //     return usersFilteredByDept;
  //   } else if (
  //     usersFilteredByDept.firstName.toLowerCase().includes(queryLowercase) ||
  //     usersFilteredByDept.lastName.toLowerCase().includes(queryLowercase) ||
  //     usersFilteredByDept.position.toLowerCase().includes(queryLowercase) ||
  //     usersFilteredByDept.userTag.toLowerCase().includes(queryLowercase)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  //--------------------

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

  // function userNotFound(filteredUsers) {
  //   if (filteredUsers.length === 0) {
  //     setUserNotFound(true);
  //   }
  // }

  return (
    <section className="main">
      <Search
        query={query}
        // handleChange={onChange}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setQuery={setQuery}
      />
      <TopAppBar setDepartment={setDepartment} department={department} />
      <UserList
        error={error}
        users={filteredUsers}
        // users = {usersFilteredByDeptAndSearchQuery}
        // userNotFound={userNotFound}
        isLoading={isLoading}
        isDateVisible={sortingMethod === "byDate"}
        onUserClick={onUserClick}
      />

      <SortPopup
        isVisible={isVisible}
        sortingMethod={sortingMethod}
        setIsVisible={setIsVisible}
        setSortingMethod={setSortingMethod}
        users={filteredUsers}
      />
    </section>
  );
}
