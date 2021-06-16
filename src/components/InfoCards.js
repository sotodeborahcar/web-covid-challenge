import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "./Cards";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const InfoCards = () => {
  const classes = useStyles();
  return (
    <Container>
      <Cards />
      <Cards />
      <Cards />
    </Container>
  );
};

export default InfoCards;
