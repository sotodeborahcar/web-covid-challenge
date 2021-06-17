import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Container } from "@material-ui/core";
import Sidebar from "./Sidebar";
import TabsPanel from "./TabsPanel";
import containerTotalCasos from "./containerTotalCasos";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",

    flexGrow: 1,
    backgroundColor: "#01081c",
  },

  logo: {
    cursor: "pointer",
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
  casos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 150,
    padding: 4,
    border: "1px solid #57ea9a",
  },
  a: {
    textDecoration: "none",
    color: "#57ea9a",
    marginLeft: 20,
    fontSize: 20,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { totalCasos } = useContext(containerTotalCasos);

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.root}>
          <Hidden mdUp>
            <Sidebar />
          </Hidden>

          <Hidden smDown>
            <TabsPanel />
          </Hidden>

          <Container className={classes.casos}>
            <Typography align="center" variant="caption" gutterBottom>
              {`Casos de Covid-19 : ${totalCasos} personas`}
            </Typography>
          </Container>

          <Typography className={classes.logo}>
            <a
              href="https://blockinar.com/#/en"
              target="_blank"
              className={classes.a}
            >
              BLOCKINAR
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
