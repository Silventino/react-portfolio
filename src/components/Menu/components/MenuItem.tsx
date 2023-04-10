/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  url: string;
  icon: ReactNode;
  name: string;
  showName: boolean;
  focused: boolean;
};

const MenuItem: React.FC<Props> = ({ url, icon, name, showName, focused }) => {
  return (
    <Link to={url} css={{ display: "flex", alignItems: "center", height: 50 }}>
      <div css={{ height: 50, display: "flex", alignItems: "center" }}>
        {icon}
      </div>
      {showName ? (
        <p
          css={{
            margin: 0,
            marginLeft: 25,
            height: 50,
            color: focused ? "#fff" : "#888",
            display: "flex",
            alignItems: "center",
          }}
        >
          {name}
        </p>
      ) : null}
    </Link>
  );
};

export default MenuItem;
