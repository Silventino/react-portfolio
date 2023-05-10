/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import DrawerContainer from "./components/DrawerContainer";
import MenuItem from "./components/MenuItem";
import { menuItems } from "../MainPage/MainPage";

export const MENU_SIZE_OPEN = 220;

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
