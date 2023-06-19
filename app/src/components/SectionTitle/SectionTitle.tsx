import { Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  marginBottom?: number;
};

const SectionTitle: React.FC<Props> = ({ children, marginBottom }) => {
  return (
    <Typography
      variant="h2"
      fontWeight={600}
      color={"primary"}
      width={"100%"}
      marginBottom={marginBottom ?? 2}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
