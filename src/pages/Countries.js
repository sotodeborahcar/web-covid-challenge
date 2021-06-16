import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CountriesBarras from "../components/CountriesBarras";
import ListaCountries from "../components/ListaCountries";

const useStyles = makeStyles(() => ({
  Container: {
    flexGrow: 1,
  },
  title: {
    marginTop: "30px",
    padding: "15px",
    textAlign: "center",
    color: "#ffff",
    backgroundColor: "#01081c",
  },
  title2: {
    marginTop: "30px",
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
  listaCountry: {
    margin: "15px",
  },
}));

const Countries = () => {
  const classes = useStyles();
  return (
    <Container className={classes.Container}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Lista de casos positivos de COVID-19
      </Typography>
      <CountriesBarras />
      <Typography className={classes.title2} variant="h6" gutterBottom>
        Paises que participan del proceso de testeos de su población
      </Typography>
      <ListaCountries className={classes.listaCountry} />
    </Container>
  );
};
export default Countries;
