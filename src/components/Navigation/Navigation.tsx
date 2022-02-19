import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import FlagIcon from '@mui/icons-material/Flag';
import PublicIcon from '@mui/icons-material/Public';

const itemsList = [
  {
    text: 'Global',
    icon: <PublicIcon />,
    link: '/global',
    exact: false
  },
  {
    text: 'Countries',
    icon: <FlagIcon />,
    link: '/countries',
    exact: false
  },
  {
    text: 'About',
    icon: <InfoIcon />,
    link: '/',
    exact: true
  },
];

export default function Navigation() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#22272d',
        },
      }}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, link, exact } = item;
          return (
            <li key={index}>
              <NavLink
                exact={exact}
                to={link}
                className="navLink"
                activeClassName="navActiveLink"
              >
                <ListItem button key={text}>
                  {icon && (
                    <ListItemIcon
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fill: '#ffffff',
                        },
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            </li>
          );
        })}
      </List>
    </Drawer>
  );
}
