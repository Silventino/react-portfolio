/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { calcPixels } from "../../../helper";

type Props = {
  url: string;
  icon: ReactNode;
  name: string;
  showName: boolean;
  focused: boolean;
};

const MenuItem: React.FC<Props> = ({ url, icon, name, showName, focused }) => {
  return (
    <Link to={url} css={{ display: "block" }}>
      <button css={{ marginBottom: calcPixels(10) }}>
        <div
          css={{
            width: calcPixels(64),
            height: calcPixels(64),
            backgroundColor: focused ? "#181919" : "",
            borderRadius: "50%",
          }}
        >
          <div
            css={{
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {icon}
          </div>
        </div>

        {showName ? <p>{name}</p> : null}
      </button>
    </Link>
  );
};

export default MenuItem;
