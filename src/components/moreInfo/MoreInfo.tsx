import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import MoreInfoCard from "./MoreInfoCard";
import MoreInfoCardSkeletonLoader from "./MoreInfoCardSkeletonLoader";

const MoreInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<any | null>(null);

  const { getMoreInfoSectionCardData } = useContentful();

  useEffect(() => {
    getMoreInfoSectionCardData().then((items) => {
      setData(items);
      setIsLoading(false);
    });
  }, []);
  return (
    <section className="bg-gray-100 py-4 lg:py-16 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {isLoading
          ? [...Array(2)].map((_, index) => <MoreInfoCardSkeletonLoader key={index}/>)
          : data.map((item: any, index: number) => (
              <MoreInfoCard key={index} item={item} />
            ))}
      </div>
    </section>
  );
};

export default MoreInfo;
