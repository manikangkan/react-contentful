import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import MoreInfoCard from "./MoreInfoCard";

const MoreInfo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

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
        {data.map((item, index) => (
          <MoreInfoCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MoreInfo;
