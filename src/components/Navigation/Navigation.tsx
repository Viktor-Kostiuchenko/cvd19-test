import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import FlagIcon from '@mui/icons-material/Flag';
import PublicIcon from '@mui/icons-material/Public';
import s from './Navigation.module.scss'

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
          backgroundColor: '#2a3038',
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
                className={s.navLink}
                activeClassName={s.navActiveLink}
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
