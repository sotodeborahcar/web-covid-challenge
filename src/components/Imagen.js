import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Imagen = ({ ruta }) => {
  const useStyles = makeStyles({
    imgContainer: {
      display: "flex",
      width: "70px",
      height: "70px",
      marginRight: "20px",
    },
    img: {
      width: "100%",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.imgContainer}>
      <img className={classes.imgContainer} src={ruta} alt="img" />
    </div>
  );
};

export default Imagen;
