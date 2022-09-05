import axios from "axios";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [revenue, setRevenue] = useState("");
  const [user, setUser] = useState("John Doe");

  const handleChange = (event) => {
    setRevenue(event.target.value);
  };

  //   const Revenues = async () => {
  //     try {
  //       const details = await axios.get(`http://fetest.pangeatech.net/data`);
  //       //   console.log(details.data);
  //       const typeOfRevenues = details.revenue_type;
  //       console.log(typeOfRevenues);
  //     } catch (error) {
  //       console.log("Error : ", error);
  //     }
  //   };
  return (
    <>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <p className="greeting">Hi, {user}</p>
      </nav>
    </>
  );
}
