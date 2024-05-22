import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiUsers,
  HiLogout,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import type { FC } from "react";

const MobileSidebar: FC = () => {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, []);

  return (
    <Sidebar aria-label="Mobile sidebar navigation">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            icon={HiChartPie}
            className={
              currentPage === "/" ? "bg-gray-100 dark:bg-gray-700" : ""
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
                currentPage === "/master-data/pengguna"
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
                currentPage === "/master-data/jurusan"
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
                currentPage === "/master-data/guru"
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
                currentPage === "/master-data/siswa"
                  ? "bg-gray-100 dark:bg-gray-700"
                  : ""
              }
            >
              Siswa
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/logout"
            className="bg-red-200 border-2 border-collapse shadow-lg border-red-600 dark:border-gray-700 dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-400 text-black dark:text-white"
          >
            <div className="flex justify-between items-center">
              Logout
              <HiLogout className="w-6 h-6" />
            </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default MobileSidebar;
