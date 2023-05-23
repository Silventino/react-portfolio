/** @jsxImportSource @emotion/react */

import { Typography, css } from "@mui/material";

type Props = {
  title: string;
  date: string;
  description: string;
};

const ExperienceItem: React.FC<Props> = ({ title, date, description }) => {
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
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
