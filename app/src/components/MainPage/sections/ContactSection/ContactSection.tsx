/** @jsxImportSource @emotion/react */

import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  css,
  useTheme,
} from "@mui/material";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";
import { useState } from "react";

type Props = {
  id: string;
};

const ContactSection: React.FC<Props> = ({ id }) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async () => {
    setLoading(true);
    await fetch("https://newsendmail-ue6mig43hq-uc.a.run.app", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ name, email, subject, message }),
    });

    setLoading(false);
    setSent(true);
  };

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
        {sent ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flex={1}
          >
            <Typography fontSize={80}>🎉</Typography>
            <Typography variant="h3" fontWeight={"bold"} marginBottom={2}>
              Message sent!
            </Typography>
            <Typography textAlign={"center"}>
              Thank you for your message!
            </Typography>
            <Typography textAlign={"center"}>
              I'll get back to you as soon as possible.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Name"
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                disabled={loading}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={5}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {loading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
              )}
            </Grid>
          </Grid>
        )}
      </div>

      <div />
    </SectionContainer>
  );
};

export default ContactSection;
