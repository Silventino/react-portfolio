/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type Props = {
  id: string;
  children?: React.ReactNode;
};

const SectionContainer: React.FC<Props> = ({ id, children }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
      `}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
