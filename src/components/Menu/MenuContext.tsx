import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

type Context = {
  isMenuVisible: boolean;
  setIsMenuVisible: (x: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (x: boolean) => void;
};

const initialContextValue = {
  isMenuVisible: false,
  setIsMenuVisible: () => {},
  isMenuOpen: false,
  setIsMenuOpen: () => {},
} as Context;

export const MenuContext = createContext<Context>(initialContextValue);

function MenuContextProvider({ children }: Props): React.ReactElement {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <MenuContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
