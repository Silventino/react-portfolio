import { Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <Typography
      variant="h2"
      fontWeight={600}
      color={"primary"}
      width={"100%"}
      marginBottom={2}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
