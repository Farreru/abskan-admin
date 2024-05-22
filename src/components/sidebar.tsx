import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
  HiLogout,
} from "react-icons/hi";

const ExampleSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2 transition-all duration-500 ease-in-out">
        <div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/"
                icon={HiChartPie}
                className={
                  "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                }
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse
                label="Master Data"
                icon={HiClipboard}
                open={[
                  "/master-data/pengguna",
                  "/master-data/jurusan",
                  "/master-data/guru",
                  "/master-data/siswa",
                ].includes(currentPage)}
              >
                <Sidebar.Item
                  href="/master-data/pengguna"
                  icon={HiUsers}
                  className={
                    "/master-data/pengguna" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  Pengguna
                </Sidebar.Item>
                <Sidebar.Item
                  href="/master-data/jurusan"
                  icon={HiCollection}
                  className={
                    "/master-data/jurusan" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  Jurusan
                </Sidebar.Item>
                <Sidebar.Item
                  href="/master-data/guru"
                  icon={HiCollection}
                  className={
                    "/master-data/guru" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  Guru
                </Sidebar.Item>
                <Sidebar.Item
                  href="/master-data/siswa"
                  icon={HiCollection}
                  className={
                    "/master-data/siswa" === currentPage
                      ? "bg-gray-100 dark:bg-gray-700"
                      : ""
                  }
                >
                  Siswa
                </Sidebar.Item>
              </Sidebar.Collapse>
              {/* <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                Sign in
              </Sidebar.Item>
              <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                Sign up
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/logout"
                className="bg-red-200 border-2 border-collapse shadow-lg border-red-600 dark:border-gray-700 dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-400 text-black dark:text-white "
              >
                <div className="flex justify-between items-center">
                  Logout
                  <HiLogout className="w-6 h-6" />
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;
