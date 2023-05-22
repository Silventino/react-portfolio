/** @jsxImportSource @emotion/react */

import { Grid, IconButton, Typography, css, useTheme } from "@mui/material";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { Typewriter } from "../../../Typewriter";

type Props = {
  id: string;
};

const HomeSection: React.FC<Props> = ({ id }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
    <SectionContainer id={id} color={primaryColor}>
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        `}
      >
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
              phrases={[
                "Front-end developer",
                "Mobile developer",
                "Cat lover ♥",
              ]}
              variant="h3"
              fontWeight={300}
              color={"white"}
            />

            <div
              css={css`
                margin-top: 10px;
                left: -12px;
                position: relative;
                ${theme.breakpoints.down("sm")} {
                  display: flex;
                  justify-content: center;
                  margin-top: 25px;
                }
              `}
            >
              <IconButton
                size="large"
                color="secondary"
                href="https://linkedin.com/in/silventino"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                size="large"
                color="secondary"
                href="https://twitter.com/Silventino"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>

              <IconButton
                size="large"
                color="secondary"
                href="https://www.instagram.com/silventino/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                size="large"
                color="secondary"
                href="mailto:silventino.dev@gmail.com"
                // target="_blank"
              >
                <MailIcon />
              </IconButton>
            </div>
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
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
