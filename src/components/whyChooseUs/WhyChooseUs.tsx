import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import SectionHeaderPragraphSkeletonLoader from "../shared/SectionHeaderPragraphSkeletonLoader";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUsCardSkeletonLoader from "./WhyChooseUsCardSkeletonLoader";

const WhyChooseUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCardLoading, setIsCardLoading] = useState(true);

  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const { getWhyChooseUsSectionData } = useContentful();
  const { getWhyChooseUsSectionCardData } = useContentful();

  useEffect(() => {
    getWhyChooseUsSectionData().then((items) => {
      setData(...items);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getWhyChooseUsSectionCardData().then((items) => {
      setCardData(items);
      setIsCardLoading(false);
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto space-y-16 py-8 lg:py-16 px-4 xl:px-0">
      <div className="text-center">
        {isLoading ? (
          <SectionHeaderPragraphSkeletonLoader />
        ) : (
          <>
            <Heading>{data.heading}</Heading>
            <Paragraph>{data.paragraph}</Paragraph>
          </>
        )}
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
        {isCardLoading
          ? [...Array(3)].map((_, index) => (
              <WhyChooseUsCardSkeletonLoader key={index} />
            ))
          : cardData.map((item, index) => (
              <WhyChooseUsCard key={index} item={item} />
            ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;