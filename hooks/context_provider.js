import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  return (
    <MyContext.Provider
      value={{
        activeSearch,
        setActiveSearch,
        searchInput,
        setSearchInput,
        activeFilters,
        setActiveFilters,
        goBack,
        setGoBack,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
