/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";

type Props = {
  id: string;
};

const PortfolioSection: React.FC<Props> = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <SectionTitle>Portfolio</SectionTitle>
    </SectionContainer>
  );
};

export default PortfolioSection;
