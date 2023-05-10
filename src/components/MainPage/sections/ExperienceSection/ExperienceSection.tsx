/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";

type Props = {
  id: string;
};

const ExperienceSection: React.FC<Props> = ({ id }) => {
  return <SectionContainer id={id}>{id}</SectionContainer>;
};

export default ExperienceSection;
