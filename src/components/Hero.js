import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(https://estaticos-cdn.elperiodico.com/clip/ae0b9b68-f233-46cc-bc01-6ef32f7a9e80_alta-libre-aspect-ratio_default_0.jpg)`,
    backgroundSize: "cover",
    // position: "relative",
    // padding: 0,
    height: "650px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  title: {
    maxWidth: 450,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
    color: "#57ea9a",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Container className={classes.Container} maxWidth="false">
        <Typography className={classes.title} variant="h1" gutterBottom>
          Coronavirus
        </Typography>
        <Typography className={classes.title} variant="h4" gutterBottom>
          Avance de la pandemia
        </Typography>
      </Container>
    </main>
  );
};
export default Hero;
