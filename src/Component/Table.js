import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TheContext } from "../Context";

export default function BasicTable() {
  const { filteredDataArray } = React.useContext(TheContext);

  React.useEffect(() => {
    console.log("from Table :", filteredDataArray);
  }, [filteredDataArray]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#2153a3", textColor: "white" }}>
            <TableCell>S No. </TableCell>
            <TableCell>Line of Business</TableCell>
            <TableCell>Revenue Type</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Posting Period</TableCell>
            <TableCell>ACV</TableCell>
            <TableCell>TCV</TableCell>
            <TableCell>Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredDataArray.map((item) => (
            <TableRow
              key={item.S_No}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.S_no}
              </TableCell>
              <TableCell>{item.line_of_business}</TableCell>
              <TableCell>{item.revenue_type}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>
                {item.month}-{item.year}
              </TableCell>
              <TableCell>${item.acv}K</TableCell>
              <TableCell>${item.tcv}K</TableCell>
              <TableCell>${item.revenue}K</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
