/** @jsxImportSource @emotion/react */

// eslint-disable-next-line import/named
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  id: string;
  children?: React.ReactNode;
  color?: string;
};

const SectionContainer: React.FC<Props> = ({ id, children, color }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        height: 100vh;
        width: 100%;
        background-color: ${color ? color : "#f9f9ff"};
        overflow: hidden;
        padding: 50px;
        ${theme.breakpoints.down("sm")} {
          padding: 20px;
        }
      `}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
