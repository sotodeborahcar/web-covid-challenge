import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import SwitchAge from "./SwitchAge";
import ReactExport from "react-export-excel";

const columns = [
  { id: "first_name", label: "FIRST NAME", minWidth: 100 },
  { id: "last_name", label: "LAST NAME", minWidth: 100 },
  { id: "country", label: "COUNTRY", minWidth: 150 },
  { id: "age", label: "AGE", minWidth: 50 },
  { id: "gender", label: "GENDER", minWidth: 50 },
];

const createData = (first_name, last_name, country, age, gender, live) => {
  return { first_name, last_name, country, age, gender, live };
};

const useStyles = makeStyles({
  root: {},
  container: {
    width: "100%",
  },
  row: {
    backgroundColor: "#57ea9a",
  },
  text1: {
    color: "red",
    marginRight: "10px",
  },
  text2: {
    color: "#01081c",
    marginLeft: "10px",
  },
  textInfo: {
    margin: "10px",
    display: "inline-flex",
    alignSelf: "end",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tablaExcel: {
    margin: 15,
    backgroundColor: "#57ea9a",
  },
});

const Tabla = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [queryParams, setQueryParams] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    const searchInfected = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected${queryParams}`;
    axios.get(searchInfected).then((res) => {
      let newRows = res.data.map((res) => {
        let genderOpc = JSON.stringify(res.female);
        genderOpc === "true" ? (genderOpc = "Female") : (genderOpc = "Male");

        return createData(
          res.first_name,
          res.last_name,
          res.country,
          res.age,
          genderOpc,
          res.live
        );
      });
      setRows(newRows);
    });
  }, [queryParams]);

  return (
    <Container className={classes.root}>
      <div className={classes.switchAge}>
        <SwitchAge queryParams={queryParams} setQueryParams={setQueryParams} />
      </div>

      <Paper className={classes.container}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className={classes.row}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      style={{ color: row.live ? "#01081c" : "red" }}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            style={{ color: "inherit" }}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <div className={classes.textInfo}>
        <Typography className={classes.text1} variant="h7" gutterBottom>
          Pacientes fallecidos
        </Typography>

        <Typography className={classes.text2} variant="h7" gutterBottom>
          Pacientes vivos
        </Typography>
      </div>

      <div>
        <ExcelFile
          element={
            <button className={classes.tablaExcel}>Export to Excel</button>
          }
        >
          <ExcelSheet name="CasosPositivos" />
        </ExcelFile>
      </div>
    </Container>
  );
};

export default Tabla;
