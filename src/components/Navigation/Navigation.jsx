import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import FlagIcon from "@mui/icons-material/Flag";
import PublicIcon from "@mui/icons-material/Public";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  drawerPaper: {
    background: "red",
  },
});

const itemsList = [
  {
    text: "Global",
    icon: <PublicIcon />,
    link: "/global",
  },
  {
    text: "Countries",
    icon: <FlagIcon />,
    link: "/countries",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
];

export default function Navigation() {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      sx={{
        background: "red",
      }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <NavLink to={link} key={index}>
              <ListItem button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
}
