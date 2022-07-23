import Title from "./typography/Title";
import Button from "./Button";
import { useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  const { getHeroSectionData } = useContentful();

  useEffect(() => {
    getHeroSectionData().then((items) => {
      setData(...items);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="py-64 px-4 xl:px-0 relative">
      <div className="max-w-6xl mx-auto">
        {isLoading ? (
          <div className="h-10 w-1/2 rounded-full bg-gray-400 animate-pulse" />
        ) : (
          <Title>{data.title}</Title>
        )}
        <Button varient="primary">Play showreel</Button>
      </div>
      {isLoading ? (
        <div className="absolute -z-50 h-full w-full object-cover top-0 bottom-0 left-0 right-0 bg-gray-400 animate-pulse" />
      ) : (
        <img
          src={data.image}
          alt="hero image"
          className="absolute -z-50 h-full w-full object-cover top-0 bottom-0 left-0 right-0"
        />
      )}
    </section>
  );
};

export default Hero;
