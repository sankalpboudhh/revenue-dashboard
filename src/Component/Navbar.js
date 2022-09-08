import axios from "axios";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function SelectLabels() {
  const [revenueList, setRevenueList] = useState([""]);
  const [user, setUser] = useState("John Doe");
  const [revenue, setRevenue] = useState("");

  let array = [1, 2, 3, 4, 5];

  useEffect(() => {
    const GetRevenues = async () => {
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
    // const typeOfRevenues = revenueList();
    // return typeOfRevenues;
    GetRevenues();
  }, []);

  // const Revenues = async () => {
  //   try {
  //     const details = await axios.get(`http://fetest.pangeatech.net/data`);
  //     const typeOfRevenues = [
  //       ...new Set(details.data.map((item) => item.revenue_type)),
  //     ];

  //     setRevenueList(typeOfRevenues);
  //   } catch (error) {
  //     console.log("Error : ", error);
  //   }
  // };
  // const typeOfRevenues = Revenues();

  const handleClick = () => {};
  const handleChange = (event) => {
    setRevenue(event.target.value);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="selector">
          <FormControl>
            <Select
              value={revenueList}
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
      {/* <button onClick={Revenues}>testing</button> */}
      <div>{typeof revenueList}</div>
      <div>{typeof array}</div>
    </div>
  );
}
