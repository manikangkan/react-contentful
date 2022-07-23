import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import Button from "../Button";
import LatestNewsCard from "./LatestNewsCard";
import Heading from "../typography/Heading";

const LatestNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCardLoading, setIsCardLoading] = useState(true);

  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const { getLatestNewsSectionData } = useContentful();
  const { getLatestNewsSectionCardData } = useContentful();

  useEffect(() => {
    getLatestNewsSectionData().then((items) => {
      setData(...items);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getLatestNewsSectionCardData().then((items) => {
      setCardData(items);
      setIsCardLoading(false);
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-8 lg:py-16 px-4 xl:px-0">
      <div className="flex items-center justify-between">
        <Heading>{data.heading}</Heading>
        <Button>View all</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((item, index) => (
          <LatestNewsCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
