const items = [
  "About",
  "Job search",
  "Candidates",
  "Employers",
  "Latest news",
  "Contact",
];

const Nav = () => {
  return (
    <nav className="max-w-6xl mx-auto py-2 flex items-center justify-between">
      <img
        src="https://avatars.githubusercontent.com/u/75943412?v=4"
        alt="manikangkandas"
        className="w-12 h-12 rounded-full ring-1 p-0.5 cursor-pointer"
      />
      <ul className="flex items-center space-x-4">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm font-medium hover:bg-gray-100 py-3 px-4 rounded-md cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
