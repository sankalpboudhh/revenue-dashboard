import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const TheContext = createContext([]);

function TheContextProvider(props) {
  const [user] = useState("John Doe");
  const [apiDataArray, setApiDataArray] = useState([]);
  const [filteredDataArray, setFilteredDataArray] = useState([]);
  const [filteredRevenue, setFilteredRevenue] = useState("");

  useEffect(() => {
    const getApiData = async () => {
      try {
        const jsonData = await axios.get(`http://fetest.pangeatech.net/data`);
        setApiDataArray(jsonData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  const selectRevenueFilter = (selectedRevenueFilter) => {
    setFilteredRevenue(selectedRevenueFilter);
    if (selectedRevenueFilter === "") {
      setFilteredDataArray(apiDataArray);
      return;
    }
    const tempDataArray = apiDataArray.filter(
      (item) => item.revenue_type === selectedRevenueFilter
    );
    setFilteredDataArray(tempDataArray);
  };

  return (
    <TheContext.Provider
      value={{
        user,
        apiDataArray,
        filteredDataArray,
        filteredRevenue,
        selectRevenueFilter,
      }}
    >
      {props.children}
    </TheContext.Provider>
  );
}

export { TheContext, TheContextProvider };
