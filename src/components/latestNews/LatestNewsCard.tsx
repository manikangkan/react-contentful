import Button from "../Button";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";

const LatestNewsCard = ({ item }) => {
  return (
    <div className="space-y-4">
      <img src={item.image} alt="news" className="rounded-md cursor-pointer" />
      <SubHeading>{item.subHeading}</SubHeading>
      <div>
        <Paragraph>by {item.author}</Paragraph>
        <Paragraph>{item.time}</Paragraph>
      </div>
      <Button>Read more</Button>
    </div>
  );
};

export default LatestNewsCard;
