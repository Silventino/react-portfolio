/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";
import AboutContent from "./components/AboutContent";
import AboutFooter from "./components/AboutFooter";

type Props = {
  id: string;
};

const AboutSection: React.FC<Props> = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <SectionTitle>About Me</SectionTitle>

      <AboutContent />

      <AboutFooter />
    </SectionContainer>
  );
};

export default AboutSection;
