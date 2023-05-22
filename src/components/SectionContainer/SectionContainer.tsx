/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { grey } from "@mui/material/colors";

type Props = {
  id: string;
  children?: React.ReactNode;
  color?: string;
};

const SectionContainer: React.FC<Props> = ({ id, children, color }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
        background-color: ${color ? color : grey[300]};
        overflow: hidden;
        padding: 50px;
      `}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
