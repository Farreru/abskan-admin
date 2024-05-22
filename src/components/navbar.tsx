import type { FC } from "react";
import { Button, DarkThemeToggle, Navbar, Badge } from "flowbite-react";
import { HiFire } from "react-icons/hi";

const ExampleNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              {/* <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" /> */}
              <span className="transition-all duration-500 ease-in-out ml-3 self-center whitespace-nowrap text-2xl font-thin dark:text-white inline-flex items-center">
                <HiFire
                  size={30}
                  className="transition-all duration-500 ease-in-out dark:text-white dark:bg-primary-600 p-1 rounded-md shadow mr-2"
                />
                Abskan
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <DarkThemeToggle className="transition-all duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;
