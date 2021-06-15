import React from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Imagen from "./Imagen";
import { useHistory } from "react-router-dom";
// import { Hidden } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TabsPanel from "./TabsPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#01081c",
  },

  menuButton: {
    marginRight: "20px",
    backgroundColor: "#57ea9a",
    color: "#01081c",
  },
  logo: {
    display: "flex",
    maxWidth: 100,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
  title: {
    flexGrow: 1,
    color: "#57ea9a",
    marginLeft: "20px",
  },
  image: {
    borderRadius: "50%",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            {/* <Typography variant="h6" className={classes.title}>
              COVID-19
            </Typography> */}

            <Hidden smDown>
              <TabsPanel />
            </Hidden>

            <Imagen
              className={classes.logo}
              ruta={
                "https://user-images.githubusercontent.com/63796774/120896551-7c208780-c5f8-11eb-88ba-608f6d9dfe59.png"
              }
              onClick={() => {
                history.push("/");
              }}
            />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar;
