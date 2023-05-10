/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";

type Props = {
  id: string;
};

const ContactSection: React.FC<Props> = ({ id }) => {
  return <SectionContainer id={id}>{id}</SectionContainer>;
};

export default ContactSection;
