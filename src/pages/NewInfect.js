import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container } from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import containerTotalCasos from "../components/containerTotalCasos";

const startForm = {
  first_name: "",
  last_name: "",
  age: 0,
  country: "",
  female: "",
  live: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewInfect = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState(startForm);
  const [countries, setCountries] = useState([]);
  const { updateTotCases } = useContext(containerTotalCasos);
  let validadForm = {};

  const handleSubmit = (e) => {
    e.prevenDefault();
    axios
      .post(
        "http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected",
        validadForm
      )
      .then((res) => {
        updateTotCases("");
        setForm(startForm);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    const searchNewDates = `https://restcountries.eu/rest/v2/all`;
    axios.get(searchNewDates).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="first_name"
        label="First Name"
        variant="filled"
        placeholder="Ingrese nombres"
        onChange={handleChange}
        value={form.first_name}
        id="first_name"
        fullWidth
        required
      />
      <TextField
        id="last_name"
        label="Last Name"
        variant="filled"
        placeholder="Ingrese apellidos"
        required
      />
      <TextField id="age" label="Age" variant="filled" />
      {/* <TextField id="countrie" label="Country" variant="filled" /> */}
    </form>
  );
};
export default NewInfect;
