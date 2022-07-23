import SubHeading from "../typography/SubHeading";
import Paragraph from "../typography/Paragraph";

const WhyChooseUsCard = ({ item }) => {
  return (
    <li className="col-span-1">
      <div className="flex items-start space-x-2">
        <div className="mt-2 md:mt-4">✔️</div>
        <div>
          <SubHeading>{item.subHeading}</SubHeading>
          <Paragraph>{item.paragraph}</Paragraph>
        </div>
      </div>
    </li>
  );
};

export default WhyChooseUsCard;
