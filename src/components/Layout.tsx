import { useState } from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
