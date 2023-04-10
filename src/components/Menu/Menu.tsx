/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { MenuContext } from "./MenuContext";

import MenuItem from "./components/MenuItem";
import { css } from "@emotion/react";
import { SM_SCREEN } from "../../helper";
import AboutIcon from "./components/icons/AboutIcon";
import EducationIcon from "./components/icons/EducationIcon";
import WorksIcon from "./components/icons/WorksIcon";
import ContactIcon from "./components/icons/ContactIcon";
import HomeIcon from "./components/icons/HomeIcon";

export const MENU_SIZE_CLOSED = 80;
export const MENU_SIZE_OPEN = 250;

const Menu = () => {
  const { isMenuOpen } = useContext(MenuContext);

  const menuItems = [
    {
      url: "/#home",
      renderIcon: (isFocused: boolean) => (
        <HomeIcon width={20} height={20} fill={isFocused ? "#fff" : "#888"} />
      ),
      name: "Home",
    },
    {
      url: "/#about",
      renderIcon: (isFocused: boolean) => (
        <AboutIcon width={20} height={20} fill={isFocused ? "#fff" : "#888"} />
      ),
      name: "About",
    },
    {
      url: "/#experience",
      renderIcon: (isFocused: boolean) => (
        <EducationIcon
          width={20}
          height={20}
          fill={isFocused ? "#fff" : "#888"}
        />
      ),
      name: "Experience",
    },
    {
      url: "/#portfolio",
      renderIcon: (isFocused: boolean) => (
        <WorksIcon width={20} height={20} fill={isFocused ? "#fff" : "#888"} />
      ),
      name: "Portfolio",
    },
    {
      url: "/#contact",
      renderIcon: (isFocused: boolean) => (
        <ContactIcon
          width={20}
          height={20}
          fill={isFocused ? "#fff" : "#888"}
        />
      ),
      name: "Contact",
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
          focused={false}
          url={item.url}
          icon={item.renderIcon(false)}
          name={item.name}
          showName={isMenuOpen}
        />
      ))}
    </div>
  );
};

export default Menu;
