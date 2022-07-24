import SubHeading from "../typography/SubHeading";
import Paragraph from "../typography/Paragraph";

type WhyChooseUsCardProps = {
  item: {
    subHeading: string;
    paragraph: string;
  };
};

const WhyChooseUsCard = ({
  item: { subHeading, paragraph },
}: WhyChooseUsCardProps) => {
  return (
    <li className="col-span-1">
      <div className="flex items-start space-x-2">
        <div className="mt-2 md:mt-4">✔️</div>
        <div>
          <SubHeading>{subHeading}</SubHeading>
          <Paragraph>{paragraph}</Paragraph>
        </div>
      </div>
    </li>
  );
};

export default WhyChooseUsCard;
