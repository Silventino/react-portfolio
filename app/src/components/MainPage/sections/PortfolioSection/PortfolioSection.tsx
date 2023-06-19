/** @jsxImportSource @emotion/react */

import SectionContainer from "../../../SectionContainer/SectionContainer";
import { SectionTitle } from "../../../SectionTitle";
import PortfolioContainer from "./components/PortfolioContainer";
import PortfolioItem from "./components/PortfolioItem";
import PortfolioItemData from "./types/PortfolioItemData";

type Props = {
  id: string;
};

const PortfolioSection: React.FC<Props> = ({ id }) => {
  const works = [
    {
      title: "Globoplay",
      description:
        "Globoplay is a major streaming platform in Brazil, offering a wide range of TV shows, movies, and original content. It has a user base of millions and is accessible on various devices.",
      image: "/assets/portfolio/globoplay.png",
    },
    {
      title: "EDsys",
      description:
        "EDsys is a responsive Single-Page Application (SPA) that integrates with a legacy COBOL system, providing a seamless interface for accessing and interacting with the system's data.",
      image: "/assets/portfolio/globoplay.png",
    },
    {
      title: "Cardapp",
      description:
        "Cardapp is a mobile and web application that allows users to order food from restaurants and restaurants to manage their orders.",
      image: "/assets/portfolio/globoplay.png",
    },
    {
      title: "Delta Fleet",
      description:
        "DeltaFleet is an app that allows users to track the real-time geolocation of their vehicles, generate reports, and create alerts to track suspicious activities.",
      image: "/assets/portfolio/globoplay.png",
    },
    {
      title: "Delta Prestador",
      description:
        "DeltaFleet Prestador is an app designed specifically for Delta's workers, allowing them to check their daily tasks and upload photos to prove that tasks have been accomplished.",
      image: "/assets/portfolio/globoplay.png",
    },
    {
      title: "Historicar",
      description:
        "Historicar is a powerful app that allows users to search for a vehicle registration plate and view a complete history of that vehicle, including sales, accidents, thefts, and other relevant information.",
      image: "/assets/portfolio/globoplay.png",
    },
  ] as PortfolioItemData[];

  return (
    <SectionContainer id={id}>
      <SectionTitle marginBottom={6}>Portfolio</SectionTitle>
      <PortfolioContainer>
        {works?.length > 0 &&
          works.map((work, i) => (
            <PortfolioItem key={`work_${i}`} item={work} />
          ))}
      </PortfolioContainer>

      <div />
    </SectionContainer>
  );
};

export default PortfolioSection;
