/** @jsxImportSource @emotion/react */

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, css, useTheme } from "@mui/material";

const SocialMediaButtons: React.FC = () => {
  const theme = useTheme();

  return (
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
        href="https://github.com/Silventino"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>

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
        href="mailto:silventino.dev@gmail.com"
        // target="_blank"
      >
        <MailIcon />
      </IconButton>
    </div>
  );
};

export default SocialMediaButtons;
