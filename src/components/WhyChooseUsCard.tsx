import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const WhyChooseUsCard = ({ item }) => {
  return (
    <li className="col-span-1">
      <div className="flex items-start space-x-2">
        <div className="mt-2 md:mt-4">✔️</div>
        <div>
          <SubHeading>{item.title}</SubHeading>
          <Paragraph>{item.description}</Paragraph>
        </div>
      </div>
    </li>
  );
};

export default WhyChooseUsCard;
