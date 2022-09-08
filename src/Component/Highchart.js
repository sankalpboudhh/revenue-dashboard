import { Box } from "@material-ui/core";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Highchart() {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  return (
    <div>
      <Box
        sx={{
          height: "300px",
          width: "800px",
          border: "4px solid black",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          marginLeft: "100px",
        }}
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </div>
  );
}

export default Highchart;
