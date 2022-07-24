import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

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
  const { theme, setTheme } = useContext<any>(ThemeContext);
  console.log(theme);
  return (
    <footer>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-8 py-8 lg:py-16 px-4 xl:px-0">
        {items.map((item) => (
          <div key={item.category} className="col-span-1">
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
        <div className="space-y-2">
          <p className="text-sm font-bold">THEME</p>
          <div className="flex space-x-2">
            <div
              className={`bg-orange-500 w-6 h-6 cursor-pointer ${
                theme === "light" ? "rounded-full" : "rounded-sm"
              }`}
              onClick={() => setTheme(theme === "dark" ? "light" : "light")}
            />
            <div
              className={`bg-blue-500 w-6 h-6 cursor-pointer ${
                theme === "dark" ? "rounded-full" : "rounded-sm"
              }`}
              onClick={() => setTheme(theme === "light" ? "dark" : "dark")}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-sm font-medium bg-gray-100 p-4 text-center">
          © {new Date().getFullYear()} Beyond LTD. by manikangkandas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
