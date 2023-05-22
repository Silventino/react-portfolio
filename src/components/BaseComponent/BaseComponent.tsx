/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import Menu from "../Menu";
import { MENU_SIZE_OPEN } from "../Menu/Menu";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

type Props = {
  hasMenu?: boolean;
  children: ReactNode;
};

const BaseComponent: React.FC<Props> = ({ hasMenu, children }) => {
  const theme = useTheme();
  if (!hasMenu) {
    return <div css={{ height: "100%", width: "100%" }}>{children}</div>;
  }

  return (
    <div css={{ height: "100%", width: "100%" }}>
      <Menu />
      <div
        css={css`
          height: 100%;
          margin-left: 0px;
          ${theme.breakpoints.up("md")} {
            margin-left: ${MENU_SIZE_OPEN}px;
          }
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default BaseComponent;
