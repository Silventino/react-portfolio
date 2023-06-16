/** @jsxImportSource @emotion/react */

import CallIcon from "@mui/icons-material/Call";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

export const menuItems = [
  {
    url: "/#home",
    icon: <HomeIcon color="secondary" />,
    component: <HomeSection id="home" key="home" />,
    name: "Home",
  },
  {
    url: "/#about",
    icon: <PersonIcon color="secondary" />,
    component: <AboutSection id="about" key="about" />,
    name: "About",
  },
  {
    url: "/#experience",
    icon: <SchoolIcon color="secondary" />,
    component: <ExperienceSection id="experience" key="experience" />,
    name: "Experience",
  },
  {
    url: "/#portfolio",
    icon: <CollectionsBookmarkIcon color="secondary" />,
    component: <PortfolioSection id="portfolio" key="portfolio" />,
    name: "Portfolio",
  },
  {
    url: "/#contact",
    icon: <CallIcon color="secondary" />,
    component: <ContactSection id="contact" key="contact" />,
    name: "Contact",
  },
];

const MainPage: React.FC = () => {
  return <>{menuItems.map((item) => item.component)}</>;
};

export default MainPage;
