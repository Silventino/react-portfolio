/** @jsxImportSource @emotion/react */

import { Button, Grid, TextField, css, useTheme } from "@mui/material";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";

type Props = {
  id: string;
};

const ContactSection: React.FC<Props> = ({ id }) => {
  const theme = useTheme();
  return (
    <SectionContainer id={id}>
      <SectionTitle>Get in Touch</SectionTitle>

      <div
        css={css`
          background-color: white;
          box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          height: 100%;
          display: flex;
          flex-direction: row;

          padding: 40px 30px;
          ${theme.breakpoints.down("sm")} {
            padding: 30px 20px;
          }
        `}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField label="Your Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Subject" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" fullWidth multiline rows={5} />
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="secondary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </div>

      <div />
    </SectionContainer>
  );
};

export default ContactSection;
