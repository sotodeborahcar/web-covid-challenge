import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Sidebar from "./Sidebar";
import TabsPanel from "./TabsPanel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#01081c",
  },

  logo: {
    cursor: "pointer",
    "&:hover": {
      transform: `scale(1.2)`,
    },
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

  return (
    <div>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <Hidden mdUp>
            <Sidebar />
          </Hidden>

          <Hidden smDown>
            <TabsPanel />
          </Hidden>

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
