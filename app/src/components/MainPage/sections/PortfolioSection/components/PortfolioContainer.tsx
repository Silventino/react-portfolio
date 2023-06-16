/** @jsxImportSource @emotion/react */

import { Grid } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const PortfolioContainer: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Grid>
  );
};

export default PortfolioContainer;
