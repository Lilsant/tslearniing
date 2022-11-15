import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { useSearchUsersQuery } from "../../store";
import "./HomePage.css";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    console.log(search);
  }, [debounced]);

  return (
    <div className="main">
      {isError ? <span>SomethingWentWrong</span> : null}
      <div className="search">
        <input
          className="search__input"
          placeholder="Search for Users"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <ul className="search__dropdown">
          {data?.map((el) => (
            <li key={el.id} className="search__dropdown-item">
              {el.login}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
