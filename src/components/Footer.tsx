const items = [
  {
    category: "LINKS",
    links: ["Home", "About", "Candidates"],
  },
  {
    category: "EXPLORE",
    links: ["Employers", "Latest news", "Contact"],
  },
  {
    category: "ADDRESS",
    links: ["+91 999 222 333 444", "manikangkan.das@yahoo.com", "Contact"],
  },
  {
    category: "CONTACT",
    links: ["India", "New Zealand"],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto flex justify-between py-16">
        <p className="text-sm">
          <strong>Beyond LTD.</strong> <br /> by manikangkandas
        </p>
        {items.map((item) => (
          <div key={item.category}>
            <p className="text-sm font-bold">{item.category}</p>
            <ul className="py-4 space-y-2">
              {item.links.map((link) => (
                <li
                  key={link}
                  className="text-sm hover:underline underline-offset-4 transition-all cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="">
        <p className="text-sm font-medium bg-gray-100 p-4 text-center">
          © {new Date().getFullYear()} Beyond LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
