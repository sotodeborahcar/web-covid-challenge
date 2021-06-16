import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tabla from "../components/Tabla";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  title: {
    marginTop: "30px",
    textAlign: "center",
    maxWidth: 450,
    color: "#01081c",
  },
}));

const Cases = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Container className={classes.Container}>
        <Typography className={classes.title} variant="h4" gutterBottom>
          Lista de casos positivos de COVID-19
        </Typography>

        <Container>
          <Tabla />
        </Container>
      </Container>
    </main>
  );
};
export default Cases;
