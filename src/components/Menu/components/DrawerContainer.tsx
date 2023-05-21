/** @jsxImportSource @emotion/react */

import { Drawer, useTheme } from "@mui/material";
import { useState } from "react";
import { MENU_SIZE_OPEN } from "../Menu";
import { grey } from "@mui/material/colors";

type Props = {
  children: React.ReactNode;
};

const DrawerContainer: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const defaultMenuStyles = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: primaryColor,
    width: MENU_SIZE_OPEN,
    padding: "56px 40px 16px 40px",
    borderColor: grey[800],
  };

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        color="primary"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": defaultMenuStyles,
        }}
      >
        {children}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": defaultMenuStyles,
        }}
        open
      >
        {children}
      </Drawer>
    </>
  );
};

export default DrawerContainer;
