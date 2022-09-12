import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { TheContext } from "../Context";

function NavBar() {
  const [revenueList, setRevenueList] = useState([]);
  const { user, apiDataArray, filteredRevenue, selectRevenueFilter } =
    useContext(TheContext);

  useEffect(() => {
    if (!apiDataArray || apiDataArray.length === 0) return;
    const tempRevenueList = [
      ...new Set(apiDataArray.map((item) => item.revenue_type)),
    ];

    console.log("revenueList:", tempRevenueList);
    setRevenueList(tempRevenueList);
    handleChange({ target: { value: "" } });
  }, [apiDataArray]);

  const handleChange = (event) => {
    selectRevenueFilter(event.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="selector">
          <FormControl>
            <Select
              value={filteredRevenue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>All Revenue Types</em>
              </MenuItem>
              {revenueList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <p className="greeting">Hi, {user}</p>
      </nav>
    </div>
  );
}

export default NavBar;
