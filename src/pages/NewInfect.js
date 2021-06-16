import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 100,
    marginTop: 50,
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 40,
  },
}));

const NewInfect = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Panilla de recolección de datos sobre nuevos casos
        </Typography>
        <Form />
      </Container>
    </>
  );
};
export default NewInfect;
