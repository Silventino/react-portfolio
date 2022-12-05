/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { calcPixels } from "../../helper";
import Menu from "../Menu";
import { MENU_SIZE_CLOSED } from "../Menu/Menu";

type Props = {
  hasMenu?: boolean;
  children: ReactNode;
};

const BaseComponent: React.FC<Props> = ({ hasMenu, children }) => {
  if (!hasMenu) {
    return <div css={{ height: "100%", width: "100%" }}>{children}</div>;
  }

  return (
    <div css={{ height: "100%", width: "100%" }}>
      <Menu />
      <div css={{ paddingLeft: calcPixels(MENU_SIZE_CLOSED), height: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default BaseComponent;
