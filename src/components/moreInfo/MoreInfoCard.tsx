import Button from "../Button";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";

type MoreInfoCardProps = {
  item: {
    icon: string;
    subHeading: string;
    paragraph: string;
  };
};

const MoreInfoCard = ({
  item: { icon, subHeading, paragraph },
}: MoreInfoCardProps) => {
  return (
    <div className="bg-white pt-8 px-8 rounded-lg flex-1">
      <div className="w-16 h-16 text-xl bg-orange-100 dark:bg-blue-100 rounded-lg mb-4 grid place-content-center">
        {icon}
      </div>
      <SubHeading>{subHeading}</SubHeading>
      <Paragraph>{paragraph}</Paragraph>
      <Button>Learn more</Button>
    </div>
  );
};

export default MoreInfoCard;
