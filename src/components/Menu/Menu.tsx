/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { MenuContext } from "./MenuContext";
import { useLocation } from "react-router-dom";

import MenuItem from "./components/MenuItem";
import HomeIcon from "./components/HomeIcon";
import UserIcon from "./components/UserIcon";
import { css } from "@emotion/react";
import { SM_SCREEN } from "../../helper";

export const MENU_SIZE_CLOSED = 80;
export const MENU_SIZE_OPEN = 250;

const Menu = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const location = useLocation();

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
      css={css`
        @media (max-width: ${SM_SCREEN}px) {
          display: none;
        }
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${MENU_SIZE_OPEN}px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 40px 40px 40px;
        border-right: 1px solid hsla(0, 0%, 100%, 0.1);
      `}
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
  );
};

export default Menu;
