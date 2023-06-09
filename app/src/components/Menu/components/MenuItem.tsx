/** @jsxImportSource @emotion/react */

import { useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  url: string;
  icon: ReactNode;
  name: string;
  focused: boolean;
};

const MenuItem: React.FC<Props> = ({ url, icon, name, focused }) => {
  const theme = useTheme();
  const focusedColor = theme.palette.secondary.main;

  return (
    <a
      href={url}
      css={{
        display: "flex",
        alignItems: "center",
        height: 50,
      }}
    >
      <div css={{ height: 50, display: "flex", alignItems: "center" }}>
        {icon}
      </div>
      <p
        css={{
          margin: 0,
          marginLeft: 20,
          height: 50,
          color: focused ? focusedColor : "#fff",
          display: "flex",
          alignItems: "center",
          fontWeight: 700,
        }}
      >
        {name}
      </p>
    </a>
  );
};

export default MenuItem;
