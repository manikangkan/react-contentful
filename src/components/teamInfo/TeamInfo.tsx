import { useEffect, useState } from "react";
import useContentful from "../../hooks/useContentful";
import Button from "../Button";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";
import TeamInfoSkeletonLoader from "./TeamInfoSkeletonLoader";

const TeamInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<any | null>(null);

  const { getTeamInfoSectionData } = useContentful();

  useEffect(() => {
    getTeamInfoSectionData().then((items) => {
      setData(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="py-8 lg:py-16 px-4 xl:px-0 bg-orange-50 dark:bg-blue-50">
      {isLoading ? (
        <TeamInfoSkeletonLoader />
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <img
            src={data[0].image}
            alt="team info image"
            className="lg:w-1/2 rounded-lg"
          />
          <div>
            <SubHeading>{data[0].subHeading}</SubHeading>
            <Heading>{data[0].heading}</Heading>
            <Paragraph>{data[0].paragraph}</Paragraph>
            <Button>Learn more</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamInfo;
