/** @jsxImportSource @emotion/react */

import { Grid } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const PortfolioItem: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Grid>
  );
};

export default PortfolioItem;
