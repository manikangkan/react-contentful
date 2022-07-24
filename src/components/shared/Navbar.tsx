export const items = [
  "About",
  "Job search",
  "Candidates",
  "Employers",
  "Latest news",
  "Contact",
];

type NavbarProps = {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
};

const Navbar = ({ showSidebar, setShowSidebar }: NavbarProps) => {
  return (
    <nav className="px-4 xl:px-0 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto py-2 flex items-center justify-between">
        <a href="https://github.com/manikangkandas">
          <img
            src="https://avatars.githubusercontent.com/u/75943412?v=4"
            alt="manikangkandas"
            className="w-10 h-10 rounded-md hover:rounded-full ring-1 ring-orange-500 dark:ring-blue-500 p-0.5 cursor-pointer"
          />
        </a>
        <div
          className="md:hidden cursor-pointer hover:bg-gray-100 p-2 rounded-full"
          onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? "➖" : "🟰"}
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm font-medium hover:bg-gray-100 py-3 px-4 rounded-md cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
