import Consultation from "../components/Consultation";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import MoreInfo from "../components/MoreInfo";
import TeamInfo from "../components/TeamInfo";
import WhyChooseUs from "../components/WhyChooseUs";

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
