import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const WhyChooseUsCard = ({ item }) => {
  return (
    <li key={item.title} className="col-span-1">
      <SubHeading>{item.title}</SubHeading>
      <Paragraph>{item.description}</Paragraph>
    </li>
  );
};

export default WhyChooseUsCard;
