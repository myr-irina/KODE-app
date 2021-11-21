import React from "react";
import Search from "../Search/Search";
import UserList from "../CardList/CardList";
import TopAppBar from "../NavBar/NavBar";
import SortPopup from "../SortPopup/SortPopup";
import moment from "moment";
import "moment/locale/ru";

function compareUserNames(a, b) {
  return a.firstName.localeCompare(b.firstName, "ru");
}

function compareUserGroupsByDate(a, b) {
  return +b[0] - +a[0];
}

export default function Main({ isLoading, users, error, onUserClick }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState(null);
  const [sortingMethod, setSortingMethod] = React.useState("byName");
  const [isVisible, setIsVisible] = React.useState(false);

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

  let listToRender;

  if (sortingMethod === "byName") {
    const sortedFilteredUsers = filteredUsers.sort(compareUserNames);
    listToRender = (
      <UserList
        error={error}
        users={sortedFilteredUsers}
        isLoading={isLoading}
        isDateVisible={false}
        onUserClick={onUserClick}
      />
    );
  } else {
    const grouppedUsers = Object.entries(
      filteredUsers.reduce((accumulator, currentValue) => {
        const year = moment(currentValue.birthdayDate).format("YYYY");
        accumulator[year] = [...(accumulator[year] || []), currentValue];
        return accumulator;
      }, {})
    );
    const sortedGrouppedUsers = grouppedUsers.sort(compareUserGroupsByDate);
    listToRender = sortedGrouppedUsers.map(([currentDate, currentUsers]) => {
      return (
        <React.Fragment key={currentDate}>
          <UserList
            error={error}
            users={currentUsers}
            isLoading={isLoading}
            isDateVisible={true}
            onUserClick={onUserClick}
          />
          <p className="underline__age">{currentDate}</p>
        </React.Fragment>
      );
    });
  }

  return (
    <section className="main">
      <Search
        query={query}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setQuery={setQuery}
      />
      <TopAppBar setDepartment={setDepartment} department={department} />
      {listToRender}

      <SortPopup
        isVisible={isVisible}
        sortingMethod={sortingMethod}
        setIsVisible={setIsVisible}
        setSortingMethod={setSortingMethod}
      />
    </section>
  );
}
