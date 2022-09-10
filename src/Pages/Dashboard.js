import React from "react";
import Highchart from "../Component/Highchart";
import Navbar from "../Component/Navbar";
import SelectLabels from "../Component/Rough";
import Context from "../Context";

export default function Dashboard() {
  return (
    <div>
      {/* <SelectLabels /> */}
      <Navbar />
      {/* <Context /> */}
      <Highchart />
    </div>
  );
}
