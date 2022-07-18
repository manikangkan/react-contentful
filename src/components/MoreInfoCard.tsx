import Button from "./button/Button";
import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const MoreInfoCard = ({ item }) => {
  return (
    <div className="bg-white pt-8 px-8 rounded-lg w-1/2">
      <div className="w-20 h-20 bg-orange-100 rounded-lg mb-4"></div>
      <SubHeading>{item.title}</SubHeading>
      <Paragraph>{item.desc}</Paragraph>
      <Button varient="primary">Learn more</Button>
    </div>
  );
};

export default MoreInfoCard;
