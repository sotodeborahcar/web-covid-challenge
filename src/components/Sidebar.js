import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  drawer: {
    color: "white",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: "20px",
    backgroundColor: "#57ea9a",
    color: "#01081c",
  },
}));

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Drawer
        anchor="left"
        className={{ paper: classes.drawer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push(`/`);
            }}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push(`/cases`);
            }}
          >
            <ListItemText>Cases</ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push(`/countries`);
            }}
          >
            <ListItemText>Countries</ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              history.push(`/newInfect`);
            }}
          >
            <ListItemText>New Infect</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.menuButton}
        disableRiple
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </div>
  );
};

export default Sidebar;
