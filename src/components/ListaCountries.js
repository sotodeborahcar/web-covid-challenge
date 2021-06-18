import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "20px",
    "& > *": {
      margin: "10px",
    },
  },
  chip: {
    backgroundColor: "#01081c",
    color: "#57ea9a",
    textTransform: "uppercase",
  },
}));

const ListaCountries = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchCountries = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`;
    axios.get(searchCountries).then((res) => {
      setResults(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      {results.map((result) => {
        return (
          <Chip
            className={classes.chip}
            icon={<SupervisedUserCircleIcon />}
            label={result.name}
          />
        );
      })}
    </div>
  );
};

export default ListaCountries;
