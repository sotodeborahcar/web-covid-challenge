import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import axios from "axios";
import containerTotalCasos from "../components/containerTotalCasos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Cases from "./Cases";
import Countries from "./Countries";
import NewInfect from "./NewInfect";
import Footer from "../components/Footer";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#5a605d1b",
    },
  },
  container: {
    flexGrow: 1,
    padding: 0,
  },
}));

const App = () => {
  const classes = useStyles();
  const [totalCasos, setTotalCasos] = useState("");

  useEffect(() => {
    const searchInfected = `https://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected`;
    axios.get(searchInfected).then((res) => {
      console.log(res.data);
      setTotalCasos(res.data.length);
    });
  }, [totalCasos]);

  return (
    <>
      <containerTotalCasos.Provider
        value={{
          totalCasos: totalCasos,
          updateTotalCasos: (param) => setTotalCasos(param),
        }}
      >
        <BrowserRouter>
          <Container className={classes.container}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cases" component={Cases} />
              <Route exact path="/countries" component={Countries} />
              <Route exact path="/newInfect" component={NewInfect} />
            </Switch>

            <Footer />
          </Container>
        </BrowserRouter>
      </containerTotalCasos.Provider>
    </>
  );
};

export default App;
