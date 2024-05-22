import { Footer } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import MobileSidebar from "../components/mobileSidebar";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
  function ({ children }) {
    return (
      <>
        <Navbar />
        <div className="flex items-start pt-16">
          <div className="hidden sm:hidden md:hidden lg:block">
            <Sidebar />
          </div>
          <div className="sm:block md:block lg:hidden">
            <MobileSidebar />
          </div>
          <MainContent>{children}</MainContent>
        </div>
      </>
    );
  };

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
}) {
  return (
    <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
      {children}
    </main>
  );
};

export default NavbarSidebarLayout;
