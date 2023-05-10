/** @jsxImportSource @emotion/react */

import CallIcon from "@mui/icons-material/Call";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";
import DrawerContainer from "./components/DrawerContainer";
import MenuItem from "./components/MenuItem";

export const MENU_SIZE_OPEN = 220;

const menuItems = [
  {
    url: "/#home",
    icon: <HomeIcon color="secondary" />,
    name: "Home",
  },
  {
    url: "/#about",
    icon: <PersonIcon color="secondary" />,
    name: "About",
  },
  {
    url: "/#experience",
    icon: <SchoolIcon color="secondary" />,
    name: "Experience",
  },
  {
    url: "/#portfolio",
    icon: <CollectionsBookmarkIcon color="secondary" />,
    name: "Portfolio",
  },
  {
    url: "/#contact",
    icon: <CallIcon color="secondary" />,
    name: "Contact",
  },
];

const Menu = () => {
  return (
    <DrawerContainer>
      <Typography
        variant="h5"
        color="white"
        align="center"
        fontWeight={900}
        fontSize={30}
      >
        silventino<span style={{ color: "#f00" }}>.</span>
      </Typography>

      <div>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            focused={false}
            url={item.url}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>

      <Typography color="grey" align="center">
        &copy; silventino
      </Typography>
    </DrawerContainer>
  );
};

export default Menu;
