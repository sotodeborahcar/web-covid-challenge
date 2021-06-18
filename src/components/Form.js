import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { CardContent, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import containerTotalCasos from "./containerTotalCasos";

const startForm = {
  first_name: "",
  last_name: "",
  age: 0,
  country: "",
  female: "",
  live: "",
};

let gender = ["Femenino", "Masculino", "Indefinido", "Ninguno"];

const useStyles = makeStyles(() => ({
  root: {
    width: "250",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      width: "100%",
    },
    margin: "2px 5px",
  },
  title: {
    fontSize: 20,
  },
  input: {
    marginBottom: 15,
    minWidth: 200,
  },
  btnEnviar: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#57ea9a",
    width: 80,
    fontWeight: "bold",
  },
}));

const Form = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState(startForm);
  const [countries, setCountries] = useState([]);
  // const [open, setOpen] = React.useState(false);
  const { updateTotalCasos } = useContext(containerTotalCasos);
  let validForm = {};

  const parseForm = () => {
    form.female === "Femenino"
      ? (validForm = {
          ...form,
          female: true,
        })
      : (validForm = {
          ...form,
          female: false,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    parseForm();
    console.log(validForm);
    axios
      .post(
        "https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected",
        validForm
      )
      .then((res) => {
        console.log(res);
        updateTotalCasos("");
        // setOpen(true);
        setForm(startForm);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeNum = (e) => {
    setForm({
      ...form,
      [e.target.id]: parseInt(e.target.value),
    });
  };

  useEffect(() => {
    const searchNewDates = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries`;
    axios.get(searchNewDates).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <Container className={classes.root}>
      <Card>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Formulario
          </Typography>

          <form
            className={classes.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <TextField
              className={classes.input}
              id="first_name"
              label="First Name"
              variant="filled"
              placeholder="Ingrese nombres"
              helperText="*Campo obligatorio"
              onChange={handleChange}
              value={form.first_name}
              fullWidth
              required
            />
            <TextField
              className={classes.input}
              id="last_name"
              label="Last Name"
              variant="filled"
              placeholder="Ingrese apellidos"
              helperText="*Campo obligatorio"
              onChange={handleChange}
              value={form.last_name}
              fullWidth
              required
            />
            <TextField
              className={classes.input}
              id="age"
              label="Age"
              variant="filled"
              type="number"
              onChange={handleChangeNum}
              value={form.age}
              inputProps={{
                min: 0,
                max: 100,
              }}
              readOnly
              margin="normal"
            />
            <FormControl className={classes.input}>
              <InputLabel htmlFor="select country" shrink>
                Country
              </InputLabel>
              <NativeSelect
                onChange={handleChange}
                value={form.country}
                inputProps={{
                  name: "country",
                  id: "country",
                }}
              >
                <option value="">Elija pais</option>
                {countries &&
                  countries.map((country) => {
                    return (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    );
                  })}
              </NativeSelect>
            </FormControl>

            <FormControl className={classes.input}>
              <InputLabel htmlFor="select gender" shrink>
                Gender
              </InputLabel>
              <NativeSelect
                onChange={handleChange}
                value={form.female}
                inputProps={{
                  name: "female",
                  id: "female",
                }}
              >
                <option value="">None</option>
                {gender &&
                  gender.map((gender) => {
                    return (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    );
                  })}
              </NativeSelect>
            </FormControl>

            <FormControl className={classes.input}>
              <InputLabel htmlFor="alive or dead?" shrink>
                ¿Se encuentra con vida?
              </InputLabel>
              <NativeSelect
                onChange={handleChangeNum}
                value={form.live}
                inputProps={{
                  name: "live",
                  id: "live",
                }}
              >
                <option value="">Elija una opción</option>
                <option value={1}>SI</option>
                <option value={2}>NO</option>
              </NativeSelect>
            </FormControl>

            <div className={classes.btnEnviar}>
              <Button type="submit" size="large">
                Add
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Form;
