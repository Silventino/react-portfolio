/** @jsxImportSource @emotion/react */

import { Grid, Typography, css, useTheme } from "@mui/material";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import { Typewriter } from "../../../Typewriter";
import SocialMediaButtons from "./components/SocialMediaButtons";

type Props = {
  id: string;
};

const HomeSection: React.FC<Props> = ({ id }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
    <SectionContainer id={id} color={primaryColor}>
      <div />

      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        maxWidth={"900px"}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" fontWeight={600} color={"white"}>
            {"Hi,"}
          </Typography>
          <Typography variant="h1" fontWeight={600} color={"white"}>
            {"I'm "}
            <span color="secondary">Pedro</span>
          </Typography>

          <Typewriter
            fixedText={""}
            phrases={["Front-end developer", "Mobile developer", "Cat lover ♥"]}
            variant="h3"
            fontWeight={300}
            color={"white"}
          />

          <SocialMediaButtons />
        </Grid>

        <Grid item xs={12} sm={6} display={"flex"} alignItems={"center"}>
          <img
            src="/assets/me.png"
            alt="Pedro"
            css={css`
              max-width: 475px;
              width: 100%;
            `}
          />
        </Grid>
      </Grid>

      <div />
    </SectionContainer>
  );
};

export default HomeSection;
