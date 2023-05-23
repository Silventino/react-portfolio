/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";

type Props = {
  id: string;
};

const ContactSection: React.FC<Props> = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <SectionTitle>Contact</SectionTitle>
    </SectionContainer>
  );
};

export default ContactSection;
