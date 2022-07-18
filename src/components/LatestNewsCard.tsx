import Button from "./button/Button";
import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const LatestNewsCard = ({ item }) => {
  return (
    <div key={item.title} className="rounded-md overflow-hidden space-y-4">
      <img src={item.image} alt="news" className="cursor-pointer"/>
      <SubHeading>{item.title}</SubHeading>
      <div>
        <Paragraph>by {item.author}</Paragraph>
        <Paragraph>{item.time}</Paragraph>
      </div>
      <Button varient="primary">Read more</Button>
    </div>
  );
};

export default LatestNewsCard;
