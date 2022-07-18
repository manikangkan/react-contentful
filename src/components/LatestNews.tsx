import Button from "./button/Button";
import LatestNewsCard from "./LatestNewsCard";
import Heading from "./typography/Heading";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1170&q=80",
    author: "Manikangkan Das",
    time: "1 hour ago",
    title: "Risk & Compliance market",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Gayatri Das",
    time: "3 days ago",
    title: "How can you break the burnout cycle",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Dipambita Baishya",
    time: "4 hour ago",
    title: "Look for a legal job opportunity for 2022",
  },
];

const LatestNews = () => {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="flex items-center justify-between">
        <Heading>Latest news</Heading>
        <Button varient="primary">View all</Button>
      </div>
      <div className="flex space-x-4">
        {items.map((item) => (
          <LatestNewsCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
