/** @jsxImportSource @emotion/react */

import { Grid, Typography } from "@mui/material";
import { css } from "@emotion/react";
import PortfolioItemData from "../types/PortfolioItemData";

type Props = { item: PortfolioItemData };

const PortfolioItem: React.FC<Props> = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4} display={"flex"}>
      <div
        css={css`
          width: 100%;
          background-color: white;
          box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 25px;
        `}
      >
        <img
          src={item.image}
          alt={item.title}
          css={css`
            object-fit: contain;
            height: 150px;
            position: relative;
            margin-bottom: 10px;
          `}
        />

        <div
          css={css`
            height: 125px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
          `}
        >
          <Typography
            width={"100%"}
            color={"primary"}
            fontWeight={"bold"}
            variant="h6"
            textAlign={"center"}
          >
            {item.title}
          </Typography>

          <Typography width={"100%"} color={"primary"}>
            {item.description}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default PortfolioItem;
