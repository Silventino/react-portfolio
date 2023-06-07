/** @jsxImportSource @emotion/react */

import { Typography, css, useTheme } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

type Props = {
  title: string;
  date: string;
  description: string;
  type: "SCHOOL" | "WORK";
};

const ExperienceItem: React.FC<Props> = ({
  title,
  date,
  description,
  type,
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        margin-bottom: 35px;
        position: relative;
      `}
    >
      {type === "SCHOOL" ? (
        <SchoolIcon
          // color={"secondary"}
          htmlColor={theme.palette.secondary.dark}
          css={css`
            position: absolute;
            left: -38px;
            background-color: white;
            height: 30px;
          `}
        />
      ) : (
        <WorkIcon
          // color={"secondary"}
          htmlColor={theme.palette.secondary.dark}
          css={css`
            position: absolute;
            left: -38px;
            background-color: white;
            height: 30px;
          `}
        />
      )}

      <Typography variant="h5" color={"primary"} fontWeight={"bold"}>
        {title}
      </Typography>
      <Typography fontWeight={100} fontSize={"0.9rem"} marginBottom={1}>
        {date}
      </Typography>
      <Typography>{description}</Typography>
    </div>
  );
};

export default ExperienceItem;
