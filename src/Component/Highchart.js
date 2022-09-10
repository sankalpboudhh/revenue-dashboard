import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "./Navbar";
import axios from "axios";
import { TheContext } from "../Context";

function Highchart() {
  const { revenueData, setRevenueData } = useContext(TheContext);

  console.log(revenueData);
  // const getacv
  var pointStart = Date.UTC(2020, 1, 1);

  const highchartdata = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    // plotOptions: {
    //   series: {
    //     pointStart: January,
    //   },
    // },

    plotOptions: {
      series: {
        pointStart: pointStart,
        pointInterval: 24 * 3600 * 1000 * 30,
      },
    },
    // yAxis: {
    //   categories: [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    //   ],
    // },
    xAxis: {
      min: Date.UTC(2020, 0, 0),
      max: Date.UTC(2020, 12, 31),
      allowDecimals: false,
      type: "datetime",
      tickInterval: 24 * 3600 * 1000 * 30, //one day
      labels: {
        rotation: 0,
      },
    },

    series: [
      {
        name: "dataaaaaa",
        data: revenueData,
      },
      {
        name: "Data 2",
        data: [1, 100, 20],
      },
    ],
  };

  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const details = await axios.get(`http://fetest.pangeatech.net/data`);
  //         const dataitems = [...details.data.map((item) => item.revenue)];
  //         setData(dataitems);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     getData();
  //   }, []);

  //   console.log(data);
  return (
    <div>
      <Box>
        <HighchartsReact highcharts={Highcharts} options={highchartdata} />
        {/* <h3>{revenueData}</h3> */}
      </Box>
    </div>
  );
}

export default Highchart;
