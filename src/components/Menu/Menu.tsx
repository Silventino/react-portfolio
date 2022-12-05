/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { calcPixels } from "../../helper";
import { MenuContext } from "./MenuContext";
import { useLocation } from "react-router-dom";

import MenuItem from "./components/MenuItem";
import HomeIcon from "./components/HomeIcon";
import UserIcon from "./components/UserIcon";

export const MENU_SIZE_CLOSED = 80;
export const MENU_SIZE_OPEN = 360;
const MENU_PADDING_LEFT = 16;

const Menu = () => {
  const { isMenuOpen, isMenuVisible } = useContext(MenuContext);
  const location = useLocation();

  console.log("location", location);

  const menuItems = [
    {
      url: "/",
      renderIcon: (isFocused: boolean) => (
        <HomeIcon width={24} height={24} fill={isFocused ? "#fff" : "#888"} />
      ),
      name: "Home",
    },
    {
      url: "/account",
      renderIcon: (isFocused: boolean) => (
        <UserIcon width={24} height={24} fill={isFocused ? "#fff" : "#888"} />
      ),
      name: "Minha Conta",
    },
  ];

  return (
    <div
      css={{
        transition: "all 0.5s ease-in-out",
        paddingLeft: calcPixels(16),
        width: isMenuOpen
          ? calcPixels(MENU_SIZE_OPEN - MENU_PADDING_LEFT)
          : calcPixels(MENU_SIZE_CLOSED - MENU_PADDING_LEFT),
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        opacity: isMenuVisible ? 1 : 0,
      }}
    >
      <div
        css={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            focused={location.pathname === item.url}
            url={item.url}
            icon={item.renderIcon(location.pathname === item.url)}
            name={item.name}
            showName={isMenuOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
