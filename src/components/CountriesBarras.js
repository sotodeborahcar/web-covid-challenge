import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";

const useStyles = makeStyles(() => ({
  header: {
    margin: "20px",
  },
}));

const Countries = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  let countries = [];
  let data = {};
  let qtyInfected = [];
  let options = {};
  let colors = [];

  const listCountries = () => {
    countries = results.map((result) => {
      return result.name;
    });
  };

  const qtyInfectedCases = () => {
    qtyInfected = results.map((result) => {
      return result.infected;
    });
  };

  const settingData = () => {
    colors = results.map((result) => {
      return "#57ea9a";
    });
    data = {
      labels: countries,
      datasets: [
        {
          label: "Infected by country",
          data: qtyInfected,
          backgroundColor: colors,
          borderWidth: 1,
        },
      ],
    };

    options = {
      indexAxis: "y",
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Evolution by country",
        },
      },
    };
  };

  useEffect(() => {
    const searchCountries = `http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`;
    axios.get(searchCountries).then((res) => {
      setResults(res.data);
    });
  }, []);

  return (
    <div className={classes.header}>
      {results && listCountries()}
      {results && qtyInfectedCases()}
      {results && settingData()}

      <Bar data={data} options={options} />
    </div>
  );
};
export default Countries;
