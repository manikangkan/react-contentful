import Consultation from "../components/Consultation";
import Hero from "../components/hero/Hero";
import LatestNews from "../components/latestNews/LatestNews";
import MoreInfo from "../components/moreInfo/MoreInfo";
import TeamInfo from "../components/teamInfo/TeamInfo";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <TeamInfo />
      <LatestNews />
      <MoreInfo />
      <Consultation />
    </>
  );
};

export default Home;
