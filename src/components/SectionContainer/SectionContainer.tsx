/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

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
        background-color: ${color ? color : "#eee"};
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
