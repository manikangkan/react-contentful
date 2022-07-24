import Title from "../typography/Title";
import Button from "../Button";
import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import HeroSkeletonLoader from "./HeroSkeletonLoader";

const Hero = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<any | null>(null);

  const { getHeroSectionData } = useContentful();

  useEffect(() => {
    getHeroSectionData().then((items) => {
      setData(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="py-64 px-4 xl:px-0 relative">
      {isLoading ? (
        <HeroSkeletonLoader />
      ) : (
        <>
          <div className="max-w-6xl mx-auto">
            <Title>{data[0].title}</Title>
            <Button variant="primary">Play showreel</Button>
          </div>
          <img
            src={data[0].image}
            alt="hero image"
            className="absolute -z-50 h-full w-full object-cover top-0 bottom-0 left-0 right-0"
          />
        </>
      )}
    </section>
  );
};

export default Hero;
