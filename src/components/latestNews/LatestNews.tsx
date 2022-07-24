import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import Button from "../Button";
import LatestNewsCard from "./LatestNewsCard";
import Heading from "../typography/Heading";
import LatestNewsCardSkeletonLoader from "./LatestNewsCardSkeletonLoader";

const LatestNews = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  const [data, setData] = useState<any | null>(null);
  const [cardData, setCardData] = useState<any | null>(null);

  const { getLatestNewsSectionData } = useContentful();
  const { getLatestNewsSectionCardData } = useContentful();

  useEffect(() => {
    getLatestNewsSectionData().then((items) => {
      setData(items);
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
        {isLoading ? (
          <div className="h-10 w-1/2 rounded-full bg-gray-200 animate-pulse" />
        ) : (
          <Heading>{data[0].heading}</Heading>
        )}
        <Button>View all</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isCardLoading
          ? [...Array(3)].map((_, index) => (
              <LatestNewsCardSkeletonLoader key={index} />
            ))
          : cardData?.map((item: any, index: number) => (
              <LatestNewsCard key={index} item={item} />
            ))}
      </div>
    </section>
  );
};

export default LatestNews;
