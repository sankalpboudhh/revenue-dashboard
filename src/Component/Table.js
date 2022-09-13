import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TheContext } from "../Context";
import { useContext, useState, useEffect } from "react";
import { TablePagination } from "@material-ui/core";

export default function BasicTable() {
  const { filteredDataArray } = useContext(TheContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // useEffect(() => {
  //   set
  //   // console.log("from Table :", filteredDataArray);
  // }, [filteredDataArray]);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredDataArray.length - page * rowsPerPage);

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
          {filteredDataArray
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item) => (
              <TableRow
                key={item.S_no}
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
                <TableCell>$ {item.acv} K</TableCell>
                <TableCell>$ {item.tcv} K</TableCell>
                <TableCell>$ {item.revenue} K</TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={8} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={filteredDataArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
