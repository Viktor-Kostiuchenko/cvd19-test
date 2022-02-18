import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import FlagIcon from "@mui/icons-material/Flag";
import PublicIcon from "@mui/icons-material/Public";

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
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#22272d",
        },
      }}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <NavLink
              to={link}
              key={index}
              className="navLink"
              activeClassName="navActiveLink"
            >
              <ListItem button key={text}>
                {icon && (
                  <ListItemIcon
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fill: "#ffffff",
                      },
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
}
