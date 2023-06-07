/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Box, Grid, Hidden, Typography, useTheme } from "@mui/material";
import { purple, red, yellow } from "@mui/material/colors";
import { ProgressBar } from "../../../../ProgressBar";

const AboutContent: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        max-width: 900px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        ${theme.breakpoints.down("md")} {
          flex-direction: column;
        }
      `}
    >
      <img
        src="/assets/me_round.png"
        alt="Pedro"
        css={css`
          max-width: 200px;
          width: 40%;
          ${theme.breakpoints.down("md")} {
            margin-bottom: 15px;
          }
        `}
      />
      <Hidden mdDown>
        <div
          css={css`
            margin-left: 10px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 15px solid white;
            transform: translateY(-5px);
          `}
        />
      </Hidden>
      <div
        css={css`
          box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
          border-radius: 20px;
          background-color: white;
          padding: 40px;
          ${theme.breakpoints.down("sm")} {
            padding: 20px;
          }
        `}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <Typography fontWeight={"light"}>
              {`I'm a software engineer based in Brazil 🇧🇷 with 4 years of experience in the software industry.`}
            </Typography>
            <br />
            <Typography fontWeight={"light"}>
              {`My focus area for the past few years has been frontend development with React, but I'm also skilled in backend development with NodeJS. Having worked with many legacy codebases has made refactoring my specialty 🔧.`}
            </Typography>
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} sm={5}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                height={"100%"}
              >
                <ProgressBar label="React" value={90} color={red[400]} />
                <ProgressBar
                  label="TypeScript"
                  value={85}
                  color={yellow[800]}
                />
                <ProgressBar label="NodeJS" value={70} color={purple[300]} />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};

export default AboutContent;
