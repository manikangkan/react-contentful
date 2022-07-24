import { useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";
import Button from "./Button";
import SectionHeaderPragraphSkeletonLoader from "./shared/SectionHeaderPragraphSkeletonLoader";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";

const Consultation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<any | null>(null);

  const { getConsultationSectionData } = useContentful();

  useEffect(() => {
    getConsultationSectionData().then((items) => {
      setData(items);
      setIsLoading(false);
    });
  }, []);
  return (
    <section className="bg-orange-500 dark:bg-blue-500 py-8 lg:py-16 px-4 xl:px-0 text-center">
      {isLoading ? (
        <SectionHeaderPragraphSkeletonLoader />
      ) : (
        <>
          <Heading color="white">{data[0].heading}</Heading>
          <Paragraph color="white">{data[0].paragraph}</Paragraph>
        </>
      )}
      <Button variant="secondary">Get in touch</Button>
    </section>
  );
};

export default Consultation;
