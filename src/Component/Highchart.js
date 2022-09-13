import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TheContext } from "../Context";
import "./Component.css";

function Highchart() {
  const { filteredDataArray } = useContext(TheContext);
  const [productAcvList, setProductAcvList] = useState({});

  useEffect(() => {
    const productAcv = {};
    // console.log("filteredDataArray:", filteredDataArray);
    if (filteredDataArray && filteredDataArray.length > 0) {
      for (let i = 0; i < filteredDataArray.length; i++) {
        let item = filteredDataArray[i];
        let product = item.product;
        if (!productAcv[product]) {
          productAcv[product] = [];
        }
        productAcv[product].push(item.acv);
      }
      setProductAcvList(productAcv);
      // console.log("productAcv: ", productAcv);
    }
  }, [filteredDataArray]);

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
        pointStart: Date.UTC(2020, 1, 1),
        pointInterval: 24 * 3600 * 1000 * 30,
      },
    },
    yAxis: {
      title: "ACV",
      // align: "low",
    },

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

    series: Object.entries(productAcvList).map((val) => {
      return { name: val[0], data: val[1] };
    }), // [{name: "Product -2", data: [1, 100, 20]}]
  };

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
