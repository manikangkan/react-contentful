import { useState } from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
