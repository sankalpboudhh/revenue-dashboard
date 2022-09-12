import React, { useContext } from "react";
import Highchart from "../Component/Highchart";
import Navbar from "../Component/Navbar";
import Table from "../Component/Table";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Highchart />
      <Table />
    </div>
  );
}
