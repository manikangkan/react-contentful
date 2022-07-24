import Button from "../Button";
import Paragraph from "../typography/Paragraph";
import SubHeading from "../typography/SubHeading";

type LatestNewsCardProps = {
  item: {
    image: string;
    subHeading: string;
    author: string;
    time: string;
  };
};

const LatestNewsCard = ({
  item: { image, subHeading, author, time },
}: LatestNewsCardProps) => {
  return (
    <div className="space-y-4">
      <img src={image} alt="news" className="rounded-md cursor-pointer" />
      <SubHeading>{subHeading}</SubHeading>
      <div>
        <Paragraph>by {author}</Paragraph>
        <Paragraph>{time}</Paragraph>
      </div>
      <Button>Read more</Button>
    </div>
  );
};

export default LatestNewsCard;
