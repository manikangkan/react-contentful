import { items } from "./Navbar";

const Sidebar = ({ showSidebar }) => {
  return (
    <aside
      className={`fixed w-full h-full bg-orange-500 dark:bg-blue-500 p-4 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="text-center font-medium text-white hover:bg-gray-100 hover:text-orange-500 dark:hover:text-blue-500 py-3 rounded-md cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
