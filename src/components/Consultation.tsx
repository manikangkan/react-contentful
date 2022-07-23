import { useEffect, useState } from "react";
import useContentful from "../hooks/useContentful";
import Button from "./Button";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";

const Consultation = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  const { getConsultationSectionData } = useContentful();

  useEffect(() => {
    getConsultationSectionData().then((items) => {
      setData(...items);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="bg-orange-500 dark:bg-blue-500 flex flex-col items-center justify-center py-8 lg:py-16 px-4 xl:px-0 text-center">
      <Heading color="white">{data.heading}</Heading>
      <Paragraph color="white">{data.paragraph}</Paragraph>
      <Button varient="secondary">Get in touch</Button>
    </section>
  );
};

export default Consultation;
