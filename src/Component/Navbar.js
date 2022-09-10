import axios from "axios";
import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { TheContext, TheContextProvider } from "../Context";

function NavBar() {
  const [revenue, setRevenue] = useState("");

  const { revenueList, revenueData, user, setUser } = useContext(TheContext);

  const handleChange = (event) => {
    setRevenue(event.target.value);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="selector">
          <FormControl>
            <Select
              value={revenue}
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
