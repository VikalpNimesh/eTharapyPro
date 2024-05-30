import React, { createContext, useState } from "react";
import moment from "moment";

export const BookSessionContext = createContext();

export const BookSessionProvider = ({ children }) => {
  const [myEventsList, setMyEventsList] = useState([
    {
      start: moment("2024-05-30T10:00:00").toDate(),
      end: moment("2024-05-30T10:30:00").toDate(),
      title: "anniversary",
    },
    {
      start: moment("2024-05-30T12:00:00").toDate(),
      end: moment("2024-05-30T12:30:00").toDate(),
      title: "lunch",
    },
  ]);

  return (
    <BookSessionContext.Provider value={{ myEventsList , setMyEventsList}}>
      {children}
    </BookSessionContext.Provider>
  );
};
