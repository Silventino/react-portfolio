/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Button, Hidden, Typography } from "@mui/material";

const AboutFooter: React.FC = () => {
  return (
    <Hidden>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Typography variant="h5" fontWeight={"bold"} marginBottom={1}>
          Want to know more?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert("todo")}
        >
          Download CV
        </Button>
      </div>
    </Hidden>
  );
};

export default AboutFooter;
