/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";
import { Typography, useTheme } from "@mui/material";
import ExperienceItem from "./components/ExperienceItem";

type Props = {
  id: string;
};

const ExperienceSection: React.FC<Props> = ({ id }) => {
  const theme = useTheme();

  return (
    <SectionContainer id={id}>
      <SectionTitle>Experience</SectionTitle>

      <div
        css={css`
          background-color: white;
          box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          padding: 40px;
          ${theme.breakpoints.down("sm")} {
            padding: 20px;
          }
        `}
      >
        <ExperienceItem
          title="Tech Lead - Globo"
          date="04/2022 - present"
          description="
            As Tech Lead for the HTML version of Globoplay, I oversee a team of
            five developers, ensuring timely and high-quality completion of
            tasks. I actively contribute to refining new features, collaborating
            closely with product owners to meet user and technical requirements.
          "
        />

        <ExperienceItem
          title="Fullstack Developer - Edil System"
          date="01/2020 - 04/2022"
          description="
            I created EDsys, a responsive React app that integrates with a legacy
            COBOL system. It uses a robust NodeJS backend using TypeScript, TypeORM,
            and MySQL. The app is accessible on web and mobile, including Android
            via Capacitor.
          "
        />

        <ExperienceItem
          title="Mobile Developer - Delta Group"
          date="12/2018 - 01/2020"
          description="
            Developed three cutting-edge hybrid apps (Android/iOS) with React Native.
            Historicar enables users to search vehicle registration plates for complete history.
            DeltaFleet tracks real-time vehicle geolocation and generates reports.
            DeltaFleet Prestador helps Delta workers manage their tasks.
          "
        />

        <ExperienceItem
          title="Bachelor of Computer Science - UFLA"
          date="01/2016 - 06/2021"
          description="Obtained Bachelor's degree in Computer Science with a remarkable average score of 90/100."
        />
      </div>

      <div />
    </SectionContainer>
  );
};

export default ExperienceSection;
