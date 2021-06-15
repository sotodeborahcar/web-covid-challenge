import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PublicIcon from "@material-ui/icons/Public";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  tabs: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  tab: {
    "&:hover": {
      transform: `scale(1.1)`,
      color: "#57ea9a",
      backgroundColor: "transparent",
    },
    color: "#ffffff",
  },
}));

const TabsPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabs} color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            className={classes.tab}
            onClick={() => {
              history.push("/");
            }}
            label="Home"
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            onClick={() => {
              history.push(`/cases`);
            }}
            label="Cases"
            icon={<SupervisorAccountIcon />}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            onClick={() => {
              history.push(`/countries`);
            }}
            label="countries"
            icon={<PublicIcon />}
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            onClick={() => {
              history.push(`/newInfect`);
            }}
            label="newInfect"
            icon={<GroupAddIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default TabsPanel;
