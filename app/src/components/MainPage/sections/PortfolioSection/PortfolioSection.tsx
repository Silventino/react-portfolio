/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioItem from "./components/PortfolioItem";

type Props = {
  id: string;
};

type Work = {};

const PortfolioSection: React.FC<Props> = ({ id }) => {
  const works = [{}, {}, {}, {}, {}, {}] as Work[];

  return (
    <SectionContainer id={id}>
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioContainer>
        {works?.length > 0 &&
          works.map((work, i) => (
            <PortfolioItem key={`work_${i}`}>
              <div
                css={css`
                  width: 200px;
                  height: 200px;
                  background-color: #f00;
                `}
              />
            </PortfolioItem>
          ))}
      </PortfolioContainer>

      <div />
    </SectionContainer>
  );
};

export default PortfolioSection;
