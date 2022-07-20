import MoreInfoCard from "./MoreInfoCard";

const items = [
  {
    icon: "👜",
    title: "Candiates",
    desc: "We are dedicated to matching highly skilled professionals to the right business, with the right team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu.",
  },
  {
    icon: "🎓",
    title: "Employers",
    desc: "We exist because  businesses want to hire the best people. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu.",
  },
];

const MoreInfo = () => {
  return (
    <section className="bg-gray-100 py-4 lg:py-16 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {items.map((item) => (
          <MoreInfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MoreInfo;
