import Button from "./button/Button";
import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const MoreInfoCard = ({ item }) => {
  return (
    <div className="bg-white pt-8 px-8 rounded-lg flex-1">
      <div className="w-16 h-16 text-xl bg-orange-100 dark:bg-blue-100 rounded-lg mb-4 grid place-content-center">{item.icon}</div>
      <SubHeading>{item.title}</SubHeading>
      <Paragraph>{item.desc}</Paragraph>
      <Button>Learn more</Button>
    </div>
  );
};

export default MoreInfoCard;
