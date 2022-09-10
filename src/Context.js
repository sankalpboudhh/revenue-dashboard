import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const TheContext = createContext();

function TheContextProvider(props) {
  //   const source = "http://fetest.pangeatech.net/data";

  const [revenueList, setRevenueList] = useState([""]);
  const [revenueData, setRevenueData] = useState([""]);
  const [user, setUser] = useState("John Doe");

  useEffect(() => {
    const getRevenues = async () => {
      try {
        const details = await axios.get(`http://fetest.pangeatech.net/data`);
        const typeOfRevenues = [
          ...new Set(details.data.map((item) => item.revenue_type)),
        ];

        setRevenueList(typeOfRevenues);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    const getData = async () => {
      try {
        const details = await axios.get(`http://fetest.pangeatech.net/data`);
        const dataitems = [...details.data.map((item) => item.acv)];
        setRevenueData(dataitems);
      } catch (err) {
        console.log(err);
      }
    };
    getRevenues();
    getData();
  }, []);

  return (
    <TheContext.Provider value={{ revenueList, revenueData, user, setUser }}>
      {props.children}
    </TheContext.Provider>
  );
}

export { TheContext, TheContextProvider };
