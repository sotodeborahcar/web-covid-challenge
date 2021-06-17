import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#01081c",
    height: "200px",
    color: "#ffff",
    padding: 30,
  },
  iconContainer: {
    display: "flex",
  },
  a: {
    margin: "20px",
  },
  icon: {
    margin: 10,
    color: "#57ea9a",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Typography variant="h5" gutterBottom>
        Hecho con ☕'s por Soto Deborah
      </Typography>
      <div className={classes.iconContainer}>
        <a
          className={classes.a}
          href="https://github.com/sotodeborahcar"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className={classes.icon}
            style={{
              fontSize: 30,
              transform: "scale(2)",
            }}
          />
        </a>

        <a
          className={classes.a}
          href="https://www.linkedin.com/in/deborah-carolina-soto-140987/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className={classes.icon}
            style={{
              fontSize: 35,
              transform: "scale(2)",
            }}
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
